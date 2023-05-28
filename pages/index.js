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
    <div className="container mx-auto">
      <Head>
        {/* <title>Prestige Motors | پرستیژ موتورز</title> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Swiper
          pagination={{
            clickable: true,
          }}
          direction={"vertical"}
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              src="/img/stamp/baner-1.png"
              fill
              // width="100%"
              // height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/baner-2.png"
              fill
              // width="100%"
              // height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/baner-3.png"
              fill
              // width="100%"
              // height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/stamp/baner-4.png"
              fill
              // width="100%"
              // height="100%"
            />
          </SwiperSlide>
        </Swiper>

        <section>
          <div className="mt-32 mb-14 text-center text-[#424750] font-semibold text-3xl">
            Dienstleistungen und Vorteile
          </div>

          <div className="text-center text-2xl text-[#424750]">
            Wir sind stets bestrebt, unsere Kunden zufrieden zu stellen,
            <br />
            indem wir die folgenden Dienstleistungen anbieten.
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-evenly mt-24 mb-16 bg-transparent">
          <div className="cardItem">
            <Image src="/img/stamp/sample.png" width="85" height="85" />
            <div className="mt-11 -mb-9">
              Schnelle und einfache Bestellregistrierung
            </div>
          </div>
          <div className="cardItem">
            <Image src="/img/stamp/sample2.png" width="85" height="85" />
            <div className="mt-11 -mb-9">
              Professionelle Design-Dienstleistungen{" "}
            </div>
          </div>
          <div className="cardItem">
            <Image src="/img/stamp/sample3.png" width="85" height="85" />
            <div className="mt-11 -mb-9">Hohe Produktvielfalt </div>
          </div>
          <div className="cardItem">
            <Image src="/img/stamp/sample4.png" width="85" height="85" />
            <div className="mt-11 -mb-9">
              Schnelligkeit, Qualität und Garantie im Druck{" "}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-around gap-3 my-16 lg:mt-28 lg:mb-40 text-[#424750] px-6">
            <hr className="grow hidden lg:block" />
            <div className="text-3xl font-semibold text-center">
              Unsere
              <span className="text-[#50B96E]"> Produkte</span>
            </div>
            <hr className="grow hidden lg:block" />
          </div>

          <div className="flex flex-wrap gap-6 justify-around px-16">
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
            <button className="productCard">
              <div className="productCard__inner">
                <div className="absolute right-0 flex items-center justify-center top-[75px] text-white text-[6.8px] bg-[#0E8D7A] w-[32px] h-[32px]">
                  Stempel wien
                  <svg
                    className="absolute -left-[20px] -top-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="34"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M0.113281 15.3559L19.3679 32.2756L19.3679 0.643066L0.113281 15.3559Z"
                      fill="#0E8D7A"
                    />
                  </svg>
                </div>

                <div className="relative h-full mx-auto max-w-[50%]">
                  <Image
                    src="/img/stamp/stamps.png"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="mt-2 text-xl w-full">Text / logo stamp</div>
              <p className="px-2 h-[70px] max-w-full truncate whites pt-3 transition">
                Ein Firmenstempel mit Text und Logo oder ein Adressstempel für
                privaten Gerbrauch. Mit unserem Online-Designer gestalten Sie
                Ihren individuellen Stempel in wenigen Schritten.
              </p>
              <div className="price items-center w-full justify-between px-5 my-2 hidden">
                <div className="text-[#81858B] text-lg">start from</div>
                <div className="text-[#323232]">
                  <span className="text-[#E25050] mr-1">32</span>
                  <span>€‎</span>
                </div>
              </div>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-around gap-3 mt-28 mb-40 text-[#424750] px-6">
            <hr className="grow" />
            <div className="text-2xl font-semibold text-center">
              Zahlungsarten
            </div>
            <hr className="grow" />
          </div>

          <div className="hidden lg:flex flex-wrap items-center justify-around gap-6">
            <Image src="/img/stamp/paypal.png" width="157" height="44" />
            <Image src="/img/stamp/auf.png" width="216" height="64" />
            <Image src="/img/stamp/bezahlung.png" width="157" height="44" />
            <Image src="/img/stamp/visa.png" width="157" height="44" />
            <Image src="/img/stamp/sofort.png" width="157" height="44" />
          </div>
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-11">
            <Image src="/img/stamp/paypal.png" width="104" height="44" />
            <Image src="/img/stamp/auf.png" width="143" height="64" />
            <Image src="/img/stamp/bezahlung.png" width="100" height="44" />
            <Image src="/img/stamp/visa.png" width="150" height="44" />
            <Image src="/img/stamp/sofort.png" width="75" height="44" />
          </div>
        </section>
      </main>
      <style jsx global>{`
        .swiper {
          height: 440px;
          max-width: 1265px;
          margin: auto;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          transition: 0.3s;
          background-color: white;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          height: 30px;
          border-radius: 5px;
        }

        @media only screen and (max-width: 600px) {
          .swiper {
            height: 140px;
            max-width: 100%;
            margin: auto;
          }
          .swiper-pagination-bullet-active {
            width: 30px;
            height: 8px;
            border-radius: 5px;
          }
          .swiper-pagination {
            bottom: -10px;
            right: 0 !important;
            left: 0 !important;
            transform-origin: bottom;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            position: absolute;
            top: unset !important;
          }
        }
      `}</style>

      <style jsx>{`
        .productCard {
          display: flex;
          flex-direction: column;
          width: 263px;
          height: 279px;

          border: 1.64042px solid #e5e7eb;
          border-radius: 0px 0px 16.4042px 16.4042px;

          transition: 0.2s;
        }

        .productCard__inner {
          position: relative;
          height: 183px;
          width: 100%;

          background: linear-gradient(to top, #d9d9d9 50%, #126257 50%);
        }

        .productCard:hover .price {
          display: flex !important;
        }
        .productCard:hover {
          height: max-content;
        }
        .productCard:hover p {
          overflow: visible !important;
          white-space: normal !important;

          height: max-content !important;
        }

        .cardItem {
          border: 1px solid #e0e0e2;
          border-radius: 20px;

          width: 248px;
          height: 265px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          flex-direction: column;
        }

        @media only screen and (max-width: 600px) {
          .cardItem {
            width: 172px !important;
            height: 184px !important;
            margin-bottom: 16px !important;
          }
          .cardItem .-mb-9 {
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

// export async function getStaticProps() {
//   const preData = await getHomePageData();
//   return { props: { preData } };
// }
