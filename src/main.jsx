// import { StrictMode } from 'react'
import React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import Startpage from "./Components/start/Startpage.jsx";
import Login from "./Components/logreg/Login.jsx";
import Registration from "./Components/logreg/Registration.jsx";
import IncomeProf from "./Components/profile/IncomeProf.jsx";
import Stactic from "./Components/Staticstic/Stactic.jsx";
import Profile1 from "./Components/profile/Profile1.jsx";
import Home from "./Components/Home/Home.jsx";
import Notification from "./Components/Notification/Notification.jsx";
import UserProfile from "./Components/profile/UserProfile.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
        <Route path="/" element={<Layout/>}>
            {/*<Route path="page" element={<Page />}>/>*/}
            <Route path="home" element={<Home/>}/>
            <Route path="wallet" element={<IncomeProf/>}/>
            <Route path="" element={<Startpage/>}/>
            <Route path="stact" element={<Stactic/>}/>
            <Route path="profile" element={<Profile1/>}>
                <Route path="userprofile" element={<UserProfile/>}/>
                <Route path="income" element={<IncomeProf/>}/>
            {/*    <Route path="notification" element={<Notification/>}/>*/}
            </Route>
            <Route path="notification" element={<Notification/>}/>
        </Route>
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
