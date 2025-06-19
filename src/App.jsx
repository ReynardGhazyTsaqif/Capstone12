import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Notfound from "./pages/Notfound";
import Tes from "./pages/tes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/tes" element={<Tes />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
