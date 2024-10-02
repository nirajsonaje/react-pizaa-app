// Cart.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider, Button } from "@mui/material";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, pizza) => total + pizza.price, 0);

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px 0", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h5" gutterBottom>
        Your Cart
      </Typography>
      <Divider />
      <List>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${item.name}`} secondary={`$${item.price.toFixed(2)}`} />
              <Button 
                variant="outlined" 
                color="secondary" 
                size="small" 
                style={{ marginLeft: "10px", padding: "5px 10px", minWidth: "auto" }} // Adjusted padding and minWidth
              onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary={<Typography variant="body1">Your cart is empty.</Typography>} />
          </ListItem>
        )}
      </List>
      <Divider />
      <Typography variant="h6" style={{ marginTop: "20px", fontWeight: "bold" }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Proceed to Checkout
      </Button>
    </Paper>
  );
}

export default Cart;
