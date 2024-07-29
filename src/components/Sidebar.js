import React from "react";
import 반명함 from "../assets/images/반명함.jpg";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg  lg:w-96 lg:sticky lg:top-16 lg:left-4 h-auto lg:h-4/5 z-20 lg:z-auto">
      <div className="sidebar-info">
        <figure className="avatar-box mb-6">
          <img
            src={반명함}
            alt="반명함"
            className="w-52 h-52 rounded-full mx-auto mt-8"
          />
        </figure>
        <div className="info-content mb-6 text-center">
          <h1 className="name text-white text-2xl font-semibold">최현철</h1>
          <p className="title text-gray-400 text-lg">Web Developer</p>
        </div>
        <div className="separator bg-gray-800 h-1 my-6"></div>
        <ul className="contacts-list space-y-6">
          <li className="contact-item flex items-center space-x-4">
            <div className="icon-box bg-gray-700 w-12 h-12 flex justify-center items-center rounded-md text-yellow-400 shadow-md">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-gray-400 text-lg">Email</p>
              <a
                href="mailto:csr4180@naver.com"
                className="contact-link text-white text-lg"
              >
                csr4180@naver.com
              </a>
            </div>
          </li>
          <li className="contact-item flex items-center space-x-4">
            <div className="icon-box bg-gray-700 w-12 h-12 flex justify-center items-center rounded-md text-yellow-400 shadow-md">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-gray-400 text-lg">Phone</p>
              <a
                href="tel:+01041802890"
                className="contact-link text-white text-lg"
              >
                +82 010 - 4180 - 2890
              </a>
            </div>
          </li>

          <li className="contact-item flex items-center space-x-4">
            <div className="icon-box bg-gray-700 w-12 h-12 flex justify-center items-center rounded-md text-yellow-400 shadow-md">
              <ion-icon name="document-text-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-gray-400 text-lg">Portfolio</p>
              <a
                href="/신입 웹 개발자 최현철 포트폴리오.pdf"
                className="inline-flex items-center px-2 py-1 bg-yellow-600 text-white text-ls font-semibold rounded-lg transition-colors duration-300 hover:bg-red-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </a>
            </div>
          </li>
        </ul>
        <div className="separator bg-gray-800 h-1 my-6"></div>
        <ul className="social-list flex space-x-6 justify-center">
          <li className="social-item">
            <a
              href="https://github.com/choi2890"
              className="social-link text-white text-2xl"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.notion.so/991cfbb929604b54a7258358e6a01bdd"
              className="social-link text-yellow-400 text-2xl"
            >
              <img
                className="w-7 h-7"
                src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1570106347/noticon/hx52ypkqqdzjdvd8iaid.svg"
                alt="Notion Logo"
              />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/climb_leon/"
              className="social-link text-white text-2xl"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
