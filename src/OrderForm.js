import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";

function OrderForm({ placeOrder }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(name, address);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "400px", margin: "20px auto" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Order Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Place Order
        </Button>
      </form>
    </Paper>
  );
}

export default OrderForm;
