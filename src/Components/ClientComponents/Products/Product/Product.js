import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../../../../StateProvider/StateProvider";

function Product({ product, id }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Dispatch the item into data layers
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: product.title,
        image: product.image,
        price: Number(product.price),
        rating: Number(product.rating),
      },
    });
  };
  const alertMessage = () => {
    alert("Sign In to Add and Buy Products");
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>
        <p className="product__price">
          <small>$</small>
          <small>{product.price}</small>
        </p>
        <div className="product__rating">
          {Array(Number(product.rating))
            .fill()
            .map((_, i) => (
              <p key={i} className="starStyle">
                <StarRateIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={product.image} alt="" />
      <button className="buttonAdd" onClick={user ? addToBasket : alertMessage}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
