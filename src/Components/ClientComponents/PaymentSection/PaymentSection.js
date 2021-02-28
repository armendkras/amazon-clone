import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProducts/CheckoutProduct";
import "./PaymentSection.css";
import FlipMove from "react-flip-move";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../StateProvider/reducer";
import { db } from "../../../firebase/firebase";

function PaymentSection() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .add({
        basket: basket,
        amount: getBasketTotal(basket) * 100,
        created: Date.now() / 1000,
      });

    dispatch({
      type: "EMPTY_BASKET",
    });
    history.replace("/orders");
  };

  return (
    <div className="payment__container">
      <h1>
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h1>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delevry Addres</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>123 React State of Facebook</p>
          <p> Instagram, US</p>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__items">
          <FlipMove>
            {basket?.map((item) => (
              <div>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          <form onSubmit={handleSubmit}>
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total:{value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
              />
              <button
                style={{ cursor: "pointer" }}
                disabled={basket.length == 0}
              >
                <span>Buy Now"</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
