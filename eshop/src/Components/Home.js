import React from "react";
import "../Styles/Home.css";
import Product from "../Components/Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://c1.wallpaperflare.com/preview/341/377/131/shopping-paper-commercial.jpg"
            alt="bg_image"
            className="home_image"
          />
          <h1 className="slogan">Time with Perfection</h1>
          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
