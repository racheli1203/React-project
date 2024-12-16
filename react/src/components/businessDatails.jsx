import { useState,createContext } from "react";
export const StudioDatails = createContext();

export default function BusinessDatails(){
    const[studioName,setStudioName]=useState(" S&R_STUDIO");
    const [email,setEmail]=useState("hgcvdshg@gmail.com");
    const [phone,setPhone]=useState("05465468486");
    const [address,setAddress]=useState("BB")
    return(<>
    <StudioDatails.Provider value={{setStudioName,setEmail,setPhone,setAddress}}/>

   
    </>)


}