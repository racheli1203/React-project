// import { observer } from "mobx-react-lite";
// import { useState, useEffect } from "react";
// import ServiceDisplay from "../admin/serviceDisplay";
// import serviceList from "../classes/serviceData"
// import AddAppointment from "./addAppointment"
// import BusinessDetails from "../businessDetails";
// import Button from '@mui/joy/Button';
// import * as React from 'react';
// const CustomersPage = observer(() => {
//     const [servicesList, setServicesList] = useState([]);
//     const [selectedService, setSelectedService] = useState(null);
//     const [isAdd, setIsAdd] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 await serviceList.initList();
//                 setServicesList(serviceList.GetService);
//             } catch (error) {
//                 console.error('Error fetching service list:', error);
//             }
//         };

//         fetchData();
//     }, []);
//     function handleServiceClick(service) {
//         setSelectedService(service);
//         setIsAdd(true);
//     };

//     return (
//         <div>
//             <BusinessDetails />

//             {isAdd && selectedService && (
//                 <AddAppointment selectedService={selectedService} setIsAdd={setIsAdd} />
//             )}
//             {!isAdd && (
//                 // Show the service list and appointment buttons when isAdd is false
//                 servicesList.map(service => (
//                     <div key={service.id}>
//                         <ServiceDisplay {...service} />
//                         <Button variant="outlined"  onClick={() => handleServiceClick(service)}>Make an appointment</Button>
//                         {/* <button onClick={() => handleServiceClick(service)}>Make an appointment</button> */}
//                     </div>
//                 ))
//             )}
//             {/* {!isAdd &&
//               servicesList.map(service => (<>
//                 <ServiceDisplay key={service.id} {...service} />
//                 <button onClick={() => handleServiceClick(service)}>Made an appointment</button>
//                 </>
//             ))}

//             {selectedService && <AddAppointment service={selectedService} setIsAdd={setIsAdd}  />} */}
//         </div>
//     )
// })
// export default CustomersPage;

// // import * as React from 'react';
// // import { useState, useEffect } from 'react';
// // import { observer } from 'mobx-react-lite';
// // import Button from '@mui/joy/Button';
// // import ServiceDisplay from '../admin/serviceDisplay';
// // import serviceList from '../classes/serviceData';
// // import AddAppointment from './addAppointment';
// // import BusinessDetails from '../businessDetails';

// // const CustomersPage = observer(() => {
// //   const [servicesList, setServicesList] = useState([]);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [isAdd, setIsAdd] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         await serviceList.initList();
// //         // Assuming GetService is a function that returns the array of services
// //         const fetchedServices = serviceList.GetService();
// //         setServicesList(fetchedServices);
// //       } catch (error) {
// //         console.error('Error fetching service list:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   function handleServiceClick(service) {
// //     setSelectedService(service);
// //     setIsAdd(true);
// //   }

// //   return (
// //     <div>
// //       <BusinessDetails />

// //       {isAdd && selectedService && (
// //         <AddAppointment selectedService={selectedService} setIsAdd={setIsAdd} />
// //       )}

// //       {!isAdd && (
// //         servicesList.map(service => (
// //           <div key={service.id}>
// //             <ServiceDisplay {...service} />
// //             <Button variant="outlined" onClick={() => handleServiceClick(service)}>
// //               Make an appointment
// //             </Button>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // });

// // export default CustomersPage;
import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import ServiceDisplay from "../admin/serviceDisplay";
import serviceList from "../classes/serviceData";
import AddAppointment from "./addAppointment";
import BusinessDetails from "../businessDetails";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomersPage = observer(() => {
    const [servicesList, setServicesList] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isAdd, setIsAdd] = useState(false);
    const navigate = useNavigate(); // Add this line to use navigation

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

    function handleServiceClick(service) {
        setSelectedService(service);
        setIsAdd(true);
    };

    function handleLoginClick() {
        navigate('/login'); // Navigate to the login page
    }

    return (
        <div>
            <header>
            <BusinessDetails />
            <Button variant="outlined" onClick={handleLoginClick}>Login</Button>
            </header>
           
            {/* Button to navigate to the Login page */}
          
            {isAdd && selectedService && (
                <AddAppointment selectedService={selectedService} setIsAdd={setIsAdd} />
            )}
            {!isAdd && (
                // Show the service list and appointment buttons when isAdd is false
                servicesList.map(service => (
                    <div key={service.id}>
                        <ServiceDisplay {...service} />
                        <Button variant="outlined" onClick={() => handleServiceClick(service)}>Make an appointment</Button>
                    </div>
                ))
            )}


        </div>
    )
})
export default CustomersPage;
