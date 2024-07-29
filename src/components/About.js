import React from "react";
import 로고 from "../assets/images/로고.jpg";
import 쿠팡 from "../assets/images/쿠팡.png";
import 중앙정보처리 from "../assets/images/중앙정보처리.png";
import 군산대학교 from "../assets/images/군산대학교.png";

const About = () => {
  return (
    <article className="about active bg-gray-800   rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-5xl text-white-2 font-semibold mb-4">
          Introduction
        </h2>
      </header>
      <section className="about-text mb-10">
        <p className="text-light-gray text-4xl font-bold leading-relaxed mb-6">
          안녕하세요. <br />
          저는 신입 Web 개발자
          <br /> 최현철입니다.
        </p>
        <p className="text-light-gray text-2xl font-light leading-relaxed">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mb-4 w-full text-left">
            🚩 [ 뛰어난 습득력 ] : 6개월간 취업캠프를 다니는 동안 저녁에 틈틈이
            공부하여 처음 접하는 분야인 SQLD, 정보처리기사 시험을 한번에
            합격했습니다.
          </button>
          <br />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 w-full text-left">
            🚩 [ 다양한 프로젝트 경험 ] : 이클립스를 이용한 웹 관리자 페이지,
            공공데이터 API를 이용한 캠핑장 추천 플랫폼, Web RTC와 Web Socket를
            이용한 화상채팅 플랫폼 프로젝트를 만들었습니다.
          </button>
          <br />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 w-full text-left">
            🚩 [ 카페 운영 경험 ] : 3년 카페를 운영하면서 사장의 책임감을 키웠고
            다양한 문제들을 해결 했습니다. 그리고 직원들과의 소통을 중요시
            하면서 운영 했습니다.
          </button>
          <br />
        </p>
      </section>
      <section className="service mb-10">
        <h3 className="text-4xl text-white-2 font-semibold mb-6">Experience</h3>
        <ul className="service-list grid gap-8 lg:grid-cols-2">
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src={로고}
                alt="design icon"
                width="100"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">CEO</h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2021. 06 ~ 2023. 11] 신사동 가로수길 카페/와인바 운영
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src={쿠팡}
                alt="design icon"
                width="100"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">파견직</h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2018. 08 ~ 2019. 02] 로켓프레시 업무 담당
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="service mb-10">
        <h3 className="text-4xl text-white-2 font-semibold mb-6">Education</h3>
        <ul className="service-list grid gap-8 lg:grid-cols-2">
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src={군산대학교}
                alt="mobile app icon"
                width="100"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">
                Student
              </h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2011. 03. ~ 2020. 12.] 기계융합시스템 미래자동차과 학사 졸업
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-icon-box mb-2 mx-auto">
              <img
                src={중앙정보처리}
                alt="mobile app icon"
                width="100"
                className="m-auto"
              />
            </div>
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">
                Student
              </h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2023. 12.29 ~ 2024. 06.26] 클라우드 데브옵스 프론트엔드&백엔드
                자바 풀스택 개발자 취업 캠프
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="service mb-10">
        <h3 className="text-4xl text-white-2 font-semibold mb-6">
          Certificate
        </h3>
        <ul className="service-list grid gap-8 lg:grid-cols-2">
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">
                정보처리기사
              </h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2024 .06] 한국산업인력공단
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">SQLD</h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2024 .04] 한국데이터산업진흥원
              </p>
            </div>
          </li>
          <li className="service-item bg-border-gradient-onyx p-6 rounded-lg shadow-shadow-2 relative">
            <div className="service-content-box text-center">
              <h4 className="text-2xl text-white-2 font-medium mb-2">
                CATIA v5 -part Design
              </h4>
              <p className="text-light-gray text-xl font-light leading-6">
                [2020 .02] Dassault Systemes
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
