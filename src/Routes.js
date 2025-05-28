// import express from 'express';
// import stripe from 'stripe';
// import dotenv from 'dotenv';

// dotenv.config();

// const router = express.Router();
// const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

// // Example route: Create Checkout Session
// router.post('/create-checkout-session', async (req, res) => {
//   const { items } = req.body;

//   const priceMap = {
//     "pdf1": "price_abc123",
//     "pdf2": "price_def456",
//     "pdf3": "price_xyz789",
//   };

//   const line_items = items.map(item => ({
//     price: priceMap[item.id],
//     quantity: item.quantity
//   }));

//   try {
//     const session = await stripeInstance.checkout.sessions.create({
//       line_items,
//       mode: 'payment',
//       success_url: `${process.env.CLIENT_URL}/success`,
//       cancel_url: `${process.env.CLIENT_URL}/cancel`,
//     });

//     res.status(200).json({ url: session.url });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;