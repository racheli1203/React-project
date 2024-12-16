import { observer } from "mobx-react-lite";
import businessStore from "./classes/businessData";
import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const BusinessDetails = observer(() => {
    const [isLoading, setIsLoading] = useState(true);
    const [businessDetailsDisplay, setBusinessDetailsDisplay] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await businessStore.initList();
                const data = businessStore.GetDataBusiness;
                console.log('Fetched business data:', data);
                setBusinessDetailsDisplay(data);
            } catch (error) {
                console.error('Error fetching business data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Return null if data is still loading
    if (isLoading || !businessDetailsDisplay) {
        return null;
    }
    // Accessing properties of the observable object
    const { name, address,email, phone, owner, logo, description } = businessDetailsDisplay;
    console.log(name);

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom align="center">
                            {name}
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            Address:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {address}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            email:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {email}
                        </Typography>
                        <Typography variant="subtitle1">
                            Phone:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {phone}
                        </Typography>
                        <Typography variant="subtitle1">
                            Owner:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {owner}
                        </Typography>
                        <Typography variant="subtitle1">
                            Description:
                        </Typography>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                        
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
});

export default BusinessDetails;
