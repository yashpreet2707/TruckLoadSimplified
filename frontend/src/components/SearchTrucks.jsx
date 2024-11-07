
const SearchTrucks = () => {
  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 ml-4">Search Trucks</h1>
      
      {/* Search Section */}
      <div className=" p-4 rounded-lg shadow-md mb-4 flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Origin"
          className="border border-gray-300 text-black rounded px-2 py-1 w-40"
        />
        <input
          type="text"
          placeholder="Destination"
          className="border border-gray-300 text-black rounded px-2 py-1 w-40"
        />
        <select className="border border-gray-300 text-black rounded px-2 py-1 w-32">
          <option value="Reefers">Reefers</option>
          <option value="Dry Van">Dry Van</option>
          {/* Additional options can go here */}
        </select>
        <select className="border border-gray-300 text-black rounded px-2 py-1 w-32">
          <option value="Full & Partial">Full & Partial</option>
          <option value="Full">Full</option>
          <option value="Partial">Partial</option>
        </select>
        <input
          type="number"
          placeholder="Length ft"
          className="border border-gray-300 text-black rounded px-2 py-1 w-28"
        />
        <input
          type="number"
          placeholder="Weight lbs"
          className="border border-gray-300 text-black rounded px-2 py-1 w-28"
        />
        <input
          type="date"
          placeholder="Date Range"
          className="border border-gray-300 text-black rounded px-2 py-1 w-40"
        />
      </div>

      {/* Buttons Section */}
      <div className="ml-4">
        <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchTrucks;
