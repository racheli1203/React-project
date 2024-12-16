//import React from 'react';
// import * as React from 'react';
// import Table from '@mui/joy/Table';

// import appointmentList from '../classes/appointmentsData'
// const MeetingDetails = () => {
  
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
//   const columns = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
//   export default function TableHover() {
//     return (
//       <Table hoverRow>
//         <thead>
//           <tr>
//             <th style={{ width: '40%' }}>Column width (40%)</th>
//             <th>Service Type:</th>
//             <th>Client Name:(g)</th>
//             <th>Date:(g)</th>
//             <th>Time(g)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {columns.map((column) => (
//             <tr key={column.name}>
//               <td>{row.name}</td>
//               <td>{row.calories}</td>
//               <td>{row.fat}</td>
//               <td>{row.carbs}</td>
//               <td>{row.protein}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     );


//   // Extract date and time from dateTime
//   const date = new Date(dateTime).toLocaleDateString();
//   const time = new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   return (
//     <div style={{ margin: '10px 0' }}>
//       <h3>Meeting Details:</h3>
//       <p><strong>Service Type:</strong> {serviceType}</p>
//       <p><strong>Client Name:</strong> {clientName}</p>
//       <p><strong>Date:</strong> {date}</p>
//       <p><strong>Time:</strong> {time}</p>
//     </div>
//   );
// };

// export default MeetingDetails;

const MeetingDetails = ({ meeting }) => {
   const { serviceType, clientName, dateTime } = meeting;

//   // Extract date and time from dateTime
   const date = new Date(dateTime).toLocaleDateString();
   const time = new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

   return (
     <div style={{ margin: '10px 0' }}>
       <h3>Meeting Details:</h3>
       <p><strong>Service Type:</strong> {serviceType}</p>
       <p><strong>Client Name:</strong> {clientName}</p>
       <p><strong>Date:</strong> {date}</p>
       <p><strong>Time:</strong> {time}</p>
   </div>
  );
};

 export default MeetingDetails;
