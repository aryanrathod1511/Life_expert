import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const MySession = () => {
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchSessions();
  }, [tab]);

  const fetchSessions = async () => {
    setLoading(true);
    
    setLoading(false);
  };

  const handleCancel = async (sessionId) => {
    console.log(sessionId);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#FFF8F0', minHeight: '100vh', p: 3 }}>
      <Typography variant="h4" mb={3} fontWeight="bold">My Sessions</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab}  textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: '#ff6b00' } }} onChange={(e, newVal) => setTab(newVal)}>
          <Tab label="Upcoming Sessions" 
          sx={{ color: tab === 0 ? '#ff6b00' : '#333333', fontWeight: tab=== 0 ? 'bold' : 'normal', borderRadius:'20px',marginLeft: '2vw' }}/>
          <Tab label="Previous Sessions" 
          sx={{ color: tab === 1 ? '#ff6b00' : '#333333', fontWeight: tab=== 1 ? 'bold' : 'normal', borderRadius:'20px',marginLeft: '2vw' }}/>
        </Tabs>
      </Box>
      <Box sx={{ mt: 3 }}>
        {loading ? (
          <Box textAlign="center"><CircularProgress /></Box>
        ) : (
          sessions.length === 0 ? (
            <Typography variant="h6" textAlign="center">No sessions found.</Typography>
          ) : (
            sessions.map(session => (
              <Card key={session.id} sx={{ mb: 2, bgcolor: '#FFFFFF', borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{session.expertName}</Typography>
                  <Typography>Date: {session.date}</Typography>
                  <Typography>Time: {session.time}</Typography>

                  {tab === 0 && (
                    <Box mt={2}>
                      <Button variant="outlined" color="error" onClick={() => handleCancel(session.id)}>Cancel Session</Button>
                      <Button variant="contained" color="primary" sx={{ ml: 2 }}>Join Session</Button>
                    </Box>
                  )}

                  {tab === 1 && (
                    <Box mt={2}>
                      <Typography variant="body2">Notes: {session.notes || 'No notes available.'}</Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))
          )
        )}
      </Box>
    </Box>
  );
};

export default MySession;
