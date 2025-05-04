import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstpage5sec from "./Components/start/Firstpage5sec.jsx";
import Firstpage from "./Components/start/Firstpage.jsx";
import Startpage from "./Components/start/Startpage.jsx";
import Balancecard from "./Components/Home/Balancecard.jsx";
import Navbar from "./Components/Home/Navbar.jsx";
import Dashboard from "./Components/Home/Dashboard.jsx";
import Home from "./Components/Home/Home.jsx"
import Profile1 from "./Components/profile/Profile1.jsx";
import UserProfile from "./Components/profile/UserProfile.jsx";
import Notification from "./Components/Notification/Notification.jsx";
import Login from "./Components/logreg/Login.jsx";
import Registration from "./Components/logreg/Registration.jsx";
import AddExpense from "./Components/Expense/AddExpense.jsx";
import Stactic from "./Components/Staticstic/Stactic.jsx";
import Downbar from "./Components/Home/Downbar.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/*<Startpage/>*/}
        {/*<Navbar/>*/}
        {/*<Home/>*/}
        {/*<Profile1/>*/}
        {/*<UserProfile/>*/}
        {/*<Notification/>*/}
        {/*<Login/>*/}
        {/*<Dashboard/>*/}
        {/*<Downbar/>*/}
        {/*<Registration/>*/}
        {/*<AddExpense/>*/}
        {/*<Stactic/>*/}
    </>
  )
}

export default App
