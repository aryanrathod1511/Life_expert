import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import plans from '../data/plans';

const SubscriptionComponent = () => {
  const navigate = useNavigate();
  

  const handleSubscribe = (planType) => {
      if(planType === 'monthly'){
        navigate('/user/subscriptionPlans/monthly');
      }
      else if(planType === 'half_yearly'){
        navigate('/user/subscriptionPlans/half_yearly');
      }
  };

  return (
    <Grid container spacing={4} justifyContent="center" padding={4}>
      {plans.map(plan => (
        <Grid item xs={12} md={4} key={plan.planType}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>{plan.name}</Typography>
              <Typography variant="h4" color="primary">{plan.price}</Typography>
              <Typography variant="subtitle1" gutterBottom>{plan.duration}</Typography>
              <Typography variant="body2">Unlimited Expert Sessions</Typography>
              <Button variant="contained" sx={{ marginTop: 2 }} onClick={() => handleSubscribe(plan.planType)}>
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubscriptionComponent;
