import { Link } from "react-router-dom";

function Detail() {
  const categories = [
    "Sport",
    "Medical",
    "Business",
    "Education",
    "Politics",
    "National",
    "International",
    "Jobs",
  ];

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row gap-4 p-4 items-start bg-gray-100">
      {/* Kategori */}
      <div className="w-full lg:w-2/12 p-6 bg-white rounded-2xl overflow-hidden">
        <div className="text-xl mb-6 font-bold">Category</div>
        <ul className="space-y-4 text-gray-600">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link
                to={`/${cat.toLowerCase()}`}
                className="py-1 cursor-pointer hover:text-gray-800"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Berita */}
      <div className="w-full lg:w-6/12">
        <div className="text-2xl font-semibold flex items-center">
          <div className="mr-4">Sport</div>
          <hr className="flex-grow border-t" />
        </div>
        <div className="bg-white rounded-2xl pb-4 mb-4">
          <img
            src="/img/Bg-auth.avif"
            alt="headline"
            className="rounded-2xl my-4 w-full max-h-64 object-cover p-2"
          />
          <div className="px-4 w-full flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-9/12">
              <div className="text-xl font-semibold mb-2 uppercase">
                Lorem ipsum dolor sit amet
              </div>
              <div className="text-base mb-2">
                By Reynard <br /> 25/06/2025 12:00 PM
              </div>
              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>👁 2.5m</span>
                <span>💬 15k</span>
                <span>❤️ 39k</span>
              </div>
            </div>
            <div className="w-full md:w-3/12 text-sm mt-4 md:mt-0">
              <button className="border rounded-full px-3 py-2 mb-4 w-full">
                Save to pocket
              </button>
              <button className="bg-blue-300 rounded-full px-3 py-2 w-full">
                Share on media
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-800 leading-relaxed px-3 text-justify mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste, deleniti quaerat fugiat ad dolores dolor delectus quasi vitae autem laborum ut nihil dignissimos dicta laudantium cupiditate! Vero, dicta eaque.
        </p>
        <p className="text-gray-800 leading-relaxed px-3 text-justify mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore fuga nam unde distinctio explicabo fugiat, quae rerum maxime repellat porro assumenda earum reiciendis itaque reprehenderit at, nemo obcaecati quas.
        </p>
      </div>

      {/* Related */}
      <div className="w-full lg:w-4/12">
        <h2 className="text-xl font-bold mb-4">Related News</h2>

        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-2xl pb-4 mb-4">
            <img
              src="/img/Bg-auth.avif"
              alt="headline"
              className="rounded-2xl w-full max-h-48 object-cover p-4"
            />
            <div className="flex flex-row justify-between px-4 mb-2">
              <div className="inline-block px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full">
                SPORT
              </div>
              <span>👁 2.5m</span>
            </div>
            <div className="px-4 w-full flex overflow-hidden">
              <div className="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
