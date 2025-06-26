import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarks(saved);
  }, []);

  return (
    <div className="min-h-screen px-4 w-full flex flex-wrap bg-gray-100">
      {bookmarks.length > 0 ? (
        bookmarks.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white rounded-2xl pb-4 mb-4">
              <img
                src="/img/Bg-auth.avif"
                alt="headline"
                className="rounded-2xl my-4 w-full max-h-64 object-cover p-2"
              />
              <div className="px-4 w-full flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-9/12">
                  <div className="text-xl font-semibold mb-2 uppercase">
                    {item.title}
                  </div>
                  <div className="text-base mb-2">
                    By Reynard <br /> {item.date}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>👁 2.5m</span>
                    <span>💬 15k</span>
                    <span>❤️ 39k</span>
                  </div>
                  <Link
                    to={`/detail/${item.id}`}
                    className="text-blue-800 text-sm font-medium mt-3 inline-block"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center w-full mt-10 text-gray-500 text-lg">
          Belum ada berita yang disimpan.
        </p>
      )}
    </div>
  );
}

export default Bookmark;
