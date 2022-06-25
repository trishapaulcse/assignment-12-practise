import { Routes, Route } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Banner from "./Pages/Home/Banner/Banner";
import Appointment from "./Pages/Appointment/Appointment";
import AppointmentBanner from "./Pages/Appointment/AppointmentBanner";
// import AppointmentBanner from "./Pages/Appointment/AppointmentBanner";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="banner" element={<Banner />} />
        <Route path="appointmentbanner" element={<AppointmentBanner />} />
      </Routes>
    </div>
  );
}

export default App;
