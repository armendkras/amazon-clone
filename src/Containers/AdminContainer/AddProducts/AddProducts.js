import React, { useState } from "react";
import firebase from "firebase";
import { db } from "../../../firebase/firebase";
import "./AddProducts.css";
import { useForm } from "react-hook-form";

function AddProducts() {
  // const [imageUrl, setImageUrl] = useState("");
  // const [price, setPrice] = useState("");
  // const [rating, setRating] = useState("");
  // const [title, setTitle] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();

  const AddSubmit = async (data) => {
    // preventDefault();
    db.collection("products").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: data.imageUrl,
      price: data.price,
      rating: data.rating,
      title: data.title,
    });
    reset();
  };
  return (
    <div className="addProduct">
      <div className="forma">
        <h1 style={{ color: "#131921" }}>Product Info</h1>
        <form onSubmit={handleSubmit(AddSubmit)}>
          <div className="Couple">
            <h4>Image Url</h4>
            <input
              ref={register({ required: true, minLength: 10 })}
              name="imageUrl"
              type="text"
              // value={imageUrl}
              // onChange={(e) => setImageUrl(e.target.value)}
            />
            {errors.imageUrl && errors.imageUrl.type === "required" && (
              <p>This is required</p>
            )}
            {errors.imageUrl && errors.imageUrl.type === "minLength" && (
              <p>Invalid Url</p>
            )}
          </div>
          <div className="Couple">
            <h4>Title</h4>
            <input
              ref={register({
                required: { value: true, message: "This Field is Required" },
                maxLength: { value: 30, message: "No more than 30 chars" },
                minLength: { value: 3, message: "Not less than 3 chars" },
              })}
              name="title"
              type="text"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />

            {errors.title?.message && <p>{errors.title?.message}</p>}
          </div>
          <div className="Couple">
            <h4>Price</h4>
            <input
              ref={register({
                required: { value: true, message: "This Field is Required" },
                max: { value: 5000, message: "No more than 5000$" },
                min: { value: 1, message: "Not less than 1$" },
              })}
              name="price"
              type="number"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />

            {errors.price?.message && <p>{errors.price?.message}</p>}
          </div>
          <div className="Couple">
            <h4>Rating</h4>
            <input
              ref={register({
                required: { value: true, message: "This Field is Required" },
                max: { value: 5, message: "No more than 5 Stars" },
                min: { value: 1, message: "Not less than 1 Stars" },
              })}
              name="rating"
              type="number"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />

            {errors.rating?.message && <p>{errors.rating?.message}</p>}
          </div>
          <button type="submit" className="addButton">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
