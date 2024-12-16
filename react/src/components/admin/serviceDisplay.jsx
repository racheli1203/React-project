import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ServiceDisplay = observer(({ name, description, price, duration, imageUrl }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ width: '50%' }}>
                <CardMedia
                    component="img"
                    height="50%" // Adjust the height as needed to display the entire picture
                    image={imageUrl}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Duration: {duration}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
});

export default ServiceDisplay;
