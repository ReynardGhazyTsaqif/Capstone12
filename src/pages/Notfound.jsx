import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! Halaman tidak ditemukan.
      </p>
      <p className="text-md text-gray-500 mb-8 text-center max-w-md">
        Sepertinya Anda mencoba mengakses halaman yang tidak tersedia atau sudah
        dipindahkan.
      </p>
      <Link
        to="/dashboard"
        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
};

export default Notfound;
