import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import NoticeBoard from './pages/NoticeBoard';
import EventsCalendar from './pages/EventsCalendar';
import ContactUs from './pages/ContactUs';
import AdminPanel from './pages/AdminPanel';
import Downloads from './pages/Downloads';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/notice" element={<NoticeBoard />} />
      <Route path="/events" element={<EventsCalendar />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/downloads" element={<Downloads />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
