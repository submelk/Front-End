import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between lg:h-[calc(100vh-96px)]">
      <div className="lg:w-[45%] -mt-20 lg:mt-0 flex flex-col justify-center gap-16 pb-24 pt-4 px-6 relative">
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
          <button className="bg-[#005BEA] rounded-lg text-white w-full p-3 mt-16 font-bold">
            ادامه
          </button>
        </form>
        <div className="text-center text-sm absolute bottom-9 right-0 left-0">
          <span className="text-[#4F4F4F] font-medium">
            رمز عبور خود را فراموش کرده اید؟
          </span>
          <Link href="/login/forget" className="text-[#005BEA] font-bold mr-2">
            فراموشی رمزعبور
          </Link>
        </div>

        <div
          className="text-center text-sm absolute inset-0 w-full h-full bg-no-repeat -z-10 "
          style={{
            backgroundImage: "url(/img/submelk/pattern.svg)",
            backgroundPosition: "right bottom",
          }}
        ></div>
      </div>

      <div
        className="lg:w-[55%] h-[175px] lg:h-auto rounded-[10px] lg:rounded-none mx-3 bg-no-repeat lg:bg-[url(/img/submelk/loginBg1.png)] bg-[url(/img/submelk/loginBgMobile.png)]"
        style={{
          //   backgroundImage: "url(/img/submelk/loginBg1.png)",
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
};

export default Login;
