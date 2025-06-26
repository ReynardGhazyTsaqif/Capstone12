import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  // search
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3 shadow-md border-b border-gray-200 w-full">
      {/* Logo */}
      <div className="w-full md:w-2/3 text-xl font-medium mb-2 md:mb-0 text-center md:text-start">
        <i className="fab fa-firefox-browser mr-2"></i>
        <Link to="/dashboard">Rynnews</Link>
      </div>

      {/* kanan, search dan profile */}
      <div className="w-full md:w-1/3 flex items-center gap-3">
        {/* Search bar */}
        <div className="relative flex-grow">
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="search title, topic, other..."
            className="w-full pl-10 pr-10 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <i className="fas fa-microphone absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
        </div>

        {/* Profile icon */}
        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-xl text-gray-400 flex-shrink-0 cursor-pointer hover:text-black"
          >
            <i className="fas fa-user"></i>
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg z-10">
              <Link
                to="/bookmark"
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Bookmark
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
