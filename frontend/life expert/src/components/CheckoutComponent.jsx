import { Card, CardContent, Typography, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

const CheckoutComponent = ({ planType, price, user }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  console.log(planType, price, user);
  console.log(user.name, user.email);

  const handlePayment = (status) => {
    // Call backend to simulate payment confirmation
    console.log(planType, price, user);
    fetch('/api/simulate-payment', {
      method: 'POST',
      body: JSON.stringify({
        userId: user.id,
        planType,
        paymentStatus: status
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      setPaymentStatus(status);
    });
  };

  if (paymentStatus === 'success') {
    return <Typography variant="h5" color="green">Payment Successful! 🎉</Typography>
  }

  if (paymentStatus === 'fail') {
    return <Typography variant="h5" color="red">Payment Failed ❌</Typography>
  }

  return (
    <Grid container justifyContent="center" style={{ marginTop: 50, }}>
      <Grid item xs={12} md={6}>
        <Card style={{backgroundColor:'#fff8f0', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
          <CardContent>

            <Typography variant="subtitle1">Plan: {planType}</Typography>
            <Typography variant="subtitle1">Price: {price}</Typography>

            <TextField label="Name" value={user.name} fullWidth margin="normal" disabled />
            <TextField label="Email" value={user.email} fullWidth margin="normal" disabled />

            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" color="primary" onClick={() => handlePayment('success')}>
                  Simulate Success
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="outlined" color="error" onClick={() => handlePayment('fail')}>
                  Simulate Failure
                </Button>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CheckoutComponent;
