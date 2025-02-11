const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// Unified product list with unique product IDs
const products = new Map([
  [1, { 
    name: "12-Week Plan", 
    priceInCents: 1000, 
    fileName: "12-week-plan.pdf" 
  }],
  [2, { 
    name: "Beginner Plan", 
    priceInCents: 2000, 
    fileName: "beginner-plan.pdf" 
  }],
  [3, { 
    name: "Advanced Plan", 
    priceInCents: 3000, 
    fileName: "advanced-plan.pdf" 
  }],
]);

/**
 * POST /create-payment-intent
 * Expects: { productId: number }
 * Returns: { clientSecret }
 */
app.post("/create-payment-intent", async (req, res) => {
  const { productId } = req.body;
  const product = products.get(productId);
  
  if (!product) {
    return res.status(400).send({ error: "Invalid product" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.priceInCents,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/**
 * POST /payment-success
 * Expects: { paymentIntentId, email, productId }
 * On successful payment, sends an email with a secure download link.
 */
app.post("/payment-success", async (req, res) => {
  const { paymentIntentId, email, productId } = req.body;
  const product = products.get(productId);
  
  if (!product) {
    return res.status(400).send({ error: "Invalid product" });
  }

  try {
    // Validate the payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === "succeeded") {
      const fileName = product.fileName;

      // Generate a JWT token for the download link that expires in 24 hours.
      const downloadToken = jwt.sign(
        { file: fileName },
        process.env.DOWNLOAD_LINK_SECRET,
        { expiresIn: "24h" }
      );

      const downloadLink = `${process.env.SERVER_URL}/download?token=${downloadToken}`;

      // Set up the Nodemailer transporter.
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Purchase Confirmation",
        text: `Thank you for your payment! Download your file here: ${downloadLink}\n\nNote: This link will expire in 24 hours.`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).send({
        message: "Payment successful! An email has been sent with the download link.",
      });
    } else {
      res.status(400).send({ error: "Payment not successful" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/**
 * GET /download
 * Expects a query parameter: token (JWT token with file info)
 * Serves the requested PDF file if the token is valid and not expired.
 */
app.get("/download", (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).send({ error: "Missing download token" });
  }

  try {
    // Verify the token
    const payload = jwt.verify(token, process.env.DOWNLOAD_LINK_SECRET);
    const fileName = payload.file;

    // Validate that the file is allowed.
    const allowedFiles = ["12-week-plan.pdf", "beginner-plan.pdf", "advanced-plan.pdf"];
    if (!allowedFiles.includes(fileName)) {
      return res.status(403).send({ error: "Unauthorized access" });
    }

    const filePath = path.join(__dirname, "secure-files", fileName);
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send({ error: "Could not send file" });
      }
    });
  } catch (error) {
    res.status(403).send({ error: "Invalid or expired download token" });
  }
});

/**
 * POST /contact
 * Expects: { name, email, message }
 * Sends a contact email to the website owner.
 */
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Update this if the recipient should be different.
    subject: `Contact Form Submission from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ message: "Message sent successfully." });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Serve static files for your frontend (HTML, CSS, JS) from the "public" folder.
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));