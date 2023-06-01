import ProgressBar from "@ramonak/react-progress-bar";
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
        spaceBetween={25}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation]}
        className="mySwiper2"
        simulateTouch={false}
        slidesPerView="auto"
        centeredSlides
        breakpoints={{
          740: {
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                // thumbs={{ swiper: thumbsSwiper }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="pb-4">
          <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden  shadowSlideCard">
            <div className="relative">
              <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                در حال ساخت
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                pagination={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination]}
                nested
                className="mySwiper2"
              >
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[227px] w-[289px] relative">
                    <Image src="/img/submelk/home2.png" fill />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text-[#173046] p-4 text-right ">
              <div className="font-bold">پروژه ساختمانی الماس یزدانشاه</div>
              <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                <Image src="/img/submelk/location.svg" width="22" height="22" />
                <div>تهران، بلوار میرداماد</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                <div>پیشرفت پروژه</div>
                <div className="w-[153px]">
                  <ProgressBar
                    height={6}
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                    labelClassName="hidden"
                    completed={60}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <div className="swiperLeft hidden lg:block"></div>
      </Swiper>

      <style jsx global>{`
        body {
          background-color: #f7f7f9;
        }

        .swiperLeft {
          position: absolute;
          left: 0px;
          top: 0;
          bottom: 0;
          width: 160px;
          z-index: 9;
          transform: rotate(-180deg);

          height: 100%;
          background: linear-gradient(
            270deg,
            #f7f7f9 0%,
            rgba(247, 247, 249, 0) 100%
          );
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          border-radius: 100%;
          width: 60px;
          height: 60px;
          /* background: gray; */
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
          z-index: 1000;
          background-color: white;
        }
        .swiper-button-disabled {
          display: none;
        }
        .swiper-slide {
          width: auto;
        }

        .shadowSlideCard {
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
};

export default HomePageProjectList;
