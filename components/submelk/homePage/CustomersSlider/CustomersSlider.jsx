import ProgressBar from "@ramonak/react-progress-bar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const CustomersSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={25}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation]}
        className="mySwiper222"
        slidesPerView="auto"
        centeredSlides={true}
        loop
        loopedSlides={2}
      >
        <SwiperSlide className="py-4 pt-14">
          <div className="relative">
            <button className="w-[311px] h-[254px] lg:w-[369px] lg:h-[304px] bg-white rounded-[20px] overflow-hidden flex flex-col shadowSlideCard">
              <div className="w-full text-center absolute -top-14">
                <Image
                  src="/img/submelk/mazaya/1.png"
                  className="object-cover mx-auto rounded-full"
                  width="116"
                  height="116"
                />
              </div>
              <div className="px-7 py-2">
                <div className="text-center font-bold text-[#005BEA] mb-4 mt-20">
                  محمد گلدست درباره صاب‌ملک میگه!
                </div>
                <p className="text-[#5D6F7E] font-medium text-center leading-10">
                  من از سایت صاب‌ملک خیلی راضیم چون راستش خیلی راحت میتونم
                  معاملاتمو انجام بدم و به نظرم جزو بهترین ایده ای هست توی حوزه
                  سرمایه گذاری امن.
                </p>
              </div>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 pt-14">
          <div className="relative">
            <button className="w-[311px] h-[254px] lg:w-[369px] lg:h-[304px] bg-white rounded-[20px] overflow-hidden flex flex-col shadowSlideCard">
              <div className="w-full text-center absolute -top-14">
                <Image
                  src="/img/submelk/mazaya/1.png"
                  className="object-cover mx-auto rounded-full"
                  width="116"
                  height="116"
                />
              </div>
              <div className="px-7 py-2">
                <div className="text-center font-bold text-[#005BEA] mb-4 mt-20">
                  محمد گلدست درباره صاب‌ملک میگه!
                </div>
                <p className="text-[#5D6F7E] font-medium text-center leading-10">
                  من از سایت صاب‌ملک خیلی راضیم چون راستش خیلی راحت میتونم
                  معاملاتمو انجام بدم و به نظرم جزو بهترین ایده ای هست توی حوزه
                  سرمایه گذاری امن.
                </p>
              </div>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 pt-14">
          <div className="relative">
            <button className="w-[311px] h-[254px] lg:w-[369px] lg:h-[304px] bg-white rounded-[20px] overflow-hidden flex flex-col shadowSlideCard">
              <div className="w-full text-center absolute -top-14">
                <Image
                  src="/img/submelk/mazaya/1.png"
                  className="object-cover mx-auto rounded-full"
                  width="116"
                  height="116"
                />
              </div>
              <div className="px-7 py-2">
                <div className="text-center font-bold text-[#005BEA] mb-4 mt-20">
                  محمد گلدست درباره صاب‌ملک میگه!
                </div>
                <p className="text-[#5D6F7E] font-medium text-center leading-10">
                  من از سایت صاب‌ملک خیلی راضیم چون راستش خیلی راحت میتونم
                  معاملاتمو انجام بدم و به نظرم جزو بهترین ایده ای هست توی حوزه
                  سرمایه گذاری امن.
                </p>
              </div>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 pt-14">
          <div className="relative">
            <button className="w-[311px] h-[254px] lg:w-[369px] lg:h-[304px] bg-white rounded-[20px] overflow-hidden flex flex-col shadowSlideCard">
              <div className="w-full text-center absolute -top-14">
                <Image
                  src="/img/submelk/mazaya/1.png"
                  className="object-cover mx-auto rounded-full"
                  width="116"
                  height="116"
                />
              </div>
              <div className="px-7 py-2">
                <div className="text-center font-bold text-[#005BEA] mb-4 mt-20">
                  محمد گلدست درباره صاب‌ملک میگه!
                </div>
                <p className="text-[#5D6F7E] font-medium text-center leading-10">
                  من از سایت صاب‌ملک خیلی راضیم چون راستش خیلی راحت میتونم
                  معاملاتمو انجام بدم و به نظرم جزو بهترین ایده ای هست توی حوزه
                  سرمایه گذاری امن.
                </p>
              </div>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 pt-14">
          <div className="relative">
            <button className="w-[311px] h-[254px] lg:w-[369px] lg:h-[304px] bg-white rounded-[20px] overflow-hidden flex flex-col shadowSlideCard">
              <div className="w-full text-center absolute -top-14">
                <Image
                  src="/img/submelk/mazaya/1.png"
                  className="object-cover mx-auto rounded-full"
                  width="116"
                  height="116"
                />
              </div>
              <div className="px-7 py-2">
                <div className="text-center font-bold text-[#005BEA] mb-4 mt-20">
                  محمد گلدست درباره صاب‌ملک میگه!
                </div>
                <p className="text-[#5D6F7E] font-medium text-center leading-10">
                  من از سایت صاب‌ملک خیلی راضیم چون راستش خیلی راحت میتونم
                  معاملاتمو انجام بدم و به نظرم جزو بهترین ایده ای هست توی حوزه
                  سرمایه گذاری امن.
                </p>
              </div>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 pt-14">
          <div className="relative">
            <button className="w-[311px] h-[254px] lg:w-[369px] lg:h-[304px] bg-white rounded-[20px] overflow-hidden flex flex-col shadowSlideCard">
              <div className="w-full text-center absolute -top-14">
                <Image
                  src="/img/submelk/mazaya/1.png"
                  className="object-cover mx-auto rounded-full"
                  width="116"
                  height="116"
                />
              </div>
              <div className="px-7 py-2">
                <div className="text-center font-bold text-[#005BEA] mb-4 mt-20">
                  محمد گلدست درباره صاب‌ملک میگه!
                </div>
                <p className="text-[#5D6F7E] font-medium text-center leading-10">
                  من از سایت صاب‌ملک خیلی راضیم چون راستش خیلی راحت میتونم
                  معاملاتمو انجام بدم و به نظرم جزو بهترین ایده ای هست توی حوزه
                  سرمایه گذاری امن.
                </p>
              </div>
            </button>
          </div>
        </SwiperSlide>

        <div className="swiperRight2 hidden lg:block"></div>
        <div className="swiperLeft2 hidden lg:block"></div>
      </Swiper>

      <style jsx global>{`
        .mySwiper222 .swiper-button-prev {
          right: 80px !important;
        }
        .mySwiper222 .swiper-button-next {
          left: 80px !important;
        }
        @media only screen and (max-width: 900px) {
          .mySwiper222 .swiper-button-prev {
            display: none;
          }
          .mySwiper222 .swiper-button-next {
            display: none;
          }
        }
      `}</style>
      <style jsx>
        {`
          .swiperLeft2 {
            position: absolute;
            left: 0px;
            top: 0;
            bottom: 0;
            width: 160px;
            z-index: 9;
            transform: rotate(-180deg);

            background: linear-gradient(
              270deg,
              #005bea 0%,
              rgba(0, 91, 234, 0) 100%
            );
          }
          .swiperRight2 {
            position: absolute;
            right: 0px;
            top: 0;
            bottom: 0;
            width: 160px;
            z-index: 9;

            background: linear-gradient(
              270deg,
              #005bea 0%,
              rgba(0, 91, 234, 0) 100%
            );
          }
          .shadowSlideCard {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
          }
        `}
      </style>
    </div>
  );
};

export default CustomersSlider;
