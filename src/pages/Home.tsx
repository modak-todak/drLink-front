const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600 bg-yellow-100 px-2 py-1 rounded-md">DrLink</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern React application built with Vite, TypeScript, and CSS.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
