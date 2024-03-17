import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/CarouselStyle.css';


const Carousel = ({ images, autoplay = true, autoplaySpeed = 2000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoplayActive, setIsAutoplayActive] = useState(autoplay);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isAutoplayActive) {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
            }
        }, autoplaySpeed);

        return () => clearInterval(intervalId);
    }, [images.length, isAutoplayActive, autoplaySpeed]);

    const handlePrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    // Optional: Pause autoplay on hover (assuming you're using react-slick)
    const handleMouseEnter = () => setIsAutoplayActive(false);
    const handleMouseLeave = () => setIsAutoplayActive(autoplay);

    const settings = {
        dots: true, // Display navigation dots
        infinite: true, // Continuously loop
        speed: 500, // Transition speed (in milliseconds)
        slidesToShow: 1, // Number of slides visible at once
        slidesToScroll: 1, // Number of slides to scroll per swipe/click
        arrows: true, // Display previous/next buttons
        autoplay: autoplay, // Enable autoplay (if using react-slick)
        autoplaySpeed, // Autoplay speed (in milliseconds)
        pauseOnHover: true, // Pause autoplay on hover
        // Add any other desired settings from react-slick's documentation
    };

    return (
        <div className="carousel-container">
            <Slider {...settings} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img  className = "landing-img" src={image.src} alt={image.alt} />
                        {/* Optional: Add captions or other content */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
