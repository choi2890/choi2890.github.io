import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DogGallery = () => {
  const generatePhotos = (category, count, baseImgSrc) => {
    return Array.from({ length: count }, (_, i) => ({
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Puppy ${
        i + 1
      }`,
      category,
      imgSrc: `${baseImgSrc}${i + 1}.jpg`,
      imgAlt: `${category.charAt(0).toUpperCase() + category.slice(1)} Puppy ${
        i + 1
      }`,
      description: `A very cute puppy from the ${category} category.`,
    }));
  };

  const matildaPhotos = generatePhotos(
    "matilda",
    13,
    "./assets/images/matilda-"
  );
  const leonPhotos = generatePhotos("leon", 6, "./assets/images/leon-");
  const dogPhotos = generatePhotos("Leon & Matilda", 5, "./assets/images/dog-");

  const allPhotos = [...dogPhotos, ...matildaPhotos, ...leonPhotos];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const groupedPhotos = allPhotos.reduce((acc, photo) => {
    (acc[photo.category] = acc[photo.category] || []).push(photo);
    return acc;
  }, {});

  return (
    <article className="dog-gallery active bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1">
      <header>
        <h2 className="text-fs-1 text-white-2 font-semibold mb-4">
          Dog Gallery
        </h2>
      </header>
      {Object.keys(groupedPhotos).map((category) => (
        <section key={category} className="dog-photos mb-10">
          <h3 className="text-fs-2 text-white-2 font-semibold mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <Slider {...settings}>
            {groupedPhotos[category].map((photo) => (
              <div key={photo.title} className="dog-photo-item p-2">
                <a
                  href="#"
                  className="block bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-xl overflow-hidden"
                >
                  <figure className="dog-banner-box w-full h-64 overflow-hidden">
                    <img
                      src={photo.imgSrc}
                      alt={photo.imgAlt}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </figure>
                  <div className="dog-content p-4">
                    <div className="dog-meta flex items-center space-x-2 text-gray-400 text-sm mb-2">
                      <p className="dog-category">{photo.category}</p>
                      <span className="dot w-1 h-1 bg-gray-400 rounded-full"></span>
                    </div>
                    <h3 className="dog-item-title text-lg text-white font-medium mb-2 transition-colors duration-300 hover:text-yellow-500">
                      {photo.title}
                    </h3>
                    <p className="dog-text text-gray-300 text-sm font-light leading-6">
                      {photo.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </section>
      ))}
    </article>
  );
};

export default DogGallery;
