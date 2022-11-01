import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { BookTicket} from './components/BookTicket';
import { CheckTickets } from './components/CheckTickets';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { BusList } from './components/BusList';
import { FinalBooking} from './components/FinalBookingPage';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <BrowserRouter>
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookTicket" element={<BookTicket />} />
        <Route path="/checkTickets" element={<CheckTickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listOfBuses" element={<BusList />} />
        <Route path="/finalBooking" element={<FinalBooking/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
