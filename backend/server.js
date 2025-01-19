const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Stripe and Nodemailer setup
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");

// Payment Intent Endpoint
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Serve PDF securely after successful payment
app.post("/payment-success", async (req, res) => {
  const { paymentIntentId, email, product } = req.body;

  try {
    // Validate payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === "succeeded") {
      // Map product to file path
      const fileMap = {
        "12-Week Plan": "12-week-plan.pdf",
        "Beginner Plan": "beginner-plan.pdf",
        "Advanced Plan": "advanced-plan.pdf",
      };

      const fileName = fileMap[product];
      if (!fileName) {
        return res.status(404).send({ error: "Product not found" });
      }

      // Securely serve the file
      const filePath = path.join(__dirname, "secure-files", fileName);

      // Send email with download link (optional)
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const downloadLink = `${
        process.env.SERVER_URL
      }/download?file=${encodeURIComponent(fileName)}`;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Purchase Confirmation",
        text: `Thank you for your payment! Download your file here: ${downloadLink}\n\nNote: The link will expire in 24 hours.`,
      };

      await transporter.sendMail(mailOptions);

      res
        .status(200)
        .send({
          message: "Payment successful! Email sent with the download link.",
        });
    } else {
      res.status(400).send({ error: "Payment not successful" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Secure download route
app.get("/download", (req, res) => {
  const { file } = req.query;

  // Validate the file name
  const allowedFiles = [
    "12-week-plan.pdf",
    "beginner-plan.pdf",
    "advanced-plan.pdf",
  ];
  if (!allowedFiles.includes(file)) {
    return res.status(403).send({ error: "Unauthorized access" });
  }

  const filePath = path.join(__dirname, "secure-files", file);
  res.download(filePath, file, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send({ error: "Could not send file" });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
