import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'
  
const ImageSlider = ({images}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };
  return (
    <>
    <a href="" className="logo"><img src="logo.png"   height= "50px" width="50px" ></img></a>
    <div className="tag">
        <a href="" className="ab">HOME</a>
        <a href="" className="ab">WHO WE ARE</a>
        <a href="" className="ab">PROJECTS</a>
        <a href="" className="ab" id="a4">CONTACT US</a>
    </div>

    <div className="imgslider">
    <Slider {...settings}>
        {images.map((item) => (
        <div key={item.id}>

            <img src={item.src}  alt={item.alt}></img>

        </div>
        ))}
    </Slider>

    </div>
          </>
  )
}
export default ImageSlider;