import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between lg:h-[calc(100vh-96px)]">
      {step === 0 && (
        <>
          <div className="lg:w-[45%] -mt-20 lg:mt-0 flex flex-col justify-center gap-16 pb-24 pt-4 px-6 lg:px-36 relative">
            <div className="text-center">
              <Image
                src="/img/submelk/logoCircle.png"
                className="mx-auto rounded-2xl"
                width="121"
                height="140"
              />
            </div>
            <form>
              <div className="font-bold text-lg text-[#191A1A] flex items-center">
                <div className="">ورود</div>
                <div className="w-[1.5px] mx-1 bg-[#191A1A] h-[15px]"></div>
                <div>ثبت‌نام</div>
              </div>
              <div className="mt-12 text-[#4B4D4D]">
                لطفا شماره موبایل یا ایمیل خود را وارد کنید
              </div>
              <label className="relative mt-14 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                  شماره موبایل یا ایمیل
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
              <button
                onClick={() => setStep((prev) => prev + 1)}
                className="bg-[#005BEA] rounded-lg text-white w-full p-3 mt-16 font-bold"
              >
                ادامه
              </button>
            </form>
            <div className="text-center text-sm absolute bottom-9 right-0 left-0">
              <span className="text-[#4F4F4F] font-medium">
                رمز عبور خود را فراموش کرده اید؟
              </span>
              <Link
                href="/login/forget"
                className="text-[#005BEA] font-bold mr-2"
              >
                فراموشی رمزعبور
              </Link>
            </div>

            <div
              className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10 "
              style={{
                backgroundImage: "url(/img/submelk/pattern.svg)",
                backgroundPosition: "right bottom",
              }}
            ></div>
          </div>

          <div
            className="lg:w-[55%] h-[175px] lg:h-auto rounded-[10px] lg:rounded-none mx-3 lg:mx-0 bg-no-repeat lg:bg-[url(/img/submelk/loginBg1.png)] bg-[url(/img/submelk/loginBgMobile.png)]"
            style={{
              //   backgroundImage: "url(/img/submelk/loginBg1.png)",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </>
      )}
      {step === 1 && (
        <>
          <div className="lg:w-[45%] -mt-20 lg:mt-0 flex flex-col justify-center gap-16 pb-24 pt-4 px-6 lg:px-36 relative">
            <div className="text-center">
              <Image
                src="/img/submelk/logoCircle.png"
                className="mx-auto rounded-2xl"
                width="121"
                height="140"
              />
            </div>
            <form>
              <div className="font-bold text-lg text-[#191A1A] flex items-center">
                <div className="">ورود</div>
              </div>
              <div className="mt-12 text-[#4B4D4D]">
                لطفا رمز عبور خود را وارد کنید
              </div>
              <button
                onClick={() => setStep((prev) => prev - 1)}
                className="w-full mt-4 text-[#005BEA] flex gap-2 font-medium justify-center"
              >
                <span>a.baghshahi@gmail.com</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3001 15.5284L15.9144 10.9142C16.2894 10.5391 16.5002 10.0304 16.5002 9.49999C16.5002 8.96956 16.2894 8.46085 15.9144 8.08578V8.08578C15.1333 7.30474 13.867 7.30474 13.086 8.08578L8.47165 12.7C8.08916 13.0825 7.84104 13.5787 7.76454 14.1142L7.50527 15.9291C7.48302 16.0849 7.53541 16.2421 7.6467 16.3534C7.75798 16.4646 7.91516 16.517 8.07095 16.4948L9.88586 16.2355C10.4214 16.159 10.9176 15.9109 11.3001 15.5284V15.5284Z"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6641 12.1644L11.8357 9.33594"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="21"
                    y="21"
                    width="18"
                    height="18"
                    rx="5"
                    transform="rotate(-180 21 21)"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <label className="relative mt-9 block">
                <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                  رمز عبور
                </span>
                <input
                  type="text"
                  className="border border-[#DEE6EF] rounded-lg w-full p-3"
                />
              </label>
              <button
                onClick={() => setStep((prev) => prev + 1)}
                className="bg-[#005BEA] rounded-lg text-white w-full p-3 mt-16 font-bold"
              >
                ورود
              </button>
            </form>
            <div className="text-center text-sm absolute bottom-9 right-0 left-0">
              <span className="text-[#4F4F4F] font-medium">
                رمز عبور خود را فراموش کرده اید؟
              </span>
              <Link
                href="/login/forget"
                className="text-[#005BEA] font-bold mr-2"
              >
                فراموشی رمزعبور
              </Link>
            </div>

            <div
              className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10 "
              style={{
                backgroundImage: "url(/img/submelk/pattern.svg)",
                backgroundPosition: "right bottom",
              }}
            ></div>
          </div>

          <div
            className="lg:w-[55%] h-[175px] lg:h-auto rounded-[10px] lg:rounded-none mx-3 lg:mx-0 bg-no-repeat lg:bg-[url(/img/submelk/loginBg1.png)] bg-[url(/img/submelk/loginBgMobile.png)]"
            style={{
              //   backgroundImage: "url(/img/submelk/loginBg1.png)",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Login;
