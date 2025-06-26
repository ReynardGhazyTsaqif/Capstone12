import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import Notfound from "./pages/Notfound";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import CategoryNav from "./components/CategoryNav";
import Sport from "./pages/Sport";
import Detail from "./pages/Detail";
import Bookmark from "./pages/Bookmark";
import SearchResult from "./pages/SearchResult";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      {location.pathname == "/dashboard" && <CategoryNav />}

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
