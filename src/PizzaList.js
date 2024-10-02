import React from "react";
import PizzaCard from "./PizzaCard";
import { Grid } from "@mui/material";

function PizzaList({ pizzas, addToCart }) {
  return (
    <Grid container spacing={2}>
      {pizzas.map((pizza) => (
        <Grid item key={pizza.id} xs={12} sm={6} md={4}>
          <PizzaCard pizza={pizza} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PizzaList;
