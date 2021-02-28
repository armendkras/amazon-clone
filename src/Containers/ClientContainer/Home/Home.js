import React from "react";
import "./Home.css";
import Products from "../../../Components/ClientComponents/Products/Products";
function Home() {
  return (
    <div className="home">
      <div className="home__containter">
        <img
          className="home__image"
          src="
          https://media2.fdncms.com/memphisflyer/imager/u/original/10806297/amazon-1200x537.png"
        />
        <Products className="anmProduct" />
      </div>
    </div>
  );
}

export default Home;
