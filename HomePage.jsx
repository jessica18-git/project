import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import home1 from '../image/home1.webp';
import home2 from '../image/home2.webp';
import home3 from '../image/home3.webp';
import home4 from '../image/home4.webp';
import home5 from '../image/home5.webp';
import home6 from '../image/home6.webp';
import urban1 from '../image/urban.1.webp';
import star from '../image/urban-star.webp';
import people from '../image/urban-people.webp';
import caro1 from '../caro1.webp';
import caro2 from '../caro2.webp';
import caro3 from '../caro3.webp';
import caro4 from '../caro4.webp';
import caro5 from '../caro5.webp';
import caro6 from '../caro6.webp';
import caro7 from '../caro7.webp';
import caro8 from '../caro8.webp';
import mbs1 from '../mbs1.webp'
import mbs2 from '../mbs2.webp'
import mbs3 from '../mbs3.webp'
import mbs4 from '../mbs4.webp'
import mbs5 from '../mbs5.webp'
import mbs6 from '../mbs6.webp'
import mbs7 from '../mbs7.webp'
import mbs8 from '../mbs8.webp'
import mbs9 from '../mbs9.webp'
import mbs10 from '../mbs10.webp'

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import "slick-carousel/slick/slick.css";


// Custom Next Arrow Component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <span><FaArrowRight /></span>
    </div>
  );
}

// Custom Previous Arrow Component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <span><FaArrowLeft /></span>
    </div>
  );
}

function HomePage() {
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const slides = [
    { image: caro1, route: "/caro1" },
    { image: caro2, route: "/caro2" },
    { image: caro3, route: "/caro3" },
    { image: caro4, route: "/caro4" },
    { image: caro5, route: "/caro5" },
    { image: caro6, route: "/caro6" },
    { image: caro7, route: "/caro7" },
    { image: caro8, route: "/caro8" },
  ];

  const mostBookedSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const mostBookedServices = [
    { image: mbs1, title: "Intense bathroom cleaning", rating: "4.78 (1.8M)", price: "₹549", route: "/bathroom-cleaning" },
    { image: mbs2, title: "Intense cleaning (2 bathrooms)", rating: "4.78 (1.8M)", price: "₹988", route: "/cleaning-2-bathrooms" },
    { image: mbs3, title: "Fully automatic washing machine check-up (top load)", rating: "4.82 (282K)", price: "₹299", route: "/washing-machine-checkup" },
    { image: mbs4, title: "Fan repair (ceiling/exhaust/wall)", rating: "4.82 (118K)", price: "₹109", route: "/fan-repair" },
    { image: mbs5, title: "Fully automatic washing machine check-up (front load)", rating: "4.80 (126K)", price: "₹299", route: "/washing-machine-front-load" },
  ];

  return (
    <div className="homepage">
      <h1>Home services at your</h1>
      <h1>doorstep</h1>
      <div className="services-section">
        <h2>What are you looking for?</h2>
        <div className="services-grid">
          <div className="service-row">
            <Link to="/salon" className="service-card">
              <div className="image-wrapper">
                <img src={home1} alt="Salon for women" />
              </div>
              <span className="service-description">Salon for women</span>
            </Link>
            <Link to="/ac-repair" className="service-card">
              <div className="image-wrapper">
                <img src={home2} alt="AC & Appliance Repair" />
              </div>
              <span className="service-description">AC & Appliance Repair</span>
            </Link>
            <Link to="/cleaning" className="service-card">
              <div className="image-wrapper">
                <img src={home3} alt="Bathroom & Kitchen Cleaning" />
              </div>
              <span className="service-description">Bathroom & Kitchen Cleaning</span>
            </Link>
          </div>
          <div className="service-row">
            <Link to="/electrical" className="service-card">
              <div className="image-wrapper">
                <img src={home4} alt="Electrician, Plumber & Carpenters" />
              </div>
              <span className="service-description">Electrician, Plumber & Carpenters</span>
            </Link>
            <Link to="/water-purifier" className="service-card">
              <div className="image-wrapper">
                <img src={home5} alt="Native Water Purifier" />
              </div>
              <span className="service-description">Native Water Purifier</span>
            </Link>
            <Link to="/painting" className="service-card">
              <div className="image-wrapper">
                <img src={home6} alt="Home Painting" />
              </div>
              <span className="service-description">Home Painting</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section container-fluid">
        <Slider {...carouselSettings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="carousel-slide"
              onClick={() => (window.location.href = slide.route)}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Most Booked Services Section */}
      <div className="most-booked-section container-fluid">
        <p>Most Booked Services</p>
        <Slider {...mostBookedSettings}>
          {mostBookedServices.map((service, index) => (
            <div
              key={index}
              className="most-booked-card"
              onClick={() => (window.location.href = service.route)}
            >
              <img src={service.image} alt={service.title} className="most-booked-image" />
              <div className="most-booked-details">
                <h3>{service.title}</h3>
                <p className="rating"><IoIosStar /> {service.rating}</p>
                <p className="price">{service.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container">
        <div className="stats-section">
          <div className="stat">
            <img src={star} alt="Service Rating" />
            <span>4.8</span>
            <p className="discrip">Service Rating</p>
          </div>
          <div className="stat">
            <img src={people} alt="Customers Globally" />
            <span>12M+</span>
            <p className="discrip">Customers Globally</p>
          </div>
        </div>

        <div className="image-section">
          <img src={urban1} alt="Salon service" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
