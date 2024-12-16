
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { observer } from 'mobx-react-lite';
import appointmentList from '../classes/appointmentsData';
const AppointmentsDisplay = observer(() => {
    const allAppointments = appointmentList.GetAppoiintments;
    // Check if allAppointments is defined before using slice
    const sortedAppointments = allAppointments ? allAppointments.slice().sort((a, b) => {
        const dateA = new Date(a.dateTime);
        const dateB = new Date(b.dateTime);        
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
    }) : [];
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Service Type</TableCell>
                        <TableCell>Client Name</TableCell>
                        <TableCell>dateTime</TableCell>
                        <TableCell>clientName</TableCell>
                        <TableCell>clientPhone</TableCell>
                        <TableCell>clientEmail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedAppointments.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} align="center">No appointments scheduled.</TableCell>
                        </TableRow>
                    ) : (
                        sortedAppointments.map(appointment => (
                            <TableRow key={appointment.id}>
                                <TableCell>{appointment.serviceType}</TableCell>
                                <TableCell>{appointment.clientName}</TableCell>
                                <TableCell>{new Date(appointment.dateTime).toLocaleDateString()}</TableCell>
                                <TableCell>{new Date(appointment.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TableCell>
                                <TableCell>{appointment.clientPhone}</TableCell>
                                <TableCell>{appointment.clientEmail}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default AppointmentsDisplay;
