import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import PizzaList from "./PizzaList";
import Cart from "./Cart";
import OrderForm from "./OrderForm";
import './App.css';  // Importing the CSS file
import { pizzas } from "./pizzasData.js"; // Assume pizzasData.js holds pizza array

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index); // Remove item by index
    setCart(newCart);
  };

  const placeOrder = (name, address) => {
    alert(`Order placed by ${name}, to be delivered at ${address}`);
    setCart([]); // Clear cart after order
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ padding: 4 }}>
      <CssBaseline />
      <Header />
      <PizzaList pizzas={pizzas} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} /> {/* Pass removeFromCart function */}
      <OrderForm placeOrder={placeOrder} />
    </Container>
  );
}

export default App;
