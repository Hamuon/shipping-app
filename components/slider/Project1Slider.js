"use client";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Project1Slider() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-banner",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="cardGrid">
            <div className="cardImage">
              {" "}
              <img src="/assets/imgs/page/homepage1/img.png" alt="transp" />
            </div>
            <div className="cardInfo">
              <h5 className="color-brand-2 mb-10">Air Freight</h5>
              <p className="font-xs color-grey-500">
                Aut ducimus inventore aut nihil exercitationem sed iure
                repellendus. Qui suscipit eaque aut necessitatibus quia ut
                expedita possimus. Sed consequatur consectetur ab fugit
                architecto
              </p>
              <div className="box-button mt-30">
                <a className="btn btn-link font-sm color-brand-2">
                  View Details
                  <span>
                    <svg
                      className="w-6 h-6 icon-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="cardGrid">
            <div className="cardImage">
              {" "}
              <img src="/assets/imgs/page/homepage1/img2.png" alt="transp" />
            </div>
            <div className="cardInfo">
              <h5 className="color-brand-2 mb-10">Sea Freight</h5>
              <p className="font-xs color-grey-500">
                Aut ducimus inventore aut nihil exercitationem sed iure
                repellendus. Qui suscipit eaque aut necessitatibus quia ut
                expedita possimus. Sed consequatur consectetur ab fugit
                architecto
              </p>
              <div className="box-button mt-30">
                <a className="btn btn-link font-sm color-brand-2">
                  View Details
                  <span>
                    <svg
                      className="w-6 h-6 icon-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="cardGrid">
            <div className="cardImage">
              {" "}
              <img src="/assets/imgs/page/homepage1/img3.png" alt="transp" />
            </div>
            <div className="cardInfo">
              <h5 className="color-brand-2 mb-10">Trucking</h5>
              <p className="font-xs color-grey-500">
                Aut ducimus inventore aut nihil exercitationem sed iure
                repellendus. Qui suscipit eaque aut necessitatibus quia ut
                expedita possimus. Sed consequatur consectetur ab fugit
                architecto
              </p>
              <div className="box-button mt-30">
                <a className="btn btn-link font-sm color-brand-2">
                  View Details
                  <span>
                    <svg
                      className="w-6 h-6 icon-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="cardGrid">
            <div className="cardImage">
              {" "}
              <img src="/assets/imgs/page/homepage1/img4.png" alt="transp" />
            </div>
            <div className="cardInfo">
              <h5 className="color-brand-2 mb-10">Warehouse</h5>
              <p className="font-xs color-grey-500">
                Aut ducimus inventore aut nihil exercitationem sed iure
                repellendus. Qui suscipit eaque aut necessitatibus quia ut
                expedita possimus. Sed consequatur consectetur ab fugit
                architecto
              </p>
              <div className="box-button mt-30">
                <a className="btn btn-link font-sm color-brand-2">
                  View Details
                  <span>
                    <svg
                      className="w-6 h-6 icon-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="box-pagination-customers text-center wow animate__animated animate__fadeIn">
        <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-4">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-4">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
