import React from "react"
import{Outlet} from "react-router-dom"
import Navbar from "./Components/Home/Navbar.jsx";
import Downbar from "./Components/Home/Downbar.jsx";

export default function Layout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Downbar/>
        </>
    )
}