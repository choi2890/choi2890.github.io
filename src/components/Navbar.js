import React from "react";

const Navbar = ({ setActiveTab, activeTab }) => {
  const tabs = ["Introduction", "Skills", "Portfolio", "blog", "contact"];

  return (
    <nav className="navbar fixed bottom-0 left-0 w-full bg-gray-900  bg-opacity-75 backdrop-blur-md border border-jet rounded-t-2xl shadow-lg z-10 md:relative md:top-0 md:right-0 md:w-auto md:border-none md:shadow-none">
      <ul className="navbar-list flex justify-center items-center space-x-4 md:space-x-8">
        {tabs.map((tab) => (
          <li key={tab} className="navbar-item">
            <button
              className={`navbar-link text-light-gray text-2xl py-4 px-2 transition-colors duration-300 md:text-2xl ${
                activeTab === tab ? "text-orange-yellow-crayola" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
