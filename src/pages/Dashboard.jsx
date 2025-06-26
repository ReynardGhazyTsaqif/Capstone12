import React from "react";

function Dashboard() {
  return (
    <div className="w-full h-full px-4 md:px-10">
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Banner */}
        <div className="w-full md:w-9/12">
          <div className="h-64 bg-gray-300 flex items-center justify-center text-2xl font-semibold text-white rounded-md">
            Headline
          </div>
        </div>

        {/* Trending Now */}
        <div className="w-full md:w-3/12">
          <h2 className="font-semibold mb-4">Trending Now</h2>
          <hr className="block md:hidden mb-3 border-t-2 " />
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center mb-4 gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-sm"></div>
              <div>
                <div className="font-medium">Title</div>
                <div className="text-sm text-gray-500">Text...</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* For You */}
      <div className="w-full md:w-9/12 mt-8">
        <h2 className="font-semibold mb-2">For you</h2>
        <hr className="mb-4 border-t-2" />
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex flex-col md:flex-row justify-between gap-4 mb-6"
          >
            <div className="w-full md:w-9/12">
              <h3 className="font-semibold">Title</h3>
              <p className="text-sm text-gray-600">
                Lorm ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
                voluptate ipsam, illum iure dicta consectetur, error quaerat,
                facilis quasi dolore adipisci magni alias repellat asperiores
                ipsum nesciunt dolorum quae accusantium!
              </p>
            </div>
            <div className="w-full md:w-24 md:h-20 h-40 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
