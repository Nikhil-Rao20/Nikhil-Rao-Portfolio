import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {travelImages} from '../constants';


const TravelGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="travel-carousel-container">
      <p className={"sectionSubText"}>Exploring the World</p>
      <h2 className={"sectionHeadText"}>Travel</h2>
      <Slider {...settings}>
        {travelImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div className="image-container">
              <img src={image.url} alt={image.caption} />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{image.location}</h3>
                  <p>{image.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TravelGallery;
