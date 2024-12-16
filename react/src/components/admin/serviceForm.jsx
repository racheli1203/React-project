import { observer } from 'mobx-react';
import serviceList from '../classes/serviceData';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';

const ServiceForm = observer(({ setIsAdd }) => {
    const [newService, setNewService] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        duration: '',
        imageUrl: '', // New field to store the image URL
    });

    const handleChange = (field, value) => {
        setNewService({ ...newService, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await serviceList.AddService(newService);
        console.log('New Service:', newService);
        setIsAdd(false);
    };

    return (
        <Dialog open={true} onClose={() => setIsAdd(false)}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3} sx={{ padding: '40px' }}> {/* Apply bigger padding to the Grid container */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="text"
                            name="name"
                            value={newService.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            label="Name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="text"
                            name="description"
                            value={newService.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            label="Description"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="text"
                            name="price"
                            value={newService.price}
                            onChange={(e) => handleChange('price', e.target.value)}
                            label="Price"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="text"
                            name="duration"
                            value={newService.duration}
                            onChange={(e) => handleChange('duration', e.target.value)}
                            label="Duration"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="text"
                            name="imageUrl"
                            value={newService.imageUrl}
                            onChange={(e) => handleChange('imageUrl', e.target.value)}
                            label="Image URL"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}> {/* Center-align the button */}
                        <Button variant="outlined" type="submit">Save</Button>
                    </Grid>
                </Grid>
            </form>
        </Dialog>
    );
});

export default ServiceForm;
