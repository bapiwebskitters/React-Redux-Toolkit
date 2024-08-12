import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-1.png"
              className="img-fluid"
              alt="Client 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-2.png"
              className="img-fluid"
              alt="Client 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-3.png"
              className="img-fluid"
              alt="Client 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-4.png"
              className="img-fluid"
              alt="Client 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-5.png"
              className="img-fluid"
              alt="Client 5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-6.png"
              className="img-fluid"
              alt="Client 6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-7.png"
              className="img-fluid"
              alt="Client 7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-8.png"
              className="img-fluid"
              alt="Client 8"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;
