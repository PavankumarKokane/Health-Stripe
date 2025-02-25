import React,{useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../Styles/HealthPlans.css";
const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);
const HealthPlans = () => {
    const [error, setError] = useState(null);
  console.log("error", error);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const planId = event.target.getAttribute("data-plan");
    console.log("planId", planId);

    const baseUrl = window.location.origin;
    console.log(baseUrl);


    const stripe = await stripePromise;

    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: planId, quantity: 1 }], // Replace 'price_12345' with your actual product price ID
        mode: "payment",
        successUrl: `${baseUrl}/success`,
        cancelUrl: `${baseUrl}/cancel`,
      });

      if (error) {
        setError(error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div>
      <div className="health-plans-container">
        <div className="health-plan">
          <h2>Basic Plan</h2>
          <p>₹500 per month</p>
          <ul>
            <li>Basic coverage</li>
            <li>Regular check-ups</li>
          </ul>
          <button
            type="submit"
            data-plan={process.env.REACT_APP_BASIC}
            onClick={handleSubmit}
          >
            Buy Plan
          </button>
        </div>
        <div className="health-plan">
          <h2>Silver Plan</h2>
          <p>₹1000 per month</p>
          <ul>
            <li>Enhanced coverage</li>
            <li>Annual health screening</li>
          </ul>
          <button
            data-plan={process.env.REACT_APP_SILVER}
            onClick={handleSubmit}
          >
            Buy Plan
          </button>
        </div>
        <div className="health-plan">
          <h2>Gold Plan</h2>
          <p>₹1500 per month</p>
          <ul>
            <li>Comprehensive coverage</li>
            <li>Dental and vision included</li>
          </ul>
          <button
            data-plan={process.env.REACT_APP_GOLD}
            onClick={handleSubmit}
          >
            Buy Plan
          </button>
        </div>
        <div className="health-plan">
          <h2>Premium Plan</h2>
          <p>₹2000 per month</p>
          <ul>
            <li>Top-tier coverage</li>
            <li>24/7 access to specialists</li>
          </ul>
          <button
            data-plan={process.env.REACT_APP_PREMIUM}
            onClick={handleSubmit}
          >
            Buy Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthPlans;
