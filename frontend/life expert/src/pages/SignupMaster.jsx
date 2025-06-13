import * as React from 'react';
import Button from '@mui/material/Button';


export default function SignupMaster() {
    return (
        <div className = "container">
            <div className = "main-content" style = {{minHeight: '100vh'}}>
               <div className = "content" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
               <Button variant = "contained" color = "primary" href = "/auth/signup/expert" style = {{fontFamily : 'cursive'}}>Become an Expert</Button>
                <Button variant = "contained" color = "primary" href = "/auth/signup/user" style = {{fontFamily : 'cursive'}}>Become a User</Button>
               </div>
            </div>
        </div>
    )
}