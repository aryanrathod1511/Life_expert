import * as React from 'react';
import { Tabs, Tab, Box, Typography, Fade } from '@mui/material';

import FindExpert from './FindExpert'
import MySession from './MySession'

export default function MainPage() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
   <div className = "container">
    <div className = "main-content">
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#fff8f0' }}>
      
      {/* Vertical Tabs */}
      <Box sx={{ bgcolor: '#ffffff', width: '20%', borderRight: 2, borderColor: '#e0e0e0' }}>
        <Tabs
          orientation="vertical"
          value={selectedTab}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: '#ff6b00' } }}
        >
          <Tab 
            label="Find Experts" 
            sx={{ color: selectedTab === 0 ? '#ff6b00' : '#333333', fontWeight: selectedTab === 0 ? 'bold' : 'normal', borderRadius:'20px', marginTop: '2vh' }}
          />
          <Tab 
            label="My Sessions" 
            sx={{ color: selectedTab === 1 ? '#ff6b00' : '#333333', fontWeight: selectedTab === 1 ? 'bold' : 'normal', borderRadius:'20px',  mt: '2vh' }}
          />
        </Tabs>
      </Box>

      {/* Content Area */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Fade in={selectedTab === 0} timeout={500} unmountOnExit>
          <Box>{selectedTab === 0 && <FindExpert />}</Box>
        </Fade>

        <Fade in={selectedTab === 1} timeout={500} unmountOnExit>
          <Box>{selectedTab === 1 && <MySession />}</Box>
        </Fade>
      </Box>

    </Box>
      </div>
      
   </div>
  );
}


