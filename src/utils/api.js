const createCheckoutSession = async (itemId) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: itemId, quantity: 1 }] }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("No redirect URL found.");
    }
  } catch (err) {
    console.error("Checkout error:", err);
  }
};

export default createCheckoutSession;