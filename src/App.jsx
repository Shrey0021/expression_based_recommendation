import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { SignupFormDemo } from "./components/SignUp";
import { LoginForm } from "./components/Login";   // ✅ Import LoginForm
import CameraPage from "./components/CameraPage"; // ✅ Already imported

export default function App() {
  return (
    <Router>
      <main>
        {/* Background effects */}
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient-img"
        />

        <div
          className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63]
       -rotate[30deg] -z-10"
        ></div>

        <Header />

        {/* ✅ Define all routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignupFormDemo />} />
          <Route path="/login" element={<LoginForm />} /> {/* ✅ New Login Route */}
          <Route path="/camera" element={<CameraPage />} /> {/* ✅ Camera route */}
        </Routes>
      </main>
    </Router>
  );
}
