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
        className="h-[630px] bg-[url(/img/submelk/homeTop.png)] bg-no-repeat w-full relative"
        style={{ backgroundSize: "100% 100%" }}
      >
        <button className="bg-[#005BEA] rounded-[10px] font-bold text-lg text-white px-9 py-4 absolute bottom-24 left-28">
          مشاوره رایگان
        </button>
      </div>
      <div className="bg-[#005BEA]">
        <div className="container text-white mx-auto flex items-stretch justify-between py-14 gap-14">
          <div className="w-1/2">
            <h2 className="font-bold text-2xl mb-4">صاب‌ملک چیست؟</h2>
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
          <div className="w-1/2 relative">
            <div className="bg-white rounded-[10px] h-[345px] w-full">
              <HomePageVideo />
            </div>
          </div>
        </div>
      </div>

      <div>
        <HomePageProjectList />
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const preData = await getHomePageData();
//   return { props: { preData } };
// }
