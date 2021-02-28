import React from "react";
import "./ProductAdm.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db } from "../../../firebase/firebase";
function ProductAdm({ product }) {
  const deleteHandler = () => {
    db.collection("products").doc(product.id).delete();
  };
  return (
    <div className="productAdm">
      <div className="product__infoAdm">
        <img
          src={product.data.image}
          alt="product image"
          className="productImage"
        />
        <div className="product__infoAdm">
          <p>{product.data.title}</p>
        </div>
        <div className="product__infoAdm">
          <p>{product.data.price}</p>
        </div>
        <div className="product__infoAdm">
          <p>{product.data.rating}</p>
        </div>
        <div className="product__infoAdm">
          <DeleteForeverIcon onClick={deleteHandler} className="delete" />
        </div>
      </div>
    </div>
  );
}

export default ProductAdm;
