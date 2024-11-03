import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";

import "./DiscoverSection.scss";
import { slidesData } from "../../helpers/staticDiscover";

export default function DiscoverSection() {
  return (
    <section className="discover">
      <h2 className="discover__title">Discover The Most Attractive Places</h2>

      <div className="discover__swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <img
                src={slide.src}
                alt={slide.alt}
                className="discover__swiper_img"
              />
              <div className="swiper-slide__text">
                <h3 className="swiper-slide__text_title">{slide.title}</h3>
                <p className="swiper-slide__text_location">{slide.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
