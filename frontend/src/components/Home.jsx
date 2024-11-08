

const Home = () => {
  return (
    <div className="font-sans bg-[#1C1F25] text-white text-center py-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-4">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-[#00A3FF]">DAT</div>
          <span>Freight & Analytics</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Solutions</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Signup</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mt-12">
        <h1 className="text-5xl font-bold">DAT One</h1>
        <p className="text-lg mt-2">The single source for all things freight</p>
        <button className="mt-6 bg-[#00A3FF] text-white py-2 px-6 rounded-md text-lg">
          ALREADY A CUSTOMER? LOG-IN
        </button>
        <div className="mt-8 text-2xl">↓</div>
      </div>

      {/* Image Mockups */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <img src="laptop-mockup.png" alt="Laptop preview" className="w-72" />
        <img src="tablet-mockup.png" alt="Tablet preview" className="w-36" />
        <img src="phone-mockup.png" alt="Phone preview" className="w-24" />
      </div>
    </div>
  );
};

export default Home;
