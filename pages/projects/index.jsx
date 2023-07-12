import Image from "next/image";
import { useState } from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "react-modal";
import { useQuery } from "@tanstack/react-query";
import { getProjectList } from "../../APIGate/public";
import { numberWithCommas } from "../../utils";
import Link from "next/link";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #FF006E",
    borderRadius: "8px",

    maxWidth: "97%",
    width: "585px",
  },
};

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { data, refetch, isFetching } = useQuery(["getProjectList"], () =>
    getProjectList({ search })
  );

  return (
    <>
      <div
        className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/img/submelk/pattern2.svg)",
          backgroundPosition: "left bottom",
        }}
      ></div>
      <div className="container mx-auto lg:px-16 px-3 pt-14">
        <div className="flex items-center justify-between gap-5">
          <div className="relative grow">
            <input
              type="text"
              className="border border-[#DEE6EF] text-[#5D6F7E] text-xs lg:text-sm rounded-lg w-full p-3 font-medium"
              placeholder="نام پروژه یا موقعیت مکانی پروژه را جستجو کنید"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              onClick={refetch}
              className="absolute left-0 top-0 bottom-0 w-8 lg:w-14 flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 19L15.71 15.71"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => setModalIsOpen(true)}
            className="bg-[#005BEA] text-white font-bold text-sm py-3 px-3 lg:px-8 rounded-lg flex items-center justify-center gap-3"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 10.5L16.707 5.293C16.895 5.105 17 4.851 17 4.586V2C17 1.448 16.552 1 16 1H2C1.448 1 1 1.448 1 2V4.586C1 4.851 1.105 5.106 1.293 5.293L6.5 10.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 10.5V16.749C6.5 17.562 7.264 18.159 8.053 17.962L10.553 17.337C11.109 17.198 11.5 16.698 11.5 16.124V10.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="hidden lg:inline">فیلتر</span>
          </button>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-6 mt-9 mb-14">
          {isFetching ? (
            <div className="min-h-[450px]"></div>
          ) : (
            data?.data.map(
              ({
                id,
                Name,
                City,
                Neighbourhood,
                Progress,
                Meterage,
                Unit,
                Status,
                P_sub,
                ProjectImage,
              }) => (
                <Link href={`/projects/${id}`} key={id}>
                  <button className="w-[289px] h-[485px] bg-white rounded-lg overflow-hidden shadowSlideCard">
                    <div className="relative">
                      <div className="whitespace-nowrap px-3 text-sm py-1 text-[#FF006E] font-medium rounded-lg absolute right-3 top-3 z-10 bg-white border border-[#F4C8C1]">
                        {Status}
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
                        {ProjectImage?.map((item) => (
                          <SwiperSlide>
                            <div className="h-[227px] w-[289px] relative">
                              <Image src={item} fill />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="text-[#173046] p-4 text-right ">
                      <div className="font-bold">{Name}</div>
                      <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                        <Image
                          src="/img/submelk/location.svg"
                          width="22"
                          height="22"
                        />
                        <div>
                          {City}، {Neighbourhood}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs font-medium border-b pb-5 mb-6 mt-8">
                        <div>پیشرفت پروژه</div>
                        <div className="w-[153px]">
                          <ProgressBar
                            height={6}
                            bgColor="#005BEA"
                            baseBgColor="#EAEEF3"
                            labelClassName="hidden"
                            completed={Progress}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between font-medium">
                        <div className="">
                          <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                            {Meterage}
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
                            {Unit}
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
                          <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4 text-sm">
                            {numberWithCommas(P_sub)}
                          </div>
                          <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                            <Image
                              src="/img/submelk/sub.svg"
                              width="15"
                              height="15"
                            />
                            صاب
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </Link>
              )
            )
          )}
        </div>

        {/* <div className="flex items-center justify-center lg:gap-5 text-[#173046] text-sm">
          <button className="border border-[#005BEA] w-[95px] h-[33px] flex items-center justify-center text-xs rounded-lg">
            اولین صفحه
          </button>
          <button className="hidden lg:flex border border-[#005BEA] w-[33px] h-[33px] items-center justify-center text-xs rounded-lg">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590001 1.42L5.17 6L0.59 10.59L2 12L8 6L2 -5.24537e-07L0.590001 1.42Z"
                fill="#173046"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <button className="w-[33px] h-[33px] flex items-center justify-center rounded-lg">
              1
            </button>
            <button className="w-[33px] h-[33px] flex items-center justify-center rounded-lg">
              2
            </button>
            <button className="w-[33px] h-[33px] flex items-center justify-center rounded-lg bg-[#005BEA] text-white">
              3
            </button>
            <button className="w-[33px] h-[33px] flex items-center justify-center rounded-lg">
              4
            </button>
            <button className="w-[33px] h-[33px] flex items-center justify-center rounded-lg">
              5
            </button>
          </div>
          <button className="hidden lg:flex border border-[#005BEA] w-[33px] h-[33px] items-center justify-center text-xs rounded-lg">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M0.590001 1.42L5.17 6L0.59 10.59L2 12L8 6L2 -5.24537e-07L0.590001 1.42Z"
                fill="#173046"
              />
            </svg>
          </button>
          <button className="border border-[#005BEA] w-[95px] h-[33px] flex items-center justify-center text-xs rounded-lg">
            آخرین صفحه
          </button>
        </div> */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
        // className="w-[585px] m-auto"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className="flex gap-6">
          <button onClick={() => setModalIsOpen(false)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.23077 16L0 14.7692L6.76923 8L0 1.23077L1.23077 0L8 6.76923L14.7692 0L16 1.23077L9.23077 8L16 14.7692L14.7692 16L8 9.23077L1.23077 16Z"
                fill="#5D6F7E"
              />
            </svg>
          </button>
          <span className="text-[#173046] text-sm font-medium">فیلترگذاری</span>
        </div>

        <form className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                متراژ
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                واحد
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                تعداد صاب
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                وضعیت پروژه
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                میزان پیشرفت پروژه
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                محله پروژه
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>

          <div className="w-full flex items-center justify-center gap-6 mt-12 text-sm font-medium">
            <button className="text-[#005BEA] border border-[#005BEA] px-5 py-4 rounded-lg">
              حذف فیلتر
            </button>
            <button className="bg-[#005BEA] text-white px-14 py-4 rounded-lg">
              اعمال فیلتر
            </button>
          </div>
        </form>
      </Modal>
      <style jsx global>
        {`
          body {
            background-color: #f7f8fc;
          }
        `}
      </style>
    </>
  );
};

export default Projects;
