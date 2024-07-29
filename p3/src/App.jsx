// import React from "react";
// import Navbar from "./components/Navbar";
// import Homepage from "./pages/Homepage";
// import LoginPage from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Footer from "./components/Footer";

// function App() {
//   return <Homepage />;
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import DrawerAppBar from "./components/Navbar";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
