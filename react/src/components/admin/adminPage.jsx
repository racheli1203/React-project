import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import EditBusinessDetails from './editBusinessDatails';
import ServiceDisplay from './serviceDisplay';
import AddService from './addService';
import serviceList from '../classes/serviceData';
import BusinessDetails from '../businessDetails';
import AppointmentsDisplay from './appointmemts'; // Correct import path
import Button from '@mui/joy/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
const AdminPage = observer(() => {
    const [isEditDetails, setIsEditDetails] = useState(false);
    const [servicesList, setServicesList] = useState([]);
    const [displayAppointments, setDisplayAppointments] = useState(false); // State to control the display of appointments
    const navigate = useNavigate(); // Initialize the navigate function
    useEffect(() => {
        const fetchData = async () => {
            try {
                await serviceList.initList();
                setServicesList(serviceList.GetService);
            } catch (error) {
                console.error('Error fetching service list:', error);
            }
        };

        fetchData();
    }, []);

    function handleEditClick() {
        setIsEditDetails(true);
    }

    function handleDisplayMeetingsClick() {
        setDisplayAppointments(prevState => !prevState); // Toggle the displayAppointments state
    }
    return (
        <div>
            <header>
                <BusinessDetails />
            </header>
            <main>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Button variant="outlined" onClick={handleEditClick}>Edit Business Details</Button>
                    </Grid>
                    <Grid item>
                        <AddService />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={handleDisplayMeetingsClick}>
                            {displayAppointments ? "Close Meetings" : "Display All Meetings"}
                        </Button>
                        {displayAppointments && <AppointmentsDisplay />} {/* Conditionally render AppointmentsDisplay */}
                    </Grid>
                </Grid>
                <h1>Services:</h1>
                {servicesList.map(service => (
                    <ServiceDisplay key={service.id} {...service} />
                ))}
                {isEditDetails && <EditBusinessDetails setIsEditDetails={setIsEditDetails} />}
                
            </main>
        </div>
    );
});

export default AdminPage;
