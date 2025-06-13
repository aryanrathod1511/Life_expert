import React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Stack } from '@mui/material';

export default function PhoneInput() {
  const [countryCode, setCountryCode] = React.useState('+91');

  return (
    <Stack direction="row" spacing={2}>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="country-code-label">Code</InputLabel>
        <Select
          labelId="country-code-label"
          id="country-code"
          value={countryCode}
          label="Code"
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <MenuItem value="+91">🇮🇳 +91</MenuItem>
          <MenuItem value="+1">🇺🇸 +1</MenuItem>
          <MenuItem value="+44">🇬🇧 +44</MenuItem>
          <MenuItem value="+61">🇦🇺 +61</MenuItem>
          <MenuItem value="+81">🇯🇵 +81</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="phone"
        name="phone"
        label="Mobile Number"
        type="tel"
      />
    </Stack>
  );
}
