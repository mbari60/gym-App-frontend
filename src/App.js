//import logo from './logo.svg';
//import './App.css';
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Workout from "./pages/services";
import Announcements from "./pages/announcements";
import Review from "./pages/reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Workout />} />
        <Route path="/announcements" element={<Announcements />} />{" "}
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
