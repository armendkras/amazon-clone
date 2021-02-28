import React, { useEffect, useState } from "react";
import "./ProductsAdm.css";
import ProductAdm from "../../../Components/AdminComponents/ProductAdm/ProductAdm";
import { useStateValue } from "../../../StateProvider/StateProvider";
import { db } from "../../../firebase/firebase";
import FlipMove from "react-flip-move";
function ProductsAdm() {
  const [{ user }] = useStateValue();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (user) {
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
    } else {
      setProducts([]);
    }
  }, [user]);
  return (
    <div className="ProductsAdm">
      <div className="headerProductadm">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="product image"
          className="productImage"
        />
        <div className="products__infoAdm">
          <p>TITLE</p>
        </div>
        <div className="products__infoAdm">
          <p>PRICE($) </p>
        </div>
        <div className="products__infoAdm">
          <p>RATING</p>
        </div>
        <div className="products__infoAdm">
          <p>DELETE</p>
        </div>
      </div>
      <FlipMove>
        {products?.map((product) => (
          <div>
            <ProductAdm key={product.id} product={product} />
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default ProductsAdm;
