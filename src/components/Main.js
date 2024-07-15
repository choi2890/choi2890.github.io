import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const Main = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "Introduction":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Portfolio":
        return <Portfolio />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-4/5 h-screen mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-1/4 lg:h-full">
        <Sidebar />
      </div>
      <div className="w-full lg:w-3/4 mt-4 lg:mt-0 bg-gray-900 border rounded-2xl p-4 shadow-lg h-4/5 flex flex-col">
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="content-wrapper flex-grow overflow-y-auto p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Main;
