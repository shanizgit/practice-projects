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
            <Product
              id="15698456"
              title="Workwear Watch with Grey Dial Leather Strap"
              image="https://staticimg.titan.co.in/Titan/Catalog/2648WL01_1.jpg?impolicy=pqmed&imwidth=640"
              price={69}
              rating={4}
            />
            <Product
              id="45698569"
              title="Workwear Silver Dial Rose Gold Stainless Steel Strap Watch"
              image="https://staticimg.titan.co.in/Titan/Catalog/2651WM02_1.jpg?impolicy=pqmed&imwidth=640"
              price={77}
              rating={4}
            />
            <Product
              id="98756358"
              title="Lagan Silver Dial Metal Strap Watch"
              image="https://staticimg.titan.co.in/Titan/Catalog/2656WM01_1.jpg?impolicy=pqmed&imwidth=640"
              price={81}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="13648522"
              title="Animalia from Titan"
              image="https://staticimg.titan.co.in/Titan/Catalog/95129QM01_1.jpg?impolicy=pqmed&imwidth=640"
              price={63}
              rating={4}
            />
            <Product
              id="96874563"
              title="Raga Moments of Joy Watch with Green Dial & Brass Strap"
              image="https://staticimg.titan.co.in/Titan/Catalog/95134QM01_1.jpg?impolicy=pqmed&imwidth=640"
              price={68}
              rating={4}
            />
            <Product
              id="31665429"
              title="Titan Evoke with large 1.43"
              image="https://staticimg.titan.co.in/Titan/Catalog/90172AM01_2.jpg?impolicy=pqmed&imwidth=640"
              price={52}
              rating={3}
            />
          </div>
          <div className="home_row">
            <Product
              id="96581122"
              title="Workwear Green Dial Silver Stainless Steel Strap Watch"
              image="https://staticimg.titan.co.in/Titan/Catalog/2651SM02_1.jpg?impolicy=pqmed&imwidth=640"
              price={71}
              rating={5}
            />
            <Product
              id="56982255"
              title="Stellar by Titan Black Dial Analog Watch for Women"
              image="https://staticimg.titan.co.in/Titan/Catalog/95083WM02_1.jpg?impolicy=pqmed&imwidth=640"
              price={75}
              rating={5}
            />
            <Product
              id="65986541"
              title="Raga Viva Rose Gold Dial Metal Strap Watch"
              image="https://staticimg.titan.co.in/Titan/Catalog/2644KM02_1.jpg?impolicy=pqmed&imwidth=640"
              price={62}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
