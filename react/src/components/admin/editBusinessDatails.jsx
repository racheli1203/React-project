import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import businessStore from '../classes/businessData';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditBusinessDetails = observer(({ setIsEditDetails }) => {
    const [newDetails, setNewDetails] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        owner: '',
        logo: '',
        description: '',
    });

    useEffect(() => {
        // Set initial state from businessStore.businessObject if available
        if (businessStore.businessObject) {
            setNewDetails({
                name: businessStore.businessObject.name,
                address: businessStore.businessObject.address,
                email: businessStore.businessObject.email,
                phone: businessStore.businessObject.phone,
                owner: businessStore.businessObject.owner,
                logo: businessStore.businessObject.logo,
                description: businessStore.businessObject.description,
            });
        }
    }, []);

    const handleChange = (e) => {
        setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        businessStore.AddBusiness(newDetails);
        setIsEditDetails(false);
        console.log('New Details:', newDetails);
    };

    return (
        <Dialog open={true} onClose={() => setIsEditDetails(false)}>
            <DialogTitle>Edit Business Details</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                name="name"
                                value={newDetails.name}
                                onChange={handleChange}
                                label="Studio Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                name="address"
                                value={newDetails.address}
                                onChange={handleChange}
                                label="Address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                name="email"
                                value={newDetails.email}
                                onChange={handleChange}
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                name="phone"
                                value={newDetails.phone}
                                onChange={handleChange}
                                label="Phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                name="owner"
                                value={newDetails.owner}
                                onChange={handleChange}
                                label="Owner"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                name="logo"
                                value={newDetails.logo}
                                onChange={handleChange}
                                label="Logo"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                name="description"
                                value={newDetails.description}
                                onChange={handleChange}
                                label="Description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" type="submit">Save</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
});

export default EditBusinessDetails;
