import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

export default function RoleToggle({ onChange }) {
  const [role, setRole] = useState('user');

  const handleChange = (event, newRole) => {
    if (newRole !== null) {
      setRole(newRole);
      onChange(newRole);
    }
  };

  return (
    <ToggleButtonGroup
      value={role}
      exclusive
      onChange={handleChange}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 2,
        '& .MuiToggleButton-root': {
          borderRadius: '999px',
          textTransform: 'none',
          px: 4,
          py: 1,
        },
      }}
    >
      <ToggleButton value="user" sx={{ mx: 1 }}>
  User
</ToggleButton>
<ToggleButton value="consultant" sx={{ mx: 1 }}>
  Consultant
</ToggleButton>

    </ToggleButtonGroup>
  );
}
