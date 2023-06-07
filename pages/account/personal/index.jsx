import Image from "next/image";
import Link from "next/link";
import React from "react";

const AccountPersonal = () => {
  return (
    <div
      className="container flex mt-9 lg:mx-16 bg-white rounded-xl py-7 px-5"
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
    >
      <div className="border-l-4 border-[#EDEEF2] pl-4 w-[272px] min-w-[272px]">
        <Image
          src="/img/submelk/home2.png"
          width="100"
          height="100"
          className="rounded-full h-[100px] mx-auto mt-16 mb-9"
        />

        <div className="flex items-center justify-center gap-4 border-b border-[#EDEEF2] pb-9 mb-6">
          <div className="text-sm text-[#5D6F7E] font-medium">
            موجودی کیف پول
          </div>
          <div className="flex items-center gap-1">
            <div className="font-semibold text-[#173046]">28,500,000</div>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8943 1.38721C1.62122 1.95353 1.48468 2.47568 1.48468 2.95368C1.48468 3.35893 1.57921 3.66287 1.76826 3.8655C1.96257 4.06812 2.28555 4.16944 2.73719 4.16944H3.41465C3.75075 4.16944 4.00283 4.14086 4.17088 4.08371C4.33893 4.02656 4.45184 3.92784 4.50961 3.78756C4.57263 3.64728 4.60414 3.43946 4.60414 3.1641V0.716988H5.60457V3.1641C5.60457 3.81874 5.42601 4.33569 5.0689 4.71497C4.71705 5.09944 4.16563 5.29168 3.41465 5.29168H2.73719C2.26454 5.29168 1.86017 5.18777 1.52406 4.97994C1.18796 4.77212 0.933258 4.49156 0.759955 4.13826C0.586652 3.78496 0.5 3.3901 0.5 2.95368C0.5 2.63675 0.555142 2.29904 0.665426 1.94054C0.77571 1.58205 0.907 1.25213 1.0593 0.950788L1.8943 1.38721ZM2.73719 0H3.78488V1.01313H2.73719V0Z"
                fill="#173046"
              />
              <path
                d="M2.22686 10.9815C1.67544 10.9815 1.26844 10.8231 1.00586 10.5061C0.748533 10.1892 0.619868 9.76317 0.619868 9.22802V5.77557H1.6203V9.22802C1.6203 9.42545 1.6308 9.56573 1.65181 9.64886C1.67807 9.73199 1.73058 9.78914 1.80936 9.82032C1.89338 9.84629 2.03255 9.85928 2.22686 9.85928H2.51045L2.55771 10.436L2.51045 10.9815H2.22686Z"
                fill="#173046"
              />
              <path
                d="M2.42995 9.85928H2.63476C2.7398 9.85928 2.81857 9.8359 2.87109 9.78914C2.92885 9.73719 2.97087 9.65406 2.99713 9.53976L3.20194 8.7916C3.31747 8.33958 3.51178 7.99408 3.78487 7.75508C4.05795 7.51609 4.38618 7.39659 4.76955 7.39659C5.07414 7.39659 5.3446 7.47972 5.58092 7.64598C5.82249 7.80704 6.01155 8.03304 6.1481 8.324C6.28464 8.60975 6.35291 8.93188 6.35291 9.29037C6.35291 9.7216 6.28201 10.0749 6.14022 10.3503C5.99842 10.6204 5.81987 10.8179 5.60455 10.9426C5.39449 11.0621 5.17392 11.1218 4.94285 11.1218C4.76429 11.1218 4.57523 11.0854 4.37567 11.0127C4.18136 10.9452 3.8899 10.8205 3.50128 10.6386C3.38049 10.7477 3.24658 10.8335 3.09953 10.8958C2.95249 10.9529 2.80282 10.9815 2.65052 10.9815H2.42995V9.85928ZM3.9818 9.69562C4.26539 9.82551 4.47546 9.91384 4.612 9.9606C4.74854 10.0074 4.87195 10.0307 4.98224 10.0307C5.27107 10.0307 5.41549 9.78655 5.41549 9.29816C5.41549 9.03319 5.35773 8.83056 5.24219 8.69028C5.12666 8.54481 4.97698 8.47207 4.79318 8.47207C4.64088 8.47207 4.50696 8.52662 4.39143 8.63573C4.27589 8.74484 4.19187 8.9033 4.13935 9.11112L3.9818 9.69562Z"
                fill="#173046"
              />
              <path
                d="M8.31229 11.8778C8.63789 11.8778 8.88472 11.8492 9.05277 11.792C9.22082 11.7401 9.33636 11.6492 9.39937 11.5193C9.46765 11.3946 9.50703 11.2153 9.51754 10.9815H8.84008C8.34118 10.9815 7.94468 10.8386 7.65059 10.5529C7.36175 10.2619 7.21733 9.85668 7.21733 9.33713C7.21733 8.96824 7.2856 8.64092 7.42214 8.35517C7.56394 8.06941 7.75562 7.8486 7.99719 7.69274C8.24402 7.53167 8.52236 7.45114 8.8322 7.45114C9.1683 7.45114 9.4624 7.52908 9.71447 7.68494C9.9718 7.84081 10.1687 8.06162 10.3053 8.34738C10.4471 8.63313 10.518 8.96305 10.518 9.33713V9.85928H10.9512L11.0142 10.4282L10.9512 10.9815H10.518C10.497 11.5894 10.3079 12.0778 9.9508 12.4467C9.59369 12.8156 9.04752 13 8.31229 13H7.37488V11.8778H8.31229ZM8.17838 9.28258C8.17838 9.49559 8.23089 9.65406 8.33592 9.75797C8.44096 9.85669 8.60901 9.90604 8.84008 9.90604H9.51754V9.31375C9.51754 8.77341 9.28909 8.50324 8.8322 8.50324C8.61689 8.50324 8.45409 8.57598 8.3438 8.72146C8.23352 8.86693 8.17838 9.05397 8.17838 9.28258Z"
                fill="#173046"
              />
              <path
                d="M10.8611 9.85928H11.7355C11.9718 9.85928 12.1398 9.82032 12.2396 9.74238C12.3394 9.65925 12.384 9.54235 12.3735 9.39168C12.3473 9.06956 12.279 8.63833 12.1687 8.09799L13.114 7.86419C13.177 8.13955 13.2348 8.4331 13.2873 8.74484C13.3451 9.05657 13.374 9.30855 13.374 9.50079C13.374 9.76057 13.3162 10.0022 13.2007 10.2256C13.0851 10.449 12.9092 10.6308 12.6729 10.7711C12.4418 10.9114 12.1556 10.9815 11.8142 10.9815H10.8611V9.85928ZM11.0816 6.07172H12.019V6.99913H11.0816V6.07172ZM12.5547 6.07172H13.5V6.99913H12.5547V6.07172Z"
                fill="#173046"
              />
            </svg>
          </div>
        </div>

        <div>
          <ul className="text-[#173046]">
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 py-3 px-7 font-semibold activePage"
              >
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9749 2.52513C13.3417 3.89197 13.3417 6.10804 11.9749 7.47488C10.608 8.84172 8.39197 8.84172 7.02513 7.47488C5.65829 6.10804 5.65829 3.89197 7.02513 2.52513C8.39197 1.15829 10.608 1.15829 11.9749 2.52513"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 16.5V17.5C1.5 18.052 1.948 18.5 2.5 18.5H16.5C17.052 18.5 17.5 18.052 17.5 17.5V16.5C17.5 13.474 13.548 11.508 9.5 11.508C5.452 11.508 1.5 13.474 1.5 16.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                اطلاعات شخصی
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="#"
                className="flex items-center gap-3 py-3 px-7 font-semibold"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50684 14.5H15.5068"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 10.3L12.2 11.5L14.2 9.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.949 20.396L18.959 20.8935C18.6785 21.0345 18.3481 21.0355 18.0667 20.8964L16.4942 20.1188L14.9533 20.8929C14.672 21.0342 14.3406 21.0348 14.0588 20.8945L12.5 20.1185L10.9412 20.8945C10.6594 21.0348 10.328 21.0342 10.0467 20.8929L8.50578 20.1188L6.9333 20.8964C6.65191 21.0355 6.32151 21.0345 6.04102 20.8935L5.05102 20.396C4.71321 20.2263 4.50001 19.8805 4.5 19.5025V4.49752C4.5 4.11947 4.7132 3.77374 5.051 3.604L6.041 3.10648C6.32149 2.96552 6.65189 2.96446 6.93328 3.10361L8.50576 3.8812L10.0467 3.10713C10.328 2.96581 10.6594 2.96521 10.9412 3.10551L12.5 3.88151L14.0588 3.10551C14.3406 2.96521 14.672 2.96581 14.9533 3.10713L16.4942 3.8812L18.0667 3.10361C18.3481 2.96446 18.6785 2.96552 18.959 3.10648L19.949 3.604C20.2868 3.77374 20.5 4.11947 20.5 4.49752V19.5025C20.5 19.8806 20.2868 20.2263 19.949 20.396Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                تفاهم‌نامه
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="#"
                className="flex items-center gap-3 py-3 px-7 font-semibold"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 9.5V6.5C21.5 5.11929 20.3807 4 19 4H6C4.61929 4 3.5 5.11929 3.5 6.5V9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 14.5V17.5C21.5 18.8807 20.3807 20 19 20H15.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 9.5H21.5C22.0523 9.5 22.5 9.94772 22.5 10.5V13.5C22.5 14.0523 22.0523 14.5 21.5 14.5H20C18.6193 14.5 17.5 13.3807 17.5 12V12C17.5 10.6193 18.6193 9.5 20 9.5V9.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 15C5.5 16.1046 6.39543 17 7.5 17C8.60457 17 9.5 16.1046 9.5 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="2.5"
                    y="12"
                    width="10"
                    height="9"
                    rx="2.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                کیف پول
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="#"
                className="flex items-center gap-3 py-3 px-7 font-semibold"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.05796 9.76302L5.77096 8.69602C5.48196 7.62702 6.11696 6.52802 7.18696 6.24302L17.23 3.56702C18.29 3.28502 19.39 3.92002 19.676 4.97902L21.43 11.488C21.718 12.557 21.082 13.656 20.014 13.941L17.9 14.504"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 20.5H15.9C17.005 20.5 17.9 19.605 17.9 18.5V11.763C17.9 10.658 17.005 9.763 15.9 9.763H5.5C4.395 9.763 3.5 10.658 3.5 11.763V18.5C3.5 19.605 4.396 20.5 5.5 20.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 13.84H17.9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                صاب‌های من
              </Link>
            </li>
            <li className="mt-3">
              <Link
                href="#"
                className="flex items-center gap-3 py-3 px-7 font-semibold"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 18L18.5 21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 21V18H18.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 6L6.5 3"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 3V6H6.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 20C13.0376 20 15.5 17.5376 15.5 14.5C15.5 11.4624 13.0376 9 10 9C6.96243 9 4.5 11.4624 4.5 14.5C4.5 17.5376 6.96243 20 10 20Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8888 5.61102C21.0278 7.76252 21.0278 11.2375 18.8888 13.389C18.7182 13.5537 18.5354 13.7052 18.3418 13.842"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8893 5.61101C16.7378 3.47203 13.2628 3.47203 11.1113 5.61101C10.9465 5.78102 10.7934 5.96211 10.6533 6.15301"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5517 12.9492L8.44922 16.0516"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.6 16.2C11.6551 16.1998 11.6997 16.1549 11.6996 16.0998C11.6995 16.0446 11.6548 16 11.5996 16C11.5445 16 11.4997 16.0446 11.4996 16.0998C11.4995 16.1549 11.5441 16.1998 11.5992 16.2H11.6"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.40002 12.8C8.34486 12.8002 8.30029 12.8451 8.30039 12.9002C8.30049 12.9554 8.34523 13 8.40039 13C8.45555 13 8.50029 12.9554 8.50039 12.9002C8.50049 12.8451 8.45592 12.8002 8.40076 12.8H8.40002"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                صاب‌های درحال معامله
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="grow">
        <div className="px-12 pb-5 border-b-4 w-full">
          <div className="text-[#173046] font-bold">اطلاعات شخصی</div>
          <div className="text-[#5D6F7E] font-medium text-xs mt-4">
            اطلاعات شخصی خود را مشاهده و مدیریت کنید.
          </div>
        </div>

        <div className="bg-[#F9F9F9] font-bold text-sm text-[#4B4D4D]">
          اطلاعات شخصی
        </div>
      </div>

      <style jsx global>{`
        .activePage {
          color: white;
          background: #005bea;
          border-radius: 80px;
        }
      `}</style>
    </div>
  );
};

export default AccountPersonal;
