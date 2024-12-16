import React, { useState } from 'react';
import ServiceForm from './serviceForm';
import serviceList from '../classes/serviceData';
import Button from '@mui/joy/Button';


export default function AddService() {
    const [isAdd, setIsAdd] = useState(false);
      return (
        <div>
            {!isAdd ? (                
                <Button variant="outlined"  onClick={() => setIsAdd(true)} >Add a new service</Button>
             
            ) : (
                <ServiceForm setIsAdd={setIsAdd}/>
            )}
        </div>
    );
}


