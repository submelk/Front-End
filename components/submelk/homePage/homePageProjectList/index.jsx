import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const HomePageProjectList = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation]}
        className="mySwiper2"
        simulateTouch={false}
      >
        <SwiperSlide>
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden flex flex-col">
            <div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="w-full h-[227px]">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>asdf</SwiperSlide>
              </Swiper>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden">
            <div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#000",
                }}
                spaceBetween={10}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation]}
                className="mySwiper2"
              >
                <SwiperSlide>asdf</SwiperSlide>
                <SwiperSlide>asdf</SwiperSlide>
              </Swiper>
            </div>
          </button>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        body {
          background-color: #f7f7f9;
        }
      `}</style>
    </div>
  );
};

export default HomePageProjectList;
