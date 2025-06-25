import React from "react";

function Sport() {
  return (
    <div className=" text-gray-800">
      {/* Featured Article */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/img/sportimg.avif')" }}
        >
          <div className="max-w-md h-9/12 mx-30 p-12 bg-white">
            <p className="text-sm ">
              <span className="inline-block border-b pb-2 border-blue-800">
                June 25, 2025
              </span>{" "}
              • Featured • 4 Comments
            </p>

            <h2 className="text-xl font-semibold mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="text-sm  text-justify line-clamp-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo...
            </p>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="container mx-auto px-30 py-12">
        <div className="text-base font-bold mb-6 flex items-center">
          <div className="mr-4">BROWSE AND READ THE LATEST STUFF</div>

          <hr className="flex-grow border-t" />
        </div>
        <h3 className="text-4xl font-bold mb-6">Latest Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Lorem ipsum dolor sit amet",
              image: "https://placehold.co/400",
              date: "June 25, 2025",
            },
            {
              title: "Lorem ipsum dolor sit amet",
              image: "https://placehold.co/400",
              date: "June 25, 2025",
            },
            {
              title: "Lorem ipsum dolor sit amet",
              image: "https://placehold.co/400",
              date: "June 25, 2025",
            },
            {
              title: "Lorem ipsum dolor sit amet",
              image: "https://placehold.co/400",
              date: "June 25, 2025",
            },
            {
              title: "Lorem ipsum dolor sit amet",
              image: "https://placehold.co/400",
              date: "June 25, 2025",
            },
            {
              title: "Lorem ipsum dolor sit amet",
              image: "https://placehold.co/400",
              date: "June 25, 2025",
            },
          ].map((story, i) => (
            <div key={i} className="relative">
              <img src={story.image} className="w-full h-48 object-cover" />
              <div className="bg-white  p-4 w-10/12 -mt-8 z-10 relative">
                <h4 className="text-md font-semibold mb-2">{story.title}</h4>
                <p className="text-sm">
                  <span className="inline-block border-b pb-2 border-blue-800">
                    {story.date}
                  </span>{" "}
                  • Sport
                </p>
                <p className="text-sm mt-2 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius enim nec justo pretium...
                </p>
                <a
                  href="#"
                  className="text-blue-800 text-sm font-medium mt-3 inline-block"
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div></div>
        <div className="text-center mt-10">
          <button className="px-6 py-2 bg-blue-800 text-white rounded-full">
            More Posts
          </button>
        </div>
      </section>
    </div>
  );
}

export default Sport;
