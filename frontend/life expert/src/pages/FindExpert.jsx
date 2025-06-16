import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, MenuItem, Select, InputLabel, FormControl, TextField, CircularProgress } from '@mui/material';
import categoriesData from '../data/categories';
import axios from 'axios';

const FindExpert = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      const categoryObj = categoriesData.find(cat => cat.id === selectedCategory);
      setSubCategories(categoryObj ? categoryObj.subcategories : []);
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchExperts();
  }, [selectedCategory, selectedSubCategory, search]);

  const fetchExperts = async () => {
    setLoading(true);
   
    setLoading(false);
  };

  return (
    <div>
        <h3>Discover your perfect expert match</h3>
        <Box sx={{ display: 'flex', bgcolor: '#FFF8F0', minHeight: '100vh', p: 3 }}>
      {/* Left Filters */}
      <Box sx={{ width: '20%', pr: 2 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select value={selectedCategory} label="Category" onChange={e => setSelectedCategory(e.target.value)}>
            {categoriesData.map(cat => (
              <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedCategory}>
          <InputLabel>Sub Category</InputLabel>
          <Select value={selectedSubCategory} label="Sub Category" onChange={e => setSelectedSubCategory(e.target.value)}>
            {subCategories.map(sub => (
              <MenuItem key={sub.id} value={sub.id}>{sub.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField 
          fullWidth 
          label="Search Expert" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          sx={{ mb: 2 }}
        />

        <Button variant="contained" onClick={fetchExperts}>Apply Filters</Button>
      </Box>

      {/* Right Expert List */}
      <Box sx={{ width: '80%' }}>
       
        {loading ? (
          <Box textAlign="center"><CircularProgress /></Box>
        ) : (
          <Grid container spacing={3}>
            {experts.map(expert => (
              <Grid item xs={12} md={4} key={expert.id}>
                <Card sx={{ bgcolor: '#FFFFFF', borderRadius: 3, boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6">{expert.name}</Typography>
                    <Typography variant="subtitle2">{expert.title}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{expert.bio}</Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}><b>₹{expert.price}</b> / session</Typography>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Book Now</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
    </div>
  );
};

export default FindExpert;
