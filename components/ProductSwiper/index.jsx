import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import Image from "next/image";

const ProductSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            src="/img/stamp/stamp2.jpg"
            className="border border-solid rounded-[20px] mx-auto"
            width="450"
            height="450"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/stamp/stamp2.jpg"
            className="border border-solid rounded-[20px] mx-auto"
            width="450"
            height="450"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/stamp/stamp2.jpg"
            className="border border-solid rounded-[20px] mx-auto"
            width="450"
            height="450"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/stamp/stamp2.jpg"
            className="border border-solid rounded-[20px] mx-auto"
            width="450"
            height="450"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/stamp/stamp2.jpg"
            className="border border-solid rounded-[20px] mx-auto"
            width="450"
            height="450"
          />
        </SwiperSlide>
      </Swiper>
      <div className="mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-[450px] max-w-full"
        >
          <SwiperSlide>
            <Image
              src="/img/stamp/stamp2.jpg"
              className="rounded border border-solid p-2 mx-auto"
              width="75"
              height="75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/stamp2.jpg"
              className="rounded border border-solid p-2 mx-auto"
              width="75"
              height="75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/stamp2.jpg"
              className="rounded border border-solid p-2 mx-auto"
              width="75"
              height="75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/stamp2.jpg"
              className="rounded border border-solid p-2 mx-auto"
              width="75"
              height="75"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/stamp2.jpg"
              className="rounded border border-solid p-2 mx-auto"
              width="75"
              height="75"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-prev {
          left: 100px;
        }
        .swiper-button-next {
          right: 100px;
        }
        @media only screen and (max-width: 600px) {
          .swiper-button-prev {
            left: 10px;
          }
          .swiper-button-next {
            right: 10px;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          background-color: #d7d7d7;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          width: 40px;
          height: 40px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          color: #b2b2b2;
        }
      `}</style>
    </div>
  );
};

export default ProductSwiper;
