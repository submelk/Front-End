import Image from "next/image";
import { useState } from "react";

const HomePageFAQ = () => {
  const [openOne, setOpenOne] = useState("");

  return (
    <>
     
      <div>
        <div className="font-semibold text-[#363636]">
          {[...Array(5)].map((item, indx) => (
            <div key={indx} className="bg-white p-4 rounded-[10px] mb-4">
              <button
                onClick={() => {
                  if (indx === openOne) setOpenOne("");
                  else setOpenOne(indx);
                }}
                className="flex items-center justify-between gap-3 text-[#173046] w-full"
              >
                <span>چرا صاب‌ملک؟ چطور در صاب‌ملک رشد خواهم کرد؟</span>
                {openOne === indx ? (
                  <Image src="/img/submelk/minus.svg" width="19" height="19" />
                ) : (
                  <Image src="/img/submelk/plus.svg" width="19" height="19" />
                )}
              </button>
              <div
                className={`${
                  openOne === indx
                    ? "max-h-screen opacity-100 visible"
                    : "max-h-0 opacity-0 invisible"
                } font-normal`}
                style={{ transition: ".4s" }}
              >
                <p className="text-[#5D6F7E] text-sm py-4">
                  طی دهه‌های گذشته، رشد قیمت مسکن نسبت به سایر دارایی‌ها مانند
                  بورس، طلا، ماشین و دلار همواره با ثبات‌تر و بیشتر بوده است.
                  علاوه‌بر این مسکن همواره سرمایه‌گذاری امن برای خانواده‌های
                  ایرانی بوده است.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePageFAQ;
