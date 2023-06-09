import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectId = () => {
  return (
    <div className="container mx-auto px-3 pt-14">
      <section className="hidden lg:flex items-stretch gap-[6px] rounded-[14px] overflow-hidden">
        <div className="w-1/2">
          <div className="relative w-full h-[375px]">
            <Image
              src="/img/submelk/homeMain.png"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="w-1/2 flex h-full gap-[6px]">
          <div className="w-1/2 flex flex-col justify-between h-full gap-[6px]">
            <div className="relative w-full h-[177px]">
              <Image
                src="/img/submelk/homeMain1.png"
                className="object-cover"
                fill
              />
            </div>
            <div className="relative w-full h-[192px]">
              <Image
                src="/img/submelk/homeMain2.png"
                className="object-cover"
                fill
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between h-full gap-[6px]">
            <div className="relative w-full h-[177px]">
              <Image
                src="/img/submelk/homeMain3.png"
                className="object-cover"
                fill
              />
            </div>
            <div className="relative w-full h-[192px]">
              <Image
                src="/img/submelk/homeMain4.png"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden -mx-3">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={25}
          // thumbs={{ swiper: thumbsSwiper }}
          modules={[Pagination]}
          className="mySwiper222"
          slidesPerView="auto"
          centeredSlides
          pagination
          // loop
          // loopedSlides={2}
        >
          <SwiperSlide>
            <div className="h-[227px] w-[289px] relative">
              <Image
                src="/img/submelk/home2.png"
                className="object-cover"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[227px] w-[289px] relative">
              <Image
                src="/img/submelk/home2.png"
                className="object-cover"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[227px] w-[289px] relative">
              <Image
                src="/img/submelk/home2.png"
                className="object-cover"
                fill
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="flex items-start justify-between gap-6">
        <div className="w-full lg:w-auto lg:grow">
          <div
            className="rounded-[10px] mt-4 p-8 text-[#173046]"
            style={{ "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="flex items-center justify-between border-b-4 pb-5 border-b-[#F7F8FC] -mx-8 lg:px-8 px-4">
              <div>
                <div className="font-bold text-[#173046]">
                  پروژه ساختمانی الماس یزدانشاه
                </div>
                <div className="text-sm font-medium gap-4 flex items-center mt-4">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.69971 9.20792V9.05025C4.69971 5.57058 7.52029 2.75 11 2.75V2.75C14.4796 2.75 17.3002 5.57058 17.3002 9.05025V9.20792C17.3002 12.3805 13.2834 17.1563 11.6645 18.953C11.308 19.349 10.692 19.349 10.3354 18.953C8.71654 17.1563 4.69971 12.3805 4.69971 9.20792Z"
                      stroke="#5D6F7E"
                      stroke-width="1.4468"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16663 9.12541C9.16663 10.1383 9.98704 10.9587 11 10.9587V10.9587C12.0129 10.9587 12.8333 10.1383 12.8333 9.12541V9.0915C12.8333 8.07858 12.0129 7.25816 11 7.25816V7.25816C9.98704 7.25816 9.16663 8.07858 9.16663 9.0915"
                      stroke="#5D6F7E"
                      stroke-width="1.4468"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  تهران، بلوار میرداماد
                </div>
              </div>
              <div className="text-center">
                <Image
                  src="/img/submelk/homeMain.png"
                  width="70"
                  height="70"
                  className="rounded-[20px] mx-auto mb-3 border-[#FF006E] border h-[70px] p-[2px]"
                />
                <div className="flex items-center gap-2 text-sm font-medium">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 8.25C6.35831 8.25 5.01421 6.90651 5.01421 5.26417H3.51421C3.51421 7.73516 5.5301 9.75 8.00004 9.75V8.25ZM5.01421 5.26417C5.01421 3.61444 6.36565 2.25 8.00004 2.25V0.75C5.52276 0.75 3.51421 2.80056 3.51421 5.26417H5.01421ZM8.00004 2.25C9.64177 2.25 10.9859 3.59349 10.9859 5.23583H12.4859C12.4859 2.76484 10.47 0.75 8.00004 0.75V2.25ZM10.9859 5.23583C10.9859 6.88556 9.63443 8.25 8.00004 8.25V9.75C10.4773 9.75 12.4859 7.69944 12.4859 5.23583H10.9859ZM13.8334 15.75H2.16671V17.25H13.8334V15.75ZM2.16671 15.75C2.14612 15.75 2.12587 15.7423 2.1085 15.7249C2.09112 15.7075 2.08337 15.6873 2.08337 15.6667H0.583374C0.583374 16.5392 1.29416 17.25 2.16671 17.25V15.75ZM2.08337 15.6667V14.8333H0.583374V15.6667H2.08337ZM2.08337 14.8333C2.08337 13.4142 3.24759 12.25 4.66671 12.25V10.75C2.41916 10.75 0.583374 12.5858 0.583374 14.8333H2.08337ZM4.66671 12.25H11.3334V10.75H4.66671V12.25ZM11.3334 12.25C12.7525 12.25 13.9167 13.4142 13.9167 14.8333H15.4167C15.4167 12.5858 13.5809 10.75 11.3334 10.75V12.25ZM13.9167 14.8333V15.6667H15.4167V14.8333H13.9167ZM13.9167 15.6667C13.9167 15.6873 13.909 15.7075 13.8916 15.7249C13.8742 15.7423 13.854 15.75 13.8334 15.75V17.25C14.7059 17.25 15.4167 16.5392 15.4167 15.6667H13.9167Z"
                      fill="#5D6F7E"
                    />
                  </svg>
                  مهندس گنجی
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-8 -mx-9 lg:mx-0">
              <div className="w-full lg:w-1/3 flex items-center justify-between font-medium px-9 lg:px-0">
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
              <div className="w-full lg:w-1/2 font-medium border-b-4 lg:border-0 pb-7 mb-7 lg:mb-0 lg:pb-0 border-[#F7F8FC] px-5 lg:px-0 text-xs">
                <div className="flex items-center justify-between lg:justify-end gap-6 mb-4">
                  <div>پیشرفت پروژه</div>
                  <ProgressBar
                    completed={84}
                    maxCompleted={100}
                    width={200}
                    height={8}
                    labelClassName="hidden"
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                  />
                </div>
                <div className="flex items-center justify-between lg:justify-end gap-6">
                  <div>تامین مالی</div>
                  <ProgressBar
                    completed={84}
                    maxCompleted={100}
                    width={200}
                    height={8}
                    labelClassName="hidden"
                    bgColor="#005BEA"
                    baseBgColor="#EAEEF3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-6 bg-white rounded-lg mx-2 lg:hidden p-2"
            style={{ "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className=" mb-6 border-[#DEE6EF] -mx-6 px-6">
              <div>
                <input
                  type="text"
                  className="text-sm border border-[#E1E1E1] rounded-lg w-full p-3 text-center mt-5"
                  placeholder="شماره تماس خود را وارد کنید"
                />
              </div>
              <div>
                <button className="text-[#005BEA] border-[#005BEA] rounded-lg py-3 border text-center w-full mt-4">
                  نیاز به مشاوره دارم
                </button>
              </div>
            </div>
          </div>

          <div
            className="text-[#173046] mt-6 p-8"
            style={{ "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="border-b-2 border-b-[#F7F8FC] pb-9 mb-12 -mx-9 px-9">
              <div className="font-bold mb-6">مشخصات فنی پروژه</div>
              <p className="text-sm leading-10 font-medium text-justify">
                ساختمانهای موجود و قدیمی که در محدوده عملیاتی پروژه و در محل
                اجرا و استقرار بناهای جدید بوده و به منظور انجام کار، تخریب آنها
                ضروری است، باید با نظر کارفرما طبق دستورات دستگاه نظارت
                اندازهگیری، صورتمجلس و تخریب شوند. این موارد باید در مشخصات فنی
                خصوصی ذکر گردند. قبل از شروع به تخریب ساختمانها باید مسائل ایمنی
                و اصول فنی در مورد قطع و کنترل انشعابات خطوط آب، برق، تلفن و ...
                با هماهنگی سازمانهای مسئول مراعات گردد. در صورت لزوم باید مصالح
                حاصل از تخریب مطابق نظر دستگاه نظارت دستهبندی و در محلهای مناسب
                انبار شوند.
              </p>
              <div className="flex items-center flex-wrap mt-8 gap-4 font-medium text-sm">
                {[...Array(9)].map((item, indx) => (
                  <div key={indx} className="bg-[#F4F4F4] rounded-lg px-3 py-2">
                    اسکلت بتنی
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold mb-6">اطلاعات فنی پروژه</div>
              <div className="flex items-center flex-wrap mt-8 gap-4 font-medium text-sm">
                {[...Array(9)].map((item, indx) => (
                  <div
                    key={indx}
                    className="bg-[#F4F4F4] rounded-lg px-3 py-2 flex gap-2"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 12.1113L9.5177 10.6299"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.4823 10.6299L11 12.1113"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 7.66528V12.1113"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.3347 12.8525V12.8525C14.3347 13.6711 13.6711 14.3348 12.8524 14.3348H9.14757C8.32892 14.3348 7.66528 13.6711 7.66528 12.8525V12.8525"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="11.0001"
                        cy="11"
                        r="7.50312"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    اسکلت بتنی
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="text-[#173046] mt-6 p-3 lg:p-8"
            style={{ "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="">
              <div className="font-bold mb-6">گزارشات دوره ای</div>
              <div className="border-b-2 border-b-[#F7F8FC] flex items-center gap-14 font-bold -mx-9 px-9 pb-3 mt-9 text-[#5D6F7E]">
                <div className="tabActive">اسفند ۱۴۰۱</div>
                <div>بهمن ۱۴۰۱</div>
                <div>دی ۱۴۰۱</div>
              </div>

              <div className="py-8">
                <div>
                  <div
                    className="font-bold p-4 bg-[#EAEAEA]"
                    style={{ borderRadius: "8px 8px 0px 0px" }}
                  >
                    خرید زمین پروژه الماس یزدانشاه لاهیجان
                  </div>

                  <div
                    className="bg-[#F4F4F4] text-[#5D6F7E] text-sm"
                    style={{ borderRadius: "0px 0px 8px 8px" }}
                  >
                    <ul className="list-disc mr-9 leading-7 py-5">
                      <li>زمین خریداری شد</li>
                      <li>بتن خریداری شد</li>
                      <li>سفال به میزان کافی تهیه گردید</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  spaceBetween={30}
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
                    <Image
                      src="/img/submelk/homeMain.png"
                      width="219"
                      height="138"
                      className="rounded-lg h-[138px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-4">
                    <Image
                      src="/img/submelk/homeMain.png"
                      width="219"
                      height="138"
                      className="rounded-lg h-[138px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-4">
                    <Image
                      src="/img/submelk/homeMain.png"
                      width="219"
                      height="138"
                      className="rounded-lg h-[138px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-4">
                    <Image
                      src="/img/submelk/homeMain.png"
                      width="219"
                      height="138"
                      className="rounded-lg h-[138px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-4">
                    <Image
                      src="/img/submelk/homeMain.png"
                      width="219"
                      height="138"
                      className="rounded-lg h-[138px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="pb-4">
                    <Image
                      src="/img/submelk/homeMain.png"
                      width="219"
                      height="138"
                      className="rounded-lg h-[138px] object-cover"
                    />
                  </SwiperSlide>
                  <div className="swiperLeft hidden lg:block"></div>
                </Swiper>

                <div className="my-8 font-bold text-sm">گزارش کامل دی ۱۴۰۱</div>

                <div className="flex items-center flex-wrap text-xs lg:text-base gap-2 lg:gap-7 -mx-1">
                  <div className="bg-[#E6EDF6] rounded-lg gap-1 lg:gap-3 flex py-1 px-3 lg:py-2 lg:px-4">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8087 9.43502C17.1928 9.43502 18.314 10.5563 18.314 11.9404V11.9404C18.314 13.3246 17.1928 14.4458 15.8087 14.4458H9.91718C8.53303 14.4458 7.4118 13.3246 7.4118 11.9404V11.9404C7.4118 10.5563 8.53303 9.43502 9.91718 9.43502L10.7979 9.43502"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.35858 11.9409C3.97443 11.9409 2.8532 10.8197 2.8532 9.43552V9.43552C2.8532 8.05137 3.97443 6.93014 5.35858 6.93014H11.2501C12.6342 6.93014 13.7554 8.05137 13.7554 9.43552V9.43552C13.7554 10.8197 12.6342 11.9409 11.2501 11.9409L10.3334 11.9403"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    وبلاگ
                  </div>
                  <div className="bg-[#E6EDF6] rounded-lg gap-1 lg:gap-3 flex py-1 px-3 lg:py-2 lg:px-4">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8087 9.43502C17.1928 9.43502 18.314 10.5563 18.314 11.9404V11.9404C18.314 13.3246 17.1928 14.4458 15.8087 14.4458H9.91718C8.53303 14.4458 7.4118 13.3246 7.4118 11.9404V11.9404C7.4118 10.5563 8.53303 9.43502 9.91718 9.43502L10.7979 9.43502"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.35858 11.9409C3.97443 11.9409 2.8532 10.8197 2.8532 9.43552V9.43552C2.8532 8.05137 3.97443 6.93014 5.35858 6.93014H11.2501C12.6342 6.93014 13.7554 8.05137 13.7554 9.43552V9.43552C13.7554 10.8197 12.6342 11.9409 11.2501 11.9409L10.3334 11.9403"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    وبلاگ
                  </div>
                  <div className="bg-[#E6EDF6] rounded-lg gap-1 lg:gap-3 flex py-1 px-3 lg:py-2 lg:px-4">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8087 9.43502C17.1928 9.43502 18.314 10.5563 18.314 11.9404V11.9404C18.314 13.3246 17.1928 14.4458 15.8087 14.4458H9.91718C8.53303 14.4458 7.4118 13.3246 7.4118 11.9404V11.9404C7.4118 10.5563 8.53303 9.43502 9.91718 9.43502L10.7979 9.43502"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.35858 11.9409C3.97443 11.9409 2.8532 10.8197 2.8532 9.43552V9.43552C2.8532 8.05137 3.97443 6.93014 5.35858 6.93014H11.2501C12.6342 6.93014 13.7554 8.05137 13.7554 9.43552V9.43552C13.7554 10.8197 12.6342 11.9409 11.2501 11.9409L10.3334 11.9403"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    وبلاگ
                  </div>
                  <div className="bg-[#E6EDF6] rounded-lg gap-1 lg:gap-3 flex py-1 px-3 lg:py-2 lg:px-4">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8087 9.43502C17.1928 9.43502 18.314 10.5563 18.314 11.9404V11.9404C18.314 13.3246 17.1928 14.4458 15.8087 14.4458H9.91718C8.53303 14.4458 7.4118 13.3246 7.4118 11.9404V11.9404C7.4118 10.5563 8.53303 9.43502 9.91718 9.43502L10.7979 9.43502"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.35858 11.9409C3.97443 11.9409 2.8532 10.8197 2.8532 9.43552V9.43552C2.8532 8.05137 3.97443 6.93014 5.35858 6.93014H11.2501C12.6342 6.93014 13.7554 8.05137 13.7554 9.43552V9.43552C13.7554 10.8197 12.6342 11.9409 11.2501 11.9409L10.3334 11.9403"
                        stroke="#005BEA"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    وبلاگ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block w-[287px] min-w-[287px] bg-white p-6 mt-4 rounded-lg sticky top-24 left-0"
          style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
        >
          <div className="font-bold text-[#173046]">ثبت پیشنهاد</div>
          <div className="font-medium my-6">پروژه ساختمانی الماس یزدانشاه</div>
          <div className="flex items-center justify-between border-b-2 border-b-[#DEE6EF] pb-7 -mx-6 px-6">
            <div className="text-[#5D6F7E] text-xs">وضعیت پروژه</div>
            <div className="text-[#005BEA] text-sm border rounded-lg border-[#005BEA] py-1 px-3">
              به زودی
            </div>
          </div>

          <div className="border-b-2 pb-6 mb-6 border-[#DEE6EF] -mx-6 px-6">
            <div>
              <input
                type="text"
                className="text-sm border border-[#E1E1E1] rounded-lg w-full p-3 text-center mt-5"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
            <div>
              <button className="text-[#005BEA] border-[#005BEA] rounded-lg py-3 border text-center w-full mt-4">
                نیاز به مشاوره دارم
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="text-white bg-[#005BEA] rounded-lg w-[112px] h-[48px]">
              خرید
            </button>
            <button className="text-white bg-[#A80505] rounded-lg w-[112px] h-[48px]">
              فروش
            </button>
          </div>
        </div>
      </section>
      <style jsx>{`
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
        
      `}</style>

      <style jsx global>{`
        .swiper-slide {
          width: auto;
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
      `}</style>
    </div>
  );
};

export default ProjectId;
