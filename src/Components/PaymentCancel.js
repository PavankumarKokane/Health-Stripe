import React from 'react';
import '../Styles/PaymentCancel.css';

const PaymentCancel = () => {
  return (
    <div className="payment-cancel-container">
      <h2>Payment Cancelled</h2>
      <p>Your payment was cancelled.</p>
      <button onClick={() => window.location.href = '/'}>Go back to home</button>
    </div>
  );
};

export default PaymentCancel;
