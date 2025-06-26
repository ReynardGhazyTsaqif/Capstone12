import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  //detail berita
  const { id } = useParams();

  // dummy berita
  const stories = [
    {
      id: "1",
      title: "Belajar Sport",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus provident sit enim iusto exercitationem, quaerat commodi earum vero! Laudantium recusandae et veritatis voluptatum! Molestiae placeat sapiente at cum, sequi nisi",
      date: "25/06/2025 12:00 PM",
    },
  ];

  const berita = stories.find((item) => item.id === id);

  const handleBookmark = () => {
    const existing = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    // Cek duplikasi berdasarkan id
    const alreadyBookmarked = existing.find((item) => item.id === berita.id);
    if (!alreadyBookmarked) {
      const updated = [...existing, berita];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      alert("Berita telah ditambahkan ke Bookmark");
    } else {
      alert("Berita sudah ada di Bookmark");
    }
  };

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

  // fitur like
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
    }
    setLiked(!liked);
  };

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
                {berita?.title}
              </div>
              <div className="text-base mb-2">
                By Reynard <br /> {berita?.date}
              </div>
              <div className="flex gap-4 text-sm text-gray-600 mb-4 items-center">
                <span>
                  <i className="fa fa-eye mr-1" /> 2.5m
                </span>
                <span>
                  <i className="fa fa-comment mr-1" /> 15k
                </span>
                <button
                  onClick={handleLike}
                  className="flex items-center focus:outline-none"
                >
                  <i
                    className={`fa fa-heart mr-1 transition-colors duration-300 ${
                      liked ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                  {likeCount.toLocaleString()}
                </button>
              </div>
            </div>
            <div className="w-full md:w-3/12 text-sm mt-4 md:mt-0">
              <button
                onClick={handleBookmark}
                className="border rounded-full px-3 py-2 mb-4 w-full hover:bg-gray-100"
              >
                Save to pocket
              </button>
              <button className="bg-blue-300 rounded-full px-3 py-2 w-full hover:bg-blue-500">
                Share on media
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-800 leading-relaxed px-3 text-justify mb-4">
          {berita?.content || "Berita tidak ditemukan."}
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
