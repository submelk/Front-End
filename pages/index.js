import Head from "next/head";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

// import PorscheImg from "/public/img/brands/Porsche.svg";
// import BenzImg from "/public/img/brands/Benz.svg";
// import MazImg from "/public/img/brands/Maz.svg";
// import VolvoImg from "/public/img/brands/Volvo.svg";
// import LexusImg from "/public/img/brands/Lexus.svg";
// import BMWImg from "/public/img/brands/BMW.svg";
import { useQuery } from "@tanstack/react-query";
import { getHome, getHomePageData } from "../APIGate/public";
// import { baseURL } from "../config";

// const useMobileDetect = dynamic(() => import("../components/isMobile"), {
//   ssr: false,
// });

// import { isMobile } from "is-mobile";
// import { useMemo } from "react";
// import dynamic from "next/dynamic";
// import useMobileDetect from "../components/isMobile";
import { useEffect, useRef, useState } from "react";
import HomePageVideo from "../components/submelk/homePage/video";
import HomePageProjectList from "../components/submelk/homePage/homePageProjectList";
import CustomersSlider from "../components/submelk/homePage/CustomersSlider/CustomersSlider";
import HomePageFAQ from "../components/submelk/homePage/HomePageFAQ/HomePageFAQ";
import HomePageVideo2 from "../components/submelk/homePage/video2";
import HomePageMazaya from "../components/submelk/homePage/homePageMazaya/HomePageMazaya";
import useOnScreen from "../hooks/useOnScreen";
import AnimatedBg from "../components/animatedBg/AnimatedBg";
import Link from "next/link";
// import CarsSlider from "../components/carsSlider";

export default function Home(
  {
    // preData
  }
) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [form2, setForm2] = useState({ name: "", phone: "" });

  const { data } = useQuery(["getHome"], getHome, {
    // initialData: preData,
  });
  // const isMobileValue = isMobile;

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/img/submelk/pattern2.svg)",
          backgroundPosition: "left bottom",
        }}
      ></div>
      {/* <div
        className="h-[193px] lg:h-[630px] bg-[url(/img/submelk/homeTop.png)] bg-no-repeat w-full relative"
        style={{ backgroundSize: "100% 100%" }}
      >
        <button className="hidden lg:block bg-[#005BEA] rounded-[10px] font-bold text-lg text-white px-9 py-4 absolute lg:bottom-24 left-28">
          مشاوره رایگان
        </button>
      </div> */}

      <Swiper
        style={
          {
            // "--swiper-navigation-color": "#000",
            // "--swiper-pagination-color": "#000",
          }
        }
        spaceBetween={25}
        // navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mySwiper999 min-h-[630px]"
        simulateTouch={false}
        slidesPerView="auto"
        centeredSlides
        breakpoints={{
          740: {
            centeredSlides: false,
          },
        }}
      >
        {data?.slide?.map(({ id, image }) => (
          <SwiperSlide key={id} className="pb-4">
            <div
              className={`h-[193px] lg:h-[630px] bg-no-repeat w-full relative`}
              style={{
                backgroundSize: "100% 100%",
                backgroundImage: `url(${image})`,
              }}
            >
              <button className="hidden lg:block bg-[#005BEA] rounded-[10px] font-bold text-lg text-white px-9 py-4 absolute lg:bottom-24 left-28">
                مشاوره رایگان
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
            <p className="text-justify lg:leading-10 leading-7">
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

      <div className="">
        <div className="font-bold text-[#005BEA] text-2xl text-center mt-12 mb-8">
          پروژه های صاب ملک
        </div>
        <div className="container mx-auto lg:px-9">
          <HomePageProjectList data={data?.project} />
        </div>
      </div>

      <div>
        <div className="font-bold text-[#005BEA] text-2xl text-center mb-8 mt-28">
          از سرمایه گذاری تا سود
        </div>
        {/* <style>.cls-1{fill:none;}</style> */}
        <div className="overflow-x-hidden relative -z-10">
          <div className="max-w-full w-[340px] lg:w-[918px] mx-auto mt-20 relative">
            <div className="font-semibold lg:font-bold text-sm lg:text-2xl text-black pt-1 lg:pt-7 absolute right-0 left-0 top-0">
              <div className="pr-9 lg:pr-24" data-aos="fade-right">
                شناسایی‌پروژه‌های
                <div>ساختمانی‌کم‌ریسک‌وپرسود</div>
              </div>
              <div
                className="pl-8 lg:pl-14 float-left pt-2 lg:pt-16"
                data-aos="fade-left"
              >
                ارزش‌گذاری‌پروژه‌هادرهرمرحله
                <div>برای‌قیمت‌گذاری‌عادلانه</div>
              </div>
              <div
                className="pr-9 lg:pr-24 clear-both pt-2 lg:pt-16"
                data-aos="fade-right"
              >
                امکان‌مشارکت‌باهرمیزان‌سرمایه
                <div>ازطریق‌خرید‌صاب‌پروژه‌ها</div>
              </div>
              <div
                className="pl-8 lg:pl-14 float-left pt-1 lg:pt-16"
                data-aos="fade-left"
              >
                مشاوره‌رایگان‌اقتصادی‌وحقوقی
                <div>باسرمایه‌گذاران</div>
              </div>
              <div
                className="pr-9 lg:pr-24 clear-both pt-2 lg:pt-16"
                data-aos="fade-right"
              >
                نظارت‌مستمربرفرآیندساخت‌و
                <div>گزارش‌دهی‌پیشرفت‌پروژه‌ها</div>
              </div>
              <div
                className="pl-0 lg:pl-14 float-left pt-2 lg:pt-16 text-xs lg:text-2xl"
                data-aos="fade-left"
              >
                امکان‌خریدوفروش‌صاب‌های‌سرمایه‌گذاران‌به
                <div>بالاترین‌قیمت‌دربازارثانویه‌پلتفرم‌صاب‌ملک</div>
              </div>
              <div
                className="pr-9 lg:pr-24 clear-both pt-3 lg:pt-16"
                data-aos="fade-right"
              >
                تسهیل‌در‌فروش‌واحدها
                <div>باکارآمدترین‌ابزارها</div>
              </div>
              <div
                className="pl-4 lg:pl-14 float-left pt-2 lg:pt-16"
                data-aos="fade-left"
              >
                تسهیم‌کامل‌سودمیان‌صاب
                <div>داران‌باتوجه‌هزینه‌تمام‌شده</div>
              </div>
            </div>
            <AnimatedBg />
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
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              value={form?.name}
            />
            <input
              type="text"
              className="w-[150px] grow bg-white rounded-lg border border-[#DEE6EF] py-4 px-3 text-[#5D6F7E] font-medium"
              placeholder="شماره موبایل"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={form?.phone}
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

        <CustomersSlider data={data?.viewpoint} />
      </div>

      <div>
        <div className="text-center font-bold text-2xl text-[#005BEA] mb-14 mt-9">
          پرسش‌های متداول
        </div>

        <div className="container mx-auto px-3 lg:px-32">
          <HomePageFAQ faq={data?.faq} />

          <div className="text-center mt-14">
            <Link href="/faq">
              <button className="py-2 px-10 text-white font-bold text-lg bg-[#005BEA] rounded-[10px]">
                سوالات بیشتر
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-color: #f7f7f9;
        }

        .mySwiper999 .swiper-slide.pb-4 {
          padding-bottom: 0px !important;
        }
        .mySwiper999 .swiper-slide {
          width: 100%;
        }
      `}</style>
    </>
  );
}

// export async function getStaticProps() {
//   const preData = await getHomePageData();
//   return { props: { preData } };
// }
