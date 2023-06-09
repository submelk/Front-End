import Image from "next/image";
import Checkbox from "react-custom-checkbox";
import { FileUploader } from "react-drag-drop-files";

import Link from "next/link";
import React from "react";
import AccountMenu from "../../../components/layout/accountMenu";

const AccountPersonal = () => {
  return (
    <div className="container mx-auto ">
      <div
        className=" flex mt-9 mx-3 lg:mx-16 bg-white rounded-xl py-7 lg:px-5"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
      >
        <AccountMenu />
        <div className="w-full lg:w-auto lg:grow -ml-5">
          <div className="px-5 lg:px-12 pb-5 border-b-4 w-full">
            <div className="text-[#173046] font-bold">اطلاعات شخصی</div>
            <div className="text-[#5D6F7E] font-medium text-xs mt-4">
              اطلاعات شخصی خود را مشاهده و مدیریت کنید.
            </div>
          </div>

          <div className="bg-[#F9F9F9] font-bold text-sm text-[#4B4D4D] py-4 pr-9 border-r-[3px] border-[#0547A8]">
            اطلاعات شخصی
          </div>

          <form action="" className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  نام
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  نام خانوادگی
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  کد ملی
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  تاریخ تولد
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  موبایل
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  ایمیل
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24 mt-14 overflow-x-hidden">
              <FileUploader
                multiple={true}
                // handleChange={handleChange}
                name="file"
                // types={fileTypes}
              >
                <div className="w-full border rounded-xl flex items-center justify-center h-[143px] w-full text-xs gap-4">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_476_3388)">
                      <path
                        d="M19.35 10.54C18.67 7.09 15.64 4.5 12 4.5C9.11 4.5 6.6 6.14 5.35 8.54C2.34 8.86 0 11.41 0 14.5C0 17.81 2.69 20.5 6 20.5H19C21.76 20.5 24 18.26 24 15.5C24 12.86 21.95 10.72 19.35 10.54ZM19 18.5H6C3.79 18.5 2 16.71 2 14.5C2 12.45 3.53 10.74 5.56 10.53L6.63 10.42L7.13 9.47C8.08 7.64 9.94 6.5 12 6.5C14.62 6.5 16.88 8.36 17.39 10.93L17.69 12.43L19.22 12.54C20.78 12.64 22 13.95 22 15.5C22 17.15 20.65 18.5 19 18.5ZM8 13.5H10.55V16.5H13.45V13.5H16L12 9.5L8 13.5Z"
                        fill="#636E72"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_476_3388">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <div>تصویر کارت ملی خود را آپلود کنید</div>
                    <div>انتخاب کنید یا در این قسمت راها کنید</div>
                  </div>
                </div>
              </FileUploader>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24 mt-14">
              <div>
                <Checkbox
                  checked={false}
                  icon={
                    <div
                      style={{
                        // display: "flex",
                        backgroundColor: "#005BEA",
                        // alignSelf: "stretch",
                        borderRadius: "2px",
                        padding: "4px",
                      }}
                    >
                      {/* <Icon.FiCheck color="white" size={20} /> */}
                    </div>
                  }
                  borderColor="#DEE6EF"
                  // borderWidth={0}
                  borderRadius={20}
                  style={{
                    overflow: "hidden",
                    backgroundColor: "#DEE6EF",
                    borderRadius: "4px",
                    marginLeft: "10px",
                  }}
                  size={20}
                  label="در خبرنامه صاب‌ملک میخواهم عضو شوم"
                  labelStyle={{ color: "#173046", fontSize: ".9rem" }}
                />
              </div>

              <div className="mt-4">
                <Checkbox
                  checked={false}
                  icon={
                    <div
                      style={{
                        // display: "flex",
                        backgroundColor: "#005BEA",
                        // alignSelf: "stretch",
                        borderRadius: "2px",
                        padding: "4px",
                      }}
                    >
                      {/* <Icon.FiCheck color="white" size={20} /> */}
                    </div>
                  }
                  borderColor="#DEE6EF"
                  // borderWidth={0}
                  borderRadius={20}
                  style={{
                    overflow: "hidden",
                    backgroundColor: "#DEE6EF",
                    borderRadius: "4px",
                    marginLeft: "10px",
                  }}
                  size={20}
                  label="برای مشاوره رایگان با من تماس بگیرید."
                  labelStyle={{ color: "#173046", fontSize: ".9rem" }}
                />
              </div>
            </div>
          </form>

          <div className="bg-[#F9F9F9] font-bold text-sm text-[#4B4D4D] py-4 pr-9 border-r-[3px] border-[#0547A8] mt-14">
            اطلاعات بانکی
          </div>

          <form action="" className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  نام بانک
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  شماره حساب
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  شماره کارت
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-24">
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2 required">
                  شماره شبا
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
            </div>
          </form>

          <div className="flex justify-end px-4 lg:px-24 mt-16 w-full">
            <button className="bg-[#005BEA] rounded-lg px-14 py-4 text-white font-medium text-sm w-full lg:w-auto">
              بروزرسانی
            </button>
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
    </div>
  );
};

export default AccountPersonal;
