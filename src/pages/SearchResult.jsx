import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResult() {
  const query = useQuery();
  const keyword = query.get("q");

  const dummyData = [
    {
      id: 1,
      title: "Berita tentang React",
      author: "Reynard",
      date: "25/06/2025 12:00 PM",
      image: "/img/Bg-auth.avif",
      views: "2.5m",
      comments: "15k",
      likes: "39k",
    },
    {
      id: 2,
      title: "Cara belajar Tailwind",
      author: "Reynard",
      date: "25/06/2025 12:00 PM",
      image: "/img/Bg-auth.avif",
      views: "1.2m",
      comments: "7k",
      likes: "20k",
    },
    {
      id: 3,
      title: "Rynnews trending",
      author: "Reynard",
      date: "25/06/2025 12:00 PM",
      image: "/img/Bg-auth.avif",
      views: "3.7m",
      comments: "10k",
      likes: "50k",
    },
  ];

  const results = dummyData.filter((item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 w-full flex flex-wrap bg-gray-100">
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white rounded-2xl pb-4 mb-4">
              <img
                src={item.image}
                alt="headline"
                className="rounded-2xl my-4 w-full max-h-64 object-cover p-2"
              />
              <div className="px-4 w-full flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-9/12">
                  <div className="text-xl font-semibold mb-2 uppercase">
                    {item.title}
                  </div>
                  <div className="text-base mb-2">
                    By {item.author} <br />
                    {item.date}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>👁 {item.views}</span>
                    <span>💬 {item.comments}</span>
                    <span>❤️ {item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 px-4 mt-8">
          No results found for: "{keyword}"
        </p>
      )}
    </div>
  );
}

export default SearchResult;
