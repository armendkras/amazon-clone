import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product/Product";
import { db } from "../../../firebase/firebase";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
      .orderBy("timestamp", "desc")
      .onSnapshot((product) =>
        setProducts(
          product.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="home__container">
      {products?.map((product) => (
        <div key={product.id} className="home__row">
          <Product key={product.id} id={product.id} product={product.data} />
        </div>
      ))}
    </div>
  );
}

export default Products;
