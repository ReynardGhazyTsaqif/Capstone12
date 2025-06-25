import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import Notfound from "./pages/Notfound";
import Tes from "./pages/tes";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import CategoryNav from "./components/CategoryNav";
import Sport from "./pages/Sport";
import Detail from "./pages/Detail";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      {location.pathname == "/dashboard" && <CategoryNav />}

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
