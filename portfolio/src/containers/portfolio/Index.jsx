import PageHeaderContent from "../../components/pageHeader/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.scss";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="slide">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/board-game-with-dice-card-game-cartoon-vector-icon-illustration-holiday-object-icon-isolated_138676-7545.jpg?w=1800&t=st=1706735233~exp=1706735833~hmac=032b73602815722eb9ba9b2523f15b7c5bf82c4a7eaa6fcdbf1e9d126ab7170f"
              alt=""
            />
            <Link
              to="https://github.com/DrCetmi/ShrugmanGame"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              Shrugman Game
            </Link>
            <p>
              Shrugman Game ist ein textbasiertes Spiel, entwickelt in
              JavaScript und ausgeführt in einer Node.js-Umgebung, bei dem eine
              Person versucht, ein geheimes Wort zu erraten.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/young-man-holding-modern-device-with-spotify-app_23-2147987830.jpg?w=2000&t=st=1706735811~exp=1706736411~hmac=f636063c1e110b4cdd826e0413ea6afc00d0e8a9502959dc0542a92530115913" />
            <Link
              to="https://github.com/DrCetmi/Spotify-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              Spotify-Clone
            </Link>
            <p>
              Willkommen beim Spotify-Klon-Projekt unter Verwendung der Deezer
              API(oder Rapid API)! Dieses Projekt zielt darauf ab, einige
              Funktionen von Spotify mithilfe der Deezer API nachzubilden.
              Dieses Projekt ist eine Teamleistung.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/smartphone_23-2148015028.jpg?w=1800&t=st=1706736254~exp=1706736854~hmac=44c9eab3d61873295ab2eaf6666aade4b7692e96ad4c357d16d2aa4007f994ef" />
            <Link
              to="https://github.com/DrCetmi/Netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              Netflix-Film-Anwendung mit OMDB-API
            </Link>
            <p>
              Dieses umfangreiche Projekt einer Netflix-Filmanwendung integriert
              nicht nur die OMDB API für den Abruf von Filmdaten, sondern
              enthält auch eine lokale Authentifizierung für eine Login-Seite.
              Ziel ist es, Benutzern eine personalisierte Erfahrung zu bieten,
              indem sie sich anmelden können, um ihre bevorzugten Filme zu
              speichern und mit anderen Benutzern zu interagieren.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
        </Swiper>
        <div>
          <h3>Wordpress-Project</h3>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={require("./eurostarav.png")} alt="" />
            <Link
              to="https://github.com/DrCetmi/ShrugmanGame"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            ></Link>
            <p>
              Shrugman Game ist ein textbasiertes Spiel, entwickelt in
              JavaScript und ausgeführt in einer Node.js-Umgebung, bei dem eine
              Person versucht, ein geheimes Wort zu erraten.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./hikmet.png")} />
            <Link
              to="https://github.com/DrCetmi/Spotify-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            ></Link>
            <p>
              Willkommen beim Spotify-Klon-Projekt unter Verwendung der Deezer
              API(oder Rapid API)! Dieses Projekt zielt darauf ab, einige
              Funktionen von Spotify mithilfe der Deezer API nachzubilden.
              Dieses Projekt ist eine Teamleistung.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("./hizmet.png")} />
            <Link
              to="https://github.com/DrCetmi/Netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              hizmetten
            </Link>
            <p>
              Dieses umfangreiche Projekt einer Netflix-Filmanwendung integriert
              nicht nur die OMDB API für den Abruf von Filmdaten, sondern
              enthält auch eine lokale Authentifizierung für eine Login-Seite.
              Ziel ist es, Benutzern eine personalisierte Erfahrung zu bieten,
              indem sie sich anmelden können, um ihre bevorzugten Filme zu
              speichern und mit anderen Benutzern zu interagieren.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={require("./nefret.png")} />
            <Link
              to="https://github.com/DrCetmi/Netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              NefretSuçları
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <Link
              to="https://github.com/DrCetmi/Netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              İnkişaf
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            <Link
              to="https://github.com/DrCetmi/Netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-link"
            >
              mizan
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
