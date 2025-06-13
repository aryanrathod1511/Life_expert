import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import PhoneInput from './PhoneInput';
import { Autocomplete } from '@mui/material';
import categories from '../data/categories';
import {
  Table, TableBody, TableCell, TableHead, TableRow, TextField
} from "@mui/material";





export default function SignupUser() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [role, setRole] = React.useState("explorer");
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
  const [ageError, setAgeError] = React.useState(false);
  const [ageErrorMessage, setAgeErrorMessage] = React.useState(''); 
  const [genderError, setGenderError] = React.useState(false);
  const [genderErrorMessage, setGenderErrorMessage] = React.useState('');
  const [addressError, setAddressError] = React.useState(false);
  const [addressErrorMessage, setAddressErrorMessage] = React.useState('');
  const [cityError, setCityError] = React.useState(false);
  const [cityErrorMessage, setCityErrorMessage] = React.useState('');
  const [stateError, setStateError] = React.useState(false);
  const [stateErrorMessage, setStateErrorMessage] = React.useState('');
  const [countryError, setCountryError] = React.useState(false);
  const [countryErrorMessage, setCountryErrorMessage] = React.useState('');
  const [tab, setTab] = React.useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [charges, setCharges] = useState([]);



    //get subcategories
    const getSubcategories = (categoriesSelected) => {
      return categoriesSelected
        .map((cat) => cat.subcategories || [])
        .flat();
    };

    const handleChargeChange = (id, value) => {
      setCharges((prev) => ({
        ...prev,
        [id]: parseInt(value || "0"),
      }));
    };
  
    //handle category change
    const handleCategoryChange = (event, newCategories) => {
      setSelectedCategories(newCategories);
      console.log("main changes");
  
      // Filter subcategories to only keep those under the selected categories
      const validSubIds = getSubcategories(newCategories).map((sc) => sc.id);
      const filteredSubs = selectedSubcategories.filter((sub) =>
        validSubIds.includes(sub.id)
      );
      setSelectedSubcategories(filteredSubs);
      console.log("sub changes");
    };
  

  const handleSubmit = (event) => {
    //check which tab
    if(tab === 0){
        //user tab
        console.log("User tab");
    }else{
        //consultant tab
        console.log("Consultant tab");
    }
    event.preventDefault();
    console.log(event.currentTarget , "P");
    const data = new FormData(event.target);
    
    console.log("Clicked");
    console.log(data);
  };

  const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'auto',
    minHeight: '100vh',
    overflowY: 'auto',
    
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    backgroundColor: '#fff8f0'
  }));


  
  



  return (
    <>
    <CssBaseline/>
    
     <SignUpContainer >
     <Tabs
      aria-label="User or Consultant tabs"
      value={tab}
      onChange={(event, newValue) => {
        if (newValue !== null) setTab(newValue);
        console.log(tab);
      }}
      sx={{
        width: '80%',
        maxWidth: '100vw',
        margin: 'auto',
        mt: 4,
        mb:4,
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        bgcolor: '#fff8f0',
      }}
    >
      <TabList
        disableUnderline
        sx={{
          bgcolor: '#f3f3ff',
          borderRadius: 'xl',
          p: 1,
          gap: 1,
          '& .MuiTab-root': {
            borderRadius: '999px',
            textTransform: 'none',
            fontWeight: 'bold',
            px: 3,
            py: 1,
          },
        }}
      >
        <Tab value={0}>Explorer</Tab>
        <Tab value={1}>Consultant</Tab>
      </TabList>

        <TabPanel value={0}>
        <Stack
        direction =" column"
        spacing={4}  // Adds horizontal gap between the Cards
        justifyContent="center"
        alignItems="flex-start"
        sx={{ p: 2, flexWrap: 'wrap' }}  // Padding and wrapping on small screens
        >
            <Box
            component = "form"
            onSubmit = {handleSubmit}
            noValidate
            sx = {{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
            >
              <h3 style = {{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '5vh'}}> Become an Explorer</h3>
                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ width: '100%' }}>
                    <FormControl sx={{ flex: 2 }}>
                        <FormLabel htmlFor="firstName"></FormLabel>
                        <TextField
                        error = {firstNameError}
                        helperText = {firstNameErrorMessage}
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        required
                        sx={{
                            borderRadius: '30px',
                        }}
                        />
                    </FormControl>

                    <FormControl sx={{ flex: 2 }}>
                        <FormLabel htmlFor="lastName"></FormLabel>
                        <TextField
                        error = {lastNameError}
                        helperText = {lastNameErrorMessage}
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        required
                        sx={{
                            borderRadius: '30px',
                        }}
                        />
                    </FormControl>
                    </Stack>



                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                <FormControl sx ={{flex:4}}>
                        <FormLabel htmlFor = "email"></FormLabel>
                        <TextField
                        id = "email"
                        name = "email"
                        type = "email"
                        label="Email"
                        required
                        />
                </FormControl>

                <FormControl sx ={{flex:2}}>
                    <PhoneInput required/>
                </FormControl>
                </Stack>


                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                <FormControl >
                <FormLabel htmlFor="age"></FormLabel>
                    <TextField
                        error = {ageError}
                        helperText = {ageErrorMessage}
                        id="age"
                        name="age"
                        type="number"
                        inputProps={{ min: 0 }}
                        fullWidth
                        required
                        sx={{
                        borderRadius: '30px',
                        }}
                        label="Age"
                    />
                </FormControl>

                <FormControl >
                    <FormLabel htmlFor = "gender">Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        defaultValue=""
                        error = {genderError}
                        helperText = {genderErrorMessage}
                        sx={{ gap: 2 }} // adds spacing between radio buttons
                        required
                    >

                        <FormControlLabel value="male" control={<Radio />} label="Male" /> 
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="prefer_not_to_say" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                    </FormControl>
                

               
                </Stack>

                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                    <FormControl sx = {{flex: 4}}>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {addressError}
                        helperText = {addressErrorMessage}
                        id = "address"
                        name = "address"
                        type = "address"
                        label="Address"
                        required
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {cityError}
                        helperText = {cityErrorMessage}
                        id = "city"
                        name = "city"
                        type = "city"
                        label="City"
                        required
                        />
                    </FormControl>
                </Stack>


                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                    <FormControl>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {stateError}
                        helperText = {stateErrorMessage}
                        id = "state"
                        name = "state"
                        type = "state"
                        label="State"
                        required
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {countryError}
                        helperText = {countryErrorMessage}
                        id = "country"
                        name = "country"
                        type = "country"
                        label="country"
                        required
                        />
                    </FormControl>
                </Stack>

                <Button type = "submit" variant = "contained"  color = "primary"  sx = {{mt: 5, borderRadius: '20px', px: 3, py: 1.5}} >Get Started</Button>
            </Box>
        </Stack>

        
        </TabPanel>















      <TabPanel value={1}>
        {/* Just display message or contact form */}
        <Stack
        direction =" column"
        spacing={4}  // Adds horizontal gap between the Cards
        justifyContent="center"
        alignItems="flex-start"
        sx={{ p: 2, flexWrap: 'wrap' }}  // Padding and wrapping on small screens
        >
            <Box
            component = "form"
            onSubmit = {handleSubmit}
            noValidate
            sx = {{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
            >
              <h3 style = {{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '5vh'}}> Become an Consultant</h3>
                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} sx={{ width: '100%' }}>
                    <FormControl sx={{ flex: 2 }}>
                        <FormLabel htmlFor="firstName"></FormLabel>
                        <TextField
                        error = {firstNameError}
                        helperText = {firstNameErrorMessage}
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        required
                        sx={{
                            borderRadius: '30px',
                        }}
                        />
                    </FormControl>

                    <FormControl sx={{ flex: 2 }}>
                        <FormLabel htmlFor="lastName"></FormLabel>
                        <TextField
                        error = {lastNameError}
                        helperText = {lastNameErrorMessage}
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        required
                        sx={{
                            borderRadius: '30px',
                        }}
                        />
                    </FormControl>
                    </Stack>



                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                <FormControl sx ={{flex:4}}>
                        <FormLabel htmlFor = "email"></FormLabel>
                        <TextField
                        id = "email"
                        name = "email"
                        type = "email"
                        label="Email"
                        required
                        />
                </FormControl>

                <FormControl sx ={{flex:2}}>
                    <PhoneInput required/>
                </FormControl>
                </Stack>


                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                <FormControl >
                <FormLabel htmlFor="age"></FormLabel>
                    <TextField
                        error = {ageError}
                        helperText = {ageErrorMessage}
                        id="age"
                        name="age"
                        type="number"
                        inputProps={{ min: 0 }}
                        fullWidth
                        required
                        sx={{
                        borderRadius: '30px',
                        }}
                        label="Age"
                    />
                </FormControl>

                <FormControl >
                    <FormLabel htmlFor = "gender">Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        defaultValue=""
                        error = {genderError}
                        helperText = {genderErrorMessage}
                        sx={{ gap: 2 }} // adds spacing between radio buttons
                        required
                    >

                        <FormControlLabel value="male" control={<Radio />} label="Male" /> 
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="prefer_not_to_say" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                    </FormControl>
                

               
                </Stack>

                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                    <FormControl sx = {{flex: 4}}>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {addressError}
                        helperText = {addressErrorMessage}
                        id = "address"
                        name = "address"
                        type = "address"
                        label="Address"
                        required
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {cityError}
                        helperText = {cityErrorMessage}
                        id = "city"
                        name = "city"
                        type = "city"
                        label="City"
                        required
                        />
                    </FormControl>
                </Stack>


                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 5}}>
                    <FormControl>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {stateError}
                        helperText = {stateErrorMessage}
                        id = "state"
                        name = "state"
                        type = "state"
                        label="State"
                        required
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor = "address"></FormLabel>
                        <TextField
                        error = {countryError}
                        helperText = {countryErrorMessage}
                        id = "country"
                        name = "country"
                        type = "country"
                        label="country"
                        required
                        />
                    </FormControl>
                </Stack>

                {/* add for expertise */}
                <Stack direction = "column"  alignItems = "left" gap = {2} sx = {{mt: 5}}>
                <h4> Select your expertise</h4>
                </Stack>
                
                <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 1}}>
                
                
                  <Autocomplete
                      multiple
                      sx = {{width: '50%'}}
                      options={categories}
                      getOptionLabel={(option) => option.name}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      value={selectedCategories}
                      onChange={handleCategoryChange}
                      renderInput={(params) => (
                        <TextField {...params} label="Select Categories" />
                      )}
                    />

                    <Autocomplete
                      multiple
                      sx = {{width: '50%'}}
                      options={getSubcategories(selectedCategories)}
                      getOptionLabel={(option) => option.name}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      value={selectedSubcategories}
                      onChange={(e, newValue) => {setSelectedSubcategories(newValue)}}
                      renderInput={(params) => (
                        <TextField {...params} label="Select Subcategories" />
                      )}
                      disabled={selectedCategories.length === 0}
                    />

                </Stack>


                {/* now charge for the each expertise */}
                <Stack direction = "column"  alignItems = "left" gap = {2} sx = {{mt: 5}}>
                <h4> Hourly   Charge</h4>
                
                {selectedSubcategories.length > 0 && (
                  <Stack direction = "column"  alignItems = "left" gap = {2} sx = {{mt: 1}}>
                    {selectedSubcategories.map((sub) => (
                      <Stack direction = "row"  alignItems = "center" gap = {2} sx = {{mt: 1}}>
                      <Typography sx = {{fontSize: '1rem'}}>{sub.name}</Typography>
                        <TextField
                                      id={sub.id}
                                      name={sub.id}
                                      type="number"                    
                                      inputProps={{ min: 0 }}
                                      label="Charge"
                                      required
                                  />
                    </Stack>
                ))}
                </Stack>
                )} 
                </Stack>


                <Button type = "submit" variant = "contained"  color = "primary"  onClick = {handleSubmit} sx = {{mt: 5, borderRadius: '20px', px: 3, py: 1.5}} >Apply for verification</Button>
                
            </Box>
        </Stack>
      </TabPanel>
    </Tabs>
    
     </SignUpContainer>
    </>
  )
}