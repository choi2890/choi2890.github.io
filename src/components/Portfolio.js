import React from "react";
import 기쁘띠 from "../assets/images/기쁘디.png";
import 우리집비어 from "../assets/images/우리집비어.png";
import 캠콕 from "../assets/images/캠콕.png";

const Portfolio = () => {
  const posts = [
    {
      title: "우리집 Beer",
      period: "2024. 06.01 ~ 2024. 06.26",
      imgSrc: 우리집비어,
      imgAlt: "우리집 Beer",
      description: `우리집 비어는 
‘우리집+비어있다’ 와 ‘우리집+Beer’의 
이중적인 의미를 담고 있습니다.
서로 물리적으로는 멀리 떨어져있지만 
집에서도 친구들과 편안하게 술을 즐길 수 있도록
도와주는 온라인 플랫폼입니다. 
webRTC와 websockt 기능을 통해 다른 공간에서 실시간으로 같이 
술을 마시는 것 같은 경험을 제공합니다.`,
      youtube: "https://www.youtube.com/watch?v=RDssr8zE3Nw",
      github: "https://github.com/choi2890/homeBeer",
    },
    {
      title: "CampCok",
      period: "2024. 05.01 ~ 2024. 05.28",
      imgSrc: 캠콕,
      imgAlt: "CampCok",
      description: `OpenWeatherMap와 기상청 단기 중기예보 api 데이터의 날씨와 고캠핑 api의 캠핑장 정보를 활용하여 KaKaoMap맵의 기능을 사용하여 캠핑장 추천를 추천해는 플랫폼입니다.
       날씨나 온도에 따라 주의 할점이 달라지기에 날씨나 온도를 고려하고, 애견 동반, 온라인 예매 가능여부를 제공함으로써 캠핑 장소 선택하는데 도움을 드리고자 함 입니다.`,
      youtube: "https://www.youtube.com/watch?v=9PHRTfCM6m4",
      github: "https://github.com/choi2890/campcok",
    },
    {
      title: "기쁘띠",
      period: "2024. 02.28 ~ 2024. 04.30",
      imgSrc: 기쁘띠,
      imgAlt: "기쁘띠",
      description: `기프티콘을 구매/판매 할 수 있도록 중개하는 시스템으로
         관리자가 카테고리를 설정하여 판매 가능한 상품을 등록하면 
         사용자가 등록된 상품중에 선택하여 판매상품을 등록하는 절차를 가진 플랫폼입니다.`,
      youtube: "https://youtu.be/-1_zAzSrjbA?si=D6NCf3hU6USY2-e_",
      github: "https://github.com/choi2890/Giftti",
    },
  ];

  return (
    <article className="blog active bg-gray-800  rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-5xl text-white-2 font-semibold mb-4">Portfolio</h2>
      </header>
      <section className="blog-posts mb-10">
        <ul className="blog-posts-list space-y-8">
          {posts.map((post) => (
            <li key={post.title} className="blog-post-item">
              <a
                href="#"
                className="block bg-border-gradient-onyx shadow-shadow-4 rounded-xl overflow-hidden"
              >
                <figure className="blog-banner-box w-full h-96 overflow-hidden flex justify-center items-center">
                  <img
                    src={post.imgSrc}
                    alt={post.imgAlt}
                    className="max-w-full max-h-full transition-transform duration-300 transform hover:scale-110"
                    style={{ objectFit: "contain" }}
                  />
                </figure>
                <div className="blog-content p-4">
                  <div className="blog-meta flex items-center space-x-2 text-light-gray-70 text-fs-6 mb-2">
                    <span>{post.period}</span>
                  </div>
                  <h3 className="blog-item-title text-3xl text-white-2 font-medium mb-2 transition-colors duration-300 hover:text-orange-yellow-crayola">
                    {post.title}
                  </h3>
                  <p className="blog-text text-light-gray text-xl font-light leading-6 mb-4">
                    {post.description}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={post.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg transition-colors duration-300 hover:bg-red-700"
                    >
                      <ion-icon name="logo-youtube" class="mr-2"></ion-icon>
                      Watch on YouTube
                    </a>
                    <a
                      href={post.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg transition-colors duration-300 hover:bg-gray-900"
                    >
                      <ion-icon name="logo-github" class="mr-2"></ion-icon>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
