import React from 'react'

export const PreviewCheckout = () => {
  return (
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
    <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
    </div>

    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </div>
  )
}
