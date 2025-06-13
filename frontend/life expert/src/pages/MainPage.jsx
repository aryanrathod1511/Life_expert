import * as React from 'react';
import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';

export default function MainPage() {
  const [selectedTab, setSelectedTab] = React.useState("find_experts");

  return (
    <Box display="flex" height="100vh">
      
      {/* Left Sidebar */}
      <Box width="20%" bgcolor="#f5f5f5" p={2}>
        <Typography variant="h6" gutterBottom>Menu</Typography>
        <List component="nav">
          <ListItemButton selected={selectedTab === 'find_experts'} onClick={() => setSelectedTab('find_experts')}>
            <ListItemText primary="Find Experts" />
          </ListItemButton>
          <ListItemButton selected={selectedTab === 'my_sessions'} onClick={() => setSelectedTab('my_sessions')}>
            <ListItemText primary="My Sessions" />
          </ListItemButton>
        </List>
      </Box>

      {/* Right Main Content */}
      <Box flexGrow={1} p={3}>
        {selectedTab === 'find_experts' && <FindExperts />}
        {selectedTab === 'my_sessions' && <MySessions />}
      </Box>

    </Box>
  );
}

// Dummy Components
function FindExperts() {
  return <Typography variant="h4">Find Experts Content</Typography>;
}

function MySessions() {
  return <Typography variant="h4">My Sessions Content</Typography>;
}
