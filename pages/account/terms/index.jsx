import Image from "next/image";
import Checkbox from "react-custom-checkbox";
import { FileUploader } from "react-drag-drop-files";

import Link from "next/link";
import React from "react";
import AccountMenu from "../../../components/layout/accountMenu";

const AccountTerms = () => {
  return (
    <div className="container mx-auto ">
      <div
        className=" flex mt-9 mx-3 lg:mx-16 bg-white rounded-xl py-7 lg:px-5"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
      >
        <AccountMenu />
        <div className="w-full lg:w-auto lg:grow -ml-5">
          <div className="px-5 lg:px-12 pb-5 border-b-4 w-full">
            <div className="text-[#173046] font-bold">تفاهم‌نامه</div>
            <div className="text-[#5D6F7E] font-medium text-xs mt-4">
              تفاهم نامه را بین خود و صاب‌ملک مشاهده و مدیریت کنید.
            </div>
          </div>

          <div className="px-5 lg:px-12 text-justify">
            <h2 className="text-[#173046] font-bold mb-5 mt-9">
               ماده ۱) طرفین قرارداد
            </h2>
            <p className="text-sm leading-10">
               1-1 شرکت «جمع سپاری املاک و ساخت صاب» به نمایندگی آقایان حسین
              جوشقانی و اهورا فتحی به عنوان مدیرعامل و ریس هیئت مدیره و صاحب حق
              امضاء مجاز شرکت به نشانی تهران ملاصدرا، شیخ بهایی شمالی، ۱۲ متری
              دوم، پلاک ۶ طبقه‌ی ۵ واحد ۵۰۱، و آدرس وبسایتwww.submelk.net  که از
              این پس در این قرارداد «شرکت صاب‌ملک» نامیده می‌شود. ۱-۲- طرف دوم:
              «عنوان» «محمد حسین افضلی» فرزند  «مصطفی» متولد «۵ بهمن ۱۳۷۳» به
              شماره شناسنامه «۰۵۸۰۰۵۵۲۱۳» صادره از «تفرش» و کد ملی «۰۵۸۰۰۵۵۲۱۳»
              به نشانی «تهران، خیابان ولیعصر» و آدرس ایمیل «afzali@gmail.com» و
              تلفن «09386162206» که از این پس «مشتری» نامیده می‌شود.
            </p>
          </div>

          <div className="hidden lg:flex justify-end px-4 lg:px-12 mt-16 w-full gap-20">
            <FileUploader
              multiple={true}
              // handleChange={handleChange}
              name="file"
              // types={fileTypes}
            >
              <button className="text-[#005BEA] border-[#005BEA] border rounded-lg px-14 py-4 font-medium text-sm w-full lg:w-auto">
                افزودن نمونه امضا
              </button>
            </FileUploader>
            <button className="bg-[#005BEA] rounded-lg px-14 py-4 text-white font-medium text-sm w-full lg:w-auto">
              ثبت نهایی تفاهم نامه
            </button>
          </div>
          <div className="flex lg:hidden justify-end px-4 lg:px-12 mt-16 w-full fixed bottom-0 right-0 left-0 bg-white z-10 gap-6 border-t-4 pt-3 pb-8">
            <div className="w-1/2 lg:w-auto">
              <FileUploader
                multiple={true}
                // handleChange={handleChange}
                name="file"
                // types={fileTypes}
              >
                <button className="text-[#005BEA] border-[#005BEA] border rounded-lg py-3 font-medium text-sm w-full">
                  افزودن نمونه امضا
                </button>
              </FileUploader>
            </div>
            <button className="bg-[#005BEA] rounded-lg py-3 text-white font-medium text-sm w-1/2 lg:w-auto">
              ثبت نهایی تفاهم نامه
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

export default AccountTerms;
