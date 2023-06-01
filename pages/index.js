import Head from "next/head";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import PorscheImg from "/public/img/brands/Porsche.svg";
// import BenzImg from "/public/img/brands/Benz.svg";
// import MazImg from "/public/img/brands/Maz.svg";
// import VolvoImg from "/public/img/brands/Volvo.svg";
// import LexusImg from "/public/img/brands/Lexus.svg";
// import BMWImg from "/public/img/brands/BMW.svg";
import { useQuery } from "@tanstack/react-query";
import { getHomePageData } from "../APIGate/public";
// import { baseURL } from "../config";

// const useMobileDetect = dynamic(() => import("../components/isMobile"), {
//   ssr: false,
// });

// import { isMobile } from "is-mobile";
// import { useMemo } from "react";
// import dynamic from "next/dynamic";
// import useMobileDetect from "../components/isMobile";
import { useEffect, useState } from "react";
import HomePageVideo from "../components/submelk/homePage/video";
import HomePageProjectList from "../components/submelk/homePage/homePageProjectList";
import CustomersSlider from "../components/submelk/homePage/CustomersSlider/CustomersSlider";
import HomePageFAQ from "../components/submelk/homePage/HomePageFAQ/HomePageFAQ";
import HomePageVideo2 from "../components/submelk/homePage/video2";
import HomePageMazaya from "../components/submelk/homePage/homePageMazaya/HomePageMazaya";
// import CarsSlider from "../components/carsSlider";

export default function Home(
  {
    // preData
  }
) {
  // const { data } = useQuery(["getHomePageData"], getHomePageData, {

  //   // initialData: preData,
  // });
  // const isMobileValue = isMobile;

  return (
    <>
      <div
        className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/img/submelk/pattern2.svg)",
          backgroundPosition: "left bottom",
        }}
      ></div>
      <div
        className="h-[193px] lg:h-[630px] bg-[url(/img/submelk/homeTop.png)] bg-no-repeat w-full relative"
        style={{ backgroundSize: "100% 100%" }}
      >
        <button className="hidden lg:block bg-[#005BEA] rounded-[10px] font-bold text-lg text-white px-9 py-4 absolute lg:bottom-24 left-28">
          مشاوره رایگان
        </button>
      </div>
      <div className="bg-white lg:hidden text-center py-4">
        <button className="bg-[#005BEA] rounded-[10px] font-bold text-lg text-white px-9 py-3 mx-auto">
          مشاوره رایگان
        </button>
      </div>
      <div className="bg-[#005BEA]">
        <div className="container text-white mx-auto flex flex-col lg:flex-row items-stretch justify-between py-14 gap-14 px-5 lg:px-9">
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold lg:text-2xl text-lg mb-4">
              صاب‌ملک چیست؟
            </h2>
            <p className="text-justify" style={{ lineHeight: "45px" }}>
              صاب‌ملک پلت‌فرم تامین مالی جمعی و بدون وقفه پروژه‌های ساخت با
              مدیریت سودآور برای سرمایه‌گذاران است. سرمایه‌گذاری در ساخت و ساز
              از پرسودترین فعالیت های اقتصادی در کشور است. اما ورود به این حوزه
              نیازمند تخصص، سرمایه زیاد، و صرف وقت و انرژی قابل توجه است. ما
              می‌خواهیم مردم عادی هم بدون نیاز به صرف وقت و هزینه ی قابل توجه و
              با هر مقدار سرمایه در این فعالیت اقتصادی شرکت کنند. به همین منظور
              با تحقیقات فراوان و مطالعه‌ی تجربیات سازندگان مختلف، تعاونی‌های
              مسکن، شرکت‌های سرمایه‌گذاری مسکن و سرمایه گذاران حقیقی، مدل
              منحصربه‌فردی را طراحی کرده‌ایم که با تامین مالی جمعی به مدیریت
              سرمایه گذاری در پروژه های ساخت بپردازیم.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative self-end">
            <div className="hidden lg:block bg-white rounded-[10px] h-[345px] w-full">
              <HomePageVideo />
            </div>
            <div className="-ml-5">
              <div className="lg:hidden bg-white rounded-r-[10px] h-[285px] w-full">
                <HomePageVideo2 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="font-bold text-[#005BEA] text-2xl text-center mt-12 mb-8">
          پروژه های صاب ملک
        </div>
        <div className="container mx-auto lg:px-9">
          <HomePageProjectList />
        </div>
      </div>

      <div>
        <div className="font-bold text-[#005BEA] text-2xl text-center mb-8 mt-28">
          از سرمایه گذاری تا سود
        </div>
        {/* <style>.cls-1{fill:none;}</style> */}
        <div>
          <div className="max-w-[918px] mx-auto mt-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 998 1600.12">
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path d="M58.67 451.44L58.67 778.44" className="cls-1"></path>
                  <path d="M215.67 2.44L987.67 2.44" className="cls-1"></path>
                  <path d="M189.49 81.04L182.76 89.41 325.25 89.41 332.58 95.8 186.1 95.8 207.9 137.13 350.77 137.13 350.84 143.53 211.27 143.53 204.11 143.53 202.67 143.53 174.3 88.92 174.57 88.92 174.57 88.92 185.47 74.65 186.04 74.65 194.64 74.65 313.32 74.65 320.65 81.04 189.49 81.04z"></path>
                  <path d="M187.49 63.13L180.76 54.77 323.25 54.77 330.58 48.37 184.1 48.37 205.9 7.04 348.77 7.04 348.84 0.65 209.27 0.65 202.11 0.65 200.67 0.65 172.3 55.26 172.57 55.26 172.57 55.26 183.47 69.53 184.04 69.53 192.64 69.53 311.32 69.53 318.65 63.13 187.49 63.13z"></path>
                  <path d="M815.48 199.93L822.21 191.57 679.73 191.57 672.39 185.17 818.87 185.17 797.08 143.84 654.2 143.84 654.13 137.44 793.7 137.44 800.86 137.44 802.3 137.44 830.67 192.06 830.4 192.06 830.4 192.06 819.5 206.33 818.93 206.33 810.33 206.33 691.65 206.33 684.32 199.93 815.48 199.93z"></path>
                  <path d="M815.48 217.84L822.21 226.21 679.73 226.21 672.39 232.6 818.87 232.6 797.08 273.93 654.2 273.93 654.13 280.33 793.7 280.33 800.86 280.33 802.3 280.33 830.67 225.71 830.4 225.72 830.4 225.71 819.5 211.44 818.93 211.44 810.33 211.44 691.65 211.44 684.32 217.84 815.48 217.84z"></path>
                  <path d="M202 0H998V7H202z"></path>
                  <path d="M202 137H802V144H202z"></path>
                  <path d="M202 274H802V281H202z"></path>
                  <path
                    d="M59.13 725.32L59.13 1052.32"
                    className="cls-1"
                  ></path>
                  <path
                    d="M216.13 276.32L988.13 276.32"
                    className="cls-1"
                  ></path>
                  <path d="M189.96 354.92L183.23 363.29 325.71 363.29 333.05 369.68 186.57 369.68 208.36 411.01 351.24 411.01 351.3 417.41 211.73 417.41 204.58 417.41 203.13 417.41 174.77 362.79 175.04 362.8 175.04 362.79 185.93 348.52 186.51 348.52 195.11 348.52 313.79 348.52 321.12 354.92 189.96 354.92z"></path>
                  <path d="M187.96 337.01L181.23 328.65 323.71 328.65 331.05 322.25 184.57 322.25 206.36 280.92 349.24 280.92 349.3 274.52 209.73 274.52 202.58 274.52 201.13 274.52 172.77 329.14 173.04 329.14 173.04 329.14 183.93 343.41 184.51 343.41 193.11 343.41 311.79 343.41 319.12 337.01 187.96 337.01z"></path>
                  <path d="M815.94 473.81L822.67 465.44 680.19 465.44 672.86 459.05 819.33 459.05 797.54 417.72 654.67 417.72 654.6 411.32 794.17 411.32 801.33 411.32 802.77 411.32 831.13 465.94 830.86 465.94 830.86 465.94 819.97 480.21 819.4 480.21 810.8 480.21 692.12 480.21 684.78 473.81 815.94 473.81z"></path>
                  <path d="M815.94 491.72L822.67 500.08 680.19 500.08 672.86 506.48 819.33 506.48 797.54 547.81 654.67 547.81 654.6 554.21 794.17 554.21 801.33 554.21 802.77 554.21 831.13 499.59 830.86 499.59 830.86 499.59 819.97 485.32 819.4 485.32 810.8 485.32 692.12 485.32 684.78 491.72 815.94 491.72z"></path>
                  <path
                    d="M59.13 999.12L59.13 1326.12"
                    className="cls-1"
                  ></path>
                  <path
                    d="M216.13 550.12L988.13 550.12"
                    className="cls-1"
                  ></path>
                  <path d="M189.96 628.72L183.23 637.09 325.71 637.09 333.05 643.48 186.57 643.48 208.36 684.81 351.24 684.81 351.3 691.21 211.73 691.21 204.58 691.21 203.13 691.21 174.77 636.59 175.04 636.6 175.04 636.59 185.93 622.32 186.51 622.32 195.11 622.32 313.79 622.32 321.12 628.72 189.96 628.72z"></path>
                  <path d="M187.96 610.81L181.23 602.45 323.71 602.45 331.05 596.05 184.57 596.05 206.36 554.72 349.24 554.72 349.3 548.32 209.73 548.32 202.58 548.32 201.13 548.32 172.77 602.94 173.04 602.94 173.04 602.94 183.93 617.21 184.51 617.21 193.11 617.21 311.79 617.21 319.12 610.81 187.96 610.81z"></path>
                  <path d="M815.94 747.61L822.67 739.25 680.19 739.25 672.86 732.85 819.33 732.85 797.54 691.52 654.67 691.52 654.6 685.12 794.17 685.12 801.33 685.12 802.77 685.12 831.13 739.74 830.86 739.74 830.86 739.74 819.97 754.01 819.4 754.01 810.8 754.01 692.12 754.01 684.78 747.61 815.94 747.61z"></path>
                  <path d="M815.94 765.52L822.67 773.88 680.19 773.88 672.86 780.28 819.33 780.28 797.54 821.61 654.67 821.61 654.6 828.01 794.17 828.01 801.33 828.01 802.77 828.01 831.13 773.39 830.86 773.39 830.86 773.39 819.97 759.12 819.4 759.12 810.8 759.12 692.12 759.12 684.78 765.52 815.94 765.52z"></path>
                  <path
                    d="M59.13 1273.12L59.13 1600.12"
                    className="cls-1"
                  ></path>
                  <path
                    d="M216.13 824.12L988.13 824.12"
                    className="cls-1"
                  ></path>
                  <path d="M189.96 902.72L183.23 911.09 325.71 911.09 333.05 917.48 186.57 917.48 208.36 958.81 351.24 958.81 351.3 965.21 211.73 965.21 204.58 965.21 203.13 965.21 174.77 910.59 175.04 910.6 175.04 910.59 185.93 896.32 186.51 896.32 195.11 896.32 313.79 896.32 321.12 902.72 189.96 902.72z"></path>
                  <path d="M187.96 884.81L181.23 876.45 323.71 876.45 331.05 870.05 184.57 870.05 206.36 828.72 349.24 828.72 349.3 822.32 209.73 822.32 202.58 822.32 201.13 822.32 172.77 876.94 173.04 876.94 173.04 876.94 183.93 891.21 184.51 891.21 193.11 891.21 311.79 891.21 319.12 884.81 187.96 884.81z"></path>
                  <path d="M815.94 1021.61L822.67 1013.25 680.19 1013.25 672.86 1006.85 819.33 1006.85 797.54 965.52 654.67 965.52 654.6 959.12 794.17 959.12 801.33 959.12 802.77 959.12 831.13 1013.74 830.86 1013.74 830.86 1013.74 819.97 1028.01 819.4 1028.01 810.8 1028.01 692.12 1028.01 684.78 1021.61 815.94 1021.61z"></path>
                  <path d="M815.94 1039.52L822.67 1047.88 680.19 1047.88 672.86 1054.28 819.33 1054.28 797.54 1095.61 654.67 1095.61 654.6 1102.01 794.17 1102.01 801.33 1102.01 802.77 1102.01 831.13 1047.39 830.86 1047.39 830.86 1047.39 819.97 1033.12 819.4 1033.12 810.8 1033.12 692.12 1033.12 684.78 1039.52 815.94 1039.52z"></path>
                  <path d="M0 1095H796V1102H0z"></path>
                  <path d="M202.47 958.68H802.47V965.68H202.47z"></path>
                  <path d="M202.47 684.68H802.47V691.68H202.47z"></path>
                  <path d="M202.47 821.68H802.47V828.68H202.47z"></path>
                  <path d="M202.47 410.88H802.47V417.88H202.47z"></path>
                  <path d="M202.47 547.88H802.47V554.88H202.47z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-[#005BEA] py-8 lg:-mt-48">
        <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-3 lg:px-9">
          <div className="flex items-center text-white gap-5 mb-4 lg:mb-0">
            <Image src="/img/submelk/support.png" width="149" height="125" />
            <div>
              <div className="font-bold lg:text-xl mb-4">
                مشاوره رایگانتو از صاب‌ملک بگیر.
              </div>
              <div className="font-medium">
                برای دریافت مشاوره رایگان شماره موبایلت رو وارد کن.
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-4 text-sm">
            <input
              type="text"
              className="w-[150px] grow bg-white rounded-lg border border-[#DEE6EF] py-4 px-3 text-[#5D6F7E] font-medium"
              placeholder="نام و نام خانوادگی"
            />
            <input
              type="text"
              className="w-[150px] grow bg-white rounded-lg border border-[#DEE6EF] py-4 px-3 text-[#5D6F7E] font-medium"
              placeholder="شماره موبایل"
            />
            <button className="w-full lg:w-auto bg-white text-[#005BEA] font-bold py-4 px-5 rounded-lg">
              درخواست
            </button>
          </div>
        </div>
      </div>

      <div className="mt-28 container mx-auto px-9">
        <div className="font-bold text-[#005BEA] text-2xl text-center mb-16">
          مزایای استفاده از صاب‌ملک
        </div>

        <HomePageMazaya />
      </div>

      <div className="bg-[#005BEA] py-16">
        <div className="text-center font-bold text-2xl mb-6 text-white">
          نظر مشتریان درباره صاب‌ملک
        </div>

        <CustomersSlider />
      </div>

      <div>
        <div className="text-center font-bold text-2xl text-[#005BEA] mb-14 mt-9">
          پرسش‌های متداول
        </div>

        <div className="container mx-auto px-3 lg:px-32">
          <HomePageFAQ />

          <div className="text-center mt-14">
            <button className="py-2 px-10 text-white font-bold text-lg bg-[#005BEA] rounded-[10px]">
              سوالات بیشتر
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
}

// export async function getStaticProps() {
//   const preData = await getHomePageData();
//   return { props: { preData } };
// }
