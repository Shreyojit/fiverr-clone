import "./app.scss"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";


import React from 'react'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <Home/>
          <Footer/>

          </>
        }/>

       <Route path="/gigs" element={
          <>
          <Navbar/>
          <Gigs/>
          <Footer/>

          </>
        }/>
<Route path="/mygigs" element={
          <>
          <Navbar/>
          <MyGigs/>
          <Footer/>

          </>
        }/>

<Route path="/gig/:id" element={
          <>
          <Navbar/>
          <Gig/>
          <Footer/>

          </>
        }/>


      <Route path="/orders" element={
          <>
          <Navbar/>
          <Orders/>
          <Footer/>

          </>
        }/>
<Route path="/messages" element={
          <>
          <Navbar/>
          <Messages/>
          <Footer/>

          </>
        }/>

<Route path="/message/:id" element={
          <>
          <Navbar/>
          <Message/>
          <Footer/>

          </>
        }/>

<Route path="/add" element={
          <>
          <Navbar/>
          <Add/>
          <Footer/>

          </>
        }/>


<Route path="/login" element={
          <Login/>
 }/>

<Route path="/register" element={
          <Register/>
 }/>
 </Routes>
    </div>

  )
}

export default App