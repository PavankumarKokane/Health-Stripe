import React from 'react';
import '../Styles/PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h2 className="success-message">Payment Successful!</h2>
      <p className="success-description">Thank you for your payment. Your transaction has been processed successfully.</p>
    </div>
  );
};

export default PaymentSuccess;
