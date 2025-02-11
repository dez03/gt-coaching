import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const PaymentForm = ({ productId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      // Create Payment Intent on your server
      const res = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: Number(productId) }),
      });
      const data = await res.json();
      const clientSecret = data.clientSecret;
      
      // Confirm the payment using Stripe.js
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { email },
        },
      });
      
      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        // Inform your backend that payment was successful
        const successRes = await fetch('/payment-success', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentIntentId: result.paymentIntent.id,
            email,
            productId: Number(productId),
          }),
        });
        const successData = await successRes.json();
        if (successRes.ok) {
          alert("Payment successful! Check your email for the download link.");
        } else {
          alert("Error: " + successData.error);
        }
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Your Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

const Sales = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const plans = [
    { id: 1, name: '12-Week Plan', price: '$10.00' },
    { id: 2, name: 'Beginner Plan', price: '$20.00' },
    { id: 3, name: 'Advanced Plan', price: '$30.00' },
  ];

  return (
    <div>
      <header>
        <h1>GT Coaching - Plans</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/transformations">Transformations</Link>
          <Link to="/sales">Plans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      
      <section id="plans">
        <h2>Our Plans</h2>
        <div className="plans-list">
          {plans.map(plan => (
            <div key={plan.id} className="plan">
              <h3>{plan.name}</h3>
              <p>Price: {plan.price}</p>
              <button onClick={() => setSelectedProductId(plan.id)}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>
      
      {selectedProductId && (
        <div id="payment-section">
          <h2>Complete Your Payment</h2>
          <Elements stripe={stripePromise}>
            <PaymentForm productId={selectedProductId} />
          </Elements>
        </div>
      )}
      
      <footer>
        <p>&copy; 2025 GT Coaching</p>
      </footer>
    </div>
  );
};

export default Sales;