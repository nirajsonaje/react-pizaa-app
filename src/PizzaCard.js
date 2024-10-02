import React from "react";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";

function PizzaCard({ pizza, addToCart }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={pizza.img}
        alt={pizza.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${pizza.price.toFixed(2)}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => addToCart(pizza)} 
          sx={{ marginTop: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default PizzaCard;
