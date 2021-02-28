import React from "react";
import CheckoutProduct from "../../../Components/ClientComponents/CheckoutProducts/CheckoutProduct.js";
import Subtotal from "../../../Components/ClientComponents/Subtotal/Subtotal";
import { useStateValue } from "../../../StateProvider/StateProvider.js";
import "./Checkout.css";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">
            {user ? "Your Shopping Basket" : "Sign in First"}
          </h2>
          <FlipMove>
            {basket.map((item) => (
              <div>
                <CheckoutProduct
                  key={item.id + 1}
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
