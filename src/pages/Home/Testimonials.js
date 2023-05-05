import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import rating from "../../assets/icons/rating.png";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("https://concerned-colt-skirt.cyclic.app/reviews",{
        method:"GET",
        headers:{
          "content-type":"application/json",
          "authorization":`Bearer ${localStorage.getItem("accessToken")}`
        },
      })
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
  return (
    <div className="max-w-7xl mx-auto mb-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center m-10">
        Testimonials
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
          },
          "@1.00": {
            slidesPerView: 2,
          },
          "@1.50": {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="p-5 cursor-pointer"
      >
        {reviews?.map(
          ({_id, image, name, company, description, ratings }) => (
            <SwiperSlide className="mb-5 " key={_id}>
              <div className="hover:border hover:transition-all duration-300 delay-100 p-5 w-96 ">
                <div className="flex items-center">
                  {/* images  */}
                  <div className="">
                    <img src={image} alt="review_image" className="w-14 rounded-full" />
                  </div>
                  {/* name and company */}
                  <div className="mx-3">
                    <h4 className="text-lg md:text-2xl lg:text-xl font-bold">
                      {name}
                    </h4>
                    <h5 className="text-sm md:text-lg font-semibold">
                      {company}
                    </h5>
                  </div>
                </div>
                <div className="">
                  <h3 className="m-2">{description}</h3>
                  <div className="flex mt-3">
                    <img src={rating} alt="" className="w-6 mx-1" />
                    <img src={rating} alt="" className="w-6 mx-1" />
                    <img src={rating} alt="" className="w-6 mx-1" />
                    <img src={rating} alt="" className="w-6 mx-1" />
                    <img src={rating} alt="" className="w-6 mx-1" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Testimonials;
