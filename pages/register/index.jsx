import Image from "next/image";
import Countdown from "react-countdown";
import { useState } from "react";
import Checkbox from "react-custom-checkbox";
import VerificationInput from "react-verification-input";

const Register = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between lg:h-[calc(100vh-96px)]">
      {step === 0 && (
        <>
          <div className="lg:w-[45%] lg:overflow-auto ">
            <div className="-mt-20 lg:mt-0 flex flex-col justify-center gap-16 pb-4 pt-4 px-6 lg:px-36 relative">
              {/* <div className="overflow-auto"> */}
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
                  <div className="">ثبت‌نام</div>
                </div>
                <div className="mt-12 text-[#4B4D4D]">
                  لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </div>
                <label className="relative mt-9 block">
                  <span className="required absolute bg-white text-sm right-3 -top-3 px-2">
                    شماره موبایل
                  </span>
                  <input
                    type="text"
                    className="border border-[#DEE6EF] rounded-lg w-full p-3"
                  />
                </label>
                <label className="relative mt-9 block">
                  <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                    ایمیل
                  </span>
                  <input
                    type="text"
                    className="border border-[#DEE6EF] rounded-lg w-full p-3"
                  />
                </label>
                <label className="relative mt-9 block">
                  <span className="required absolute bg-white text-sm right-3 -top-3 px-2">
                    نام
                  </span>
                  <input
                    type="text"
                    className="border border-[#DEE6EF] rounded-lg w-full p-3"
                  />
                </label>
                <label className="relative mt-9 block">
                  <span className="required absolute bg-white text-sm right-3 -top-3 px-2">
                    نام خانوادگی
                  </span>
                  <input
                    type="text"
                    className="border border-[#DEE6EF] rounded-lg w-full p-3"
                  />
                </label>
                <div className="mt-6">
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
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-[#005BEA] rounded-lg text-white w-full p-3 mt-16 font-bold"
                >
                  ادامه
                </button>
              </form>

              <div
                className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10 "
                style={{
                  backgroundImage: "url(/img/submelk/pattern.svg)",
                  backgroundPosition: "right bottom",
                }}
              ></div>
            </div>
          </div>

          <div
            className="lg:w-[55%] h-[175px] lg:h-auto rounded-[10px] lg:rounded-none mx-3 lg:mx-0 bg-no-repeat lg:bg-[url(/img/submelk/registerBg.png)] bg-[url(/img/submelk/registerBgMobile.png)]"
            style={{
              //   backgroundImage: "url(/img/submelk/loginBg1.png)",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </>
      )}
      {step === 1 && (
        <>
          <div className="lg:w-[45%] lg:overflow-auto ">
            <div className="-mt-20 lg:mt-0 h-full flex flex-col justify-center gap-16 pb-4 pt-4 px-6 lg:px-36 relative">
              {/* <div className="overflow-auto"> */}
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
                  <div className="">ثبت‌نام</div>
                </div>
                <div className="mt-12 text-[#4B4D4D]">
                  لطفا کد پیامک شده به موبایل را وارد کنید
                </div>
                <button
                  onClick={() => setStep((prev) => prev - 1)}
                  className="w-full mt-6 mb-5 text-[#005BEA] flex gap-2 font-medium justify-center"
                >
                  <span>09102119118</span>

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
                <div
                  className="mt-3 text-sm text-center"
                  style={{ direction: "ltr" }}
                >
                  <div className="mx-auto w-full flex items-center justify-center ">
                    <VerificationInput
                      onComplete={(val) => console.log({ val })}
                      // onChange={(val) => console.log({ val })}
                      //   onChange={onChange}
                      placeholder=""
                      autoFocus
                      length={5}
                      classNames={{
                        character:
                          "rounded-[8px] w-[48px] h-[48px] border-[#DEE6EF] bg-white text-xl leading-[2.5]",
                        wrapper: "w-full xxxx",
                        container: "w-full gap-7 ",
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center mt-14 mb-4 gap-3">
                  <Countdown
                    date={Date.now() + 69000}
                    intervalDelay={0}
                    precision={3}
                    renderer={({ hours, minutes, seconds, completed }) => (
                      <span className="text-[#005BEA] font-bold">
                        {minutes}:{seconds}
                      </span>
                    )}
                  />
                  تا ارسال مجدد کد
                </div>

                <button
                  type="button"
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-[#005BEA] rounded-lg text-white w-full p-3 font-bold"
                >
                  ثبت نام
                </button>
              </form>

              <div
                className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10 "
                style={{
                  backgroundImage: "url(/img/submelk/pattern.svg)",
                  backgroundPosition: "right bottom",
                }}
              ></div>
            </div>
          </div>

          <div
            className="lg:w-[55%] h-[175px] lg:h-auto rounded-[10px] lg:rounded-none mx-3 lg:mx-0 bg-no-repeat lg:bg-[url(/img/submelk/registerBg.png)] bg-[url(/img/submelk/registerBgMobile.png)]"
            style={{
              //   backgroundImage: "url(/img/submelk/loginBg1.png)",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="lg:w-[45%] lg:overflow-auto ">
            <div className="-mt-20 lg:mt-0 h-full flex flex-col justify-center gap-16 pb-4 pt-4 px-6 lg:px-36 relative">
              {/* <div className="overflow-auto"> */}
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
                  <div className="">ثبت‌نام</div>
                </div>
                <div className="text-center mt-16">
                  <div>
                    <svg
                      className="mx-auto"
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="48"
                        fill="#0547A8"
                        fill-opacity="0.1"
                      />
                      <circle cx="48" cy="48" r="35" fill="#005BEA" />
                      <path
                        d="M62.6668 37.9165L42.5002 58.0832L33.3335 48.9165"
                        stroke="white"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="font-bold text-[#191A1A] mt-3">
                    ثبت نام موفق
                  </div>
                  <div className="font-medium mt-4">
                    ثبت نام شما با موفقیت انجام شد
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-[#005BEA] rounded-lg text-white w-full p-3 font-bold mt-14"
                >
                  بازگشت به صفحه اصلی
                </button>
              </form>

              <div
                className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10 "
                style={{
                  backgroundImage: "url(/img/submelk/pattern.svg)",
                  backgroundPosition: "right bottom",
                }}
              ></div>
            </div>
          </div>

          <div
            className="lg:w-[55%] h-[175px] lg:h-auto rounded-[10px] lg:rounded-none mx-3 lg:mx-0 bg-no-repeat lg:bg-[url(/img/submelk/registerBg.png)] bg-[url(/img/submelk/registerBgMobile.png)]"
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

export default Register;
