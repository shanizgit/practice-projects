import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
  function Header() {
    return (
      <header className="header">
        <h1>FAST REACT PIZZA Co.</h1>
      </header>
    );
  }
  function Menu() {
    return (
      <menu className="menu">
        <h2>Our Menu</h2>
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={10}
          photo="pizzas\spinaci.jpg"
        />
        <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          photo="pizzas/focaccia.jpg"
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          price={12}
          photo="pizzas/margherita.jpg"
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={11}
          photo="pizzas/funghi.jpg"
        />
        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          price={15}
          photo="pizzas/salamino.jpg"
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={9}
          photo="pizzas/prosciutto.jpg"
        />
      </menu>
    );
  }
  function Pizza(props) {
    return (
      <div className="pizza">
        <img src={props.photo} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price}</span>
        </div>
      </div>
    );
  }
  function Footer() {
    const hour = new Date().getHours();
    const openHour = 20;
    const closeHour = 1;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    return (
      <footer className="footer">
        {new Date().toLocaleTimeString()}.We're currently open
      </footer>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
