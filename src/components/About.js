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
          저는 신입 백엔드 개발자
          <br /> 최현철입니다.
        </p>
        <p className="text-light-gray text-2xl font-light leading-relaxed ">
          ✔️ [ 성실함 ] : 2년 반 동안 주 7일 동안 꾸준히 카페를 운영하며, 어려운
          상황에서도 포기하지 않고 지속적으로 노력했습니다. <br />
          ✔️ [ 프로그래밍 프로젝트 경험 ] : 다양한 개발 프로젝트를 통해 기술
          역량을 쌓았습니다. 이클립스를 사용한 기프티콘 거래 플랫폼,
          스프링부트와 React를 기반으로 한 캠핑장 추천 모바일 플랫폼 등 다양한
          프로젝트과 websokt과 webRTC를 이용한 화상 술게임 플랫폼을
          만들었습니다. <br /> ✔️ [ 새로운 기술 학습 ] : 처음 해보는 자영업과
          그에 따로으는 마케팅를 하면서 막히는 부분을 새로운 배우걸 따로
          부업으로 만들어서 새로운 소득을 만들만큼 새로운 기술을 배고 학습하는걸
          좋아합니다. <br />
          ✔️ [ 소통과 팀워크 ] : 직원과 손님을 통해서 사람들과의 소통에
          능숙합니다. <br /> ✔️ [ 문제 해결 능력 ] : 프로젝트 진행하면 생기면서
          겪은 어려움을 서치를 통해 해결하고 유튜브를 통해 필요한 기술을 배우고,
          직접 커피머신, 전기온수기 설치 및 셀프 인테리어를 해결하는 등 자가
          해결 능력을 발휘했습니다.
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
