import { useState } from "react";
import { observer } from "mobx-react-lite";
import appointmentList from "../classes/appointmentsData";
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

const AddAppointment = observer(({ setIsAdd, selectedService }) => {
    const navigate = useNavigate();
    const [dateValue, setdateValue] = useState(dayjs().format()); // Set initial dateValue
    const [newAppointment, setNewAppointment] = useState({
        id: '',
        serviceType: '',
        dateTime: '',
        clientName: '',
        clientPhone: '',
        clientEmail: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (field, value) => {
        setNewAppointment(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading indicator
        try {
            newAppointment['dateTime'] = dateValue; // Set dateTime
            await appointmentList.AddAppointments(newAppointment); // Await the asynchronous call

            // Appointment added successfully
            setIsAdd(false);
            navigate('/'); // Navigate back to the general page
        } catch (err) {
            // Handle error if appointment addition fails
            setError('Failed to add appointment');
            console.error('Error adding appointment:', err);
        } finally {
            setIsLoading(false); // Hide loading indicator
        }
    }

    return (
        <Dialog open={true} onClose={() => setIsAdd(false)} disableBackdropClick={!isLoading}>
            <DialogTitle>Add Appointment</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                    {error && <div>{error}</div>}
                    <TextField
                        label="Service Type"
                        variant="outlined"
                        value={selectedService.name}
                        onChange={(e) => handleChange('serviceType', e.target.value)} // Fix the field name
                        margin="normal"
                    />
                    <TextField
                        label="Date Time"
                        type="datetime-local"
                        variant="outlined"
                        value={dayjs(dateValue).format('YYYY-MM-DDTHH:mm')} // Format the dateValue properly
                        onChange={(e) => setdateValue(e.target.value)} // Set the raw value from the input
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <TextField
                        label="Client Name"
                        variant="outlined"
                        onChange={(e) => handleChange('clientName', e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Client Phone"
                        variant="outlined"
                        onChange={(e) => handleChange('clientPhone', e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Client Email"
                        variant="outlined"
                        onChange={(e) => handleChange('clientEmail', e.target.value)}
                        margin="normal"
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsAdd(false)} disabled={isLoading}>
                    Cancel
                </Button>
                <Button variant="outlined" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} /> : "Make an Appointment"}
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default AddAppointment;
