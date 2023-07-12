import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const DesktopMenu = dynamic(() => import("../../DesktopMenu"), {
  ssr: false,
});

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isScollred, setIsScollred] = useState(false);
  const [mobilMenuIsOpen, setMobilMenuIsOpen] = useState(false);

  const closeMobileMenu = function (e) {
    if (!e?.target?.closest("#xxxx")) {
      setMobilMenuIsOpen(false);
      window.removeEventListener("click", closeMobileMenu);
    }
  };

  useEffect(() => {
    setMobilMenuIsOpen(false);
    window.removeEventListener("click", closeMobileMenu);
  }, [pathname]);

  useEffect(() => {
    const fff = function () {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 50 && !isScollred) {
        setIsScollred(true);
        return;
      }

      setIsScollred(false);
    };
    window.addEventListener("scroll", fff);

    return () => {
      return window.removeEventListener("scroll", fff);
    };
  }, []);

  useEffect(() => {
    if (mobilMenuIsOpen) {
      setTimeout(() => {
        window.addEventListener("click", closeMobileMenu);
      }, 0);
      return;
    }
  }, [mobilMenuIsOpen]);

  return (
    <>
      <header className="pt-24 hidden lg:block">
        <div
          className={`flex justify-between items-center fixed top-0 right-0 left-0 bg-[#005BEA] text-white z-20 px-20 transition-all ${
            !isScollred ? "py-8" : "py-4"
          }`}
        >
          <div className="flex items-center gap-8">
            <Link href="/">
              <button
                className="w-[170px] h-[38px] relative"
                style={{
                  filter: "brightness(0) invert(1)",
                  transform: "scale(1.3)",
                }}
              >
                <Image src="/img/submelk/xxx.svg" fill />
              </button>
            </Link>
            <div className="h-[30px] w-[1px] bg-[rgba(256,256,256,.4)]"></div>
            <Link href="/" className="font-semibold text-sm">
              صفحه اول
            </Link>
            <Link href="/projects" className="font-semibold text-sm">
              پروژه‌ها
            </Link>
            <Link href="/faq" className="font-semibold text-sm">
              سوالات متداول
            </Link>
            <Link href="/" className="font-semibold text-sm">
              بلاگ
            </Link>
            <Link href="/" className="font-semibold text-sm">
              تماس با ما
            </Link>
            <Link href="/aboutUs" className="font-semibold text-sm">
              درباره ما
            </Link>
          </div>
          <div className="font-bold flex items-center gap-8">
            <div>
              <span className="ml-4">شماره تماس</span>
              <a href="tel:02179882222" className="text-lg">
                ۷۹۸۸۲۲۲۲-021
              </a>{" "}
            </div>
            <button className="text-[#005BEA] bg-white rounded-lg py-3 px-9">
              ورود | ثبت نام
            </button>
          </div>
        </div>
      </header>

      <header className="lg:hidden pt-16">
        <div
          className={`flex justify-between items-center fixed top-0 right-0 left-0 bg-[#005BEA] text-white z-20 px-2 ${
            !isScollred ? "py-5" : "py-3"
          } transition-all`}
        >
          <div className="flex items-center gap-1">
            <button onClick={() => setMobilMenuIsOpen((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M6.49768 13.0002H19.5028"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.49768 17.0022H19.5028"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.49731 8.99826H19.5024"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="w-[105px] h-[23px] relative ">
              <Image src="/img/submelk/logo.svg" fill />
            </button>
          </div>
          <div className="font-bold flex items-center gap-2 ">
            <a href="tel:02179882222" className="text-xs">
              ۰۲۱۷۹۸۸۲۲۲۲
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.9513 12.0488C8.8788 10.9763 8.0703 9.7755 7.53314 8.55725C7.41947 8.29967 7.48639 7.99808 7.6853 7.79917L8.43605 7.04933C9.05114 6.43425 9.05114 5.56433 8.51397 5.02717L7.4378 3.951C6.72189 3.23508 5.56139 3.23508 4.84547 3.951L4.2478 4.54867C3.56855 5.22792 3.2853 6.20783 3.46864 7.1795C3.92147 9.57475 5.31297 12.1973 7.55789 14.4422C9.8028 16.6872 12.4254 18.0787 14.8206 18.5315C15.7923 18.7148 16.7722 18.4316 17.4515 17.7523L18.0482 17.1556C18.7641 16.4397 18.7641 15.2792 18.0482 14.5632L16.973 13.488C16.4358 12.9508 15.565 12.9508 15.0287 13.488L14.201 14.3167C14.0021 14.5156 13.7005 14.5825 13.4429 14.4688C12.2246 13.9307 11.0238 13.1213 9.9513 12.0488Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          {!["/login", "register"].includes(pathname) && (
            <button className="text-[#005BEA] bg-white rounded-lg py-2 px-2">
              ورود | ثبت نام
            </button>
          )}
        </div>
      </header>
      <nav
        id="xxxx"
        className={`${
          mobilMenuIsOpen ? "right-0" : "-right-full"
        } lg:hidden z-50 fixed transition-all py-8 ${
          isScollred
            ? "h-[calc(100vh-61px)] top-[61px]"
            : "h-[calc(100vh-77px)] top-[77px]"
        } max-w-[80%] w-[360px] bg-white text-black border border-[#FF006E]`}
        style={{ borderRadius: "24px 0px 0px 24px" }}
      >
        <div
          className="text-center text-sm absolute inset-0 w-full h-full bg-no-repeat -z-10"
          style={{
            backgroundImage: "url(/img/submelk/pattern2.svg)",
            backgroundPosition: "left bottom",
            backgroundSize: "75%",
          }}
        ></div>
        <div className="border-b mx-9 pb-4">
          <div className="relative h-[40px] w-auto">
            <Image
              src="/img/submelk/logoBlue.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-9 mx-9 text-[#173046] font-bold text-sm">
          <ul>
            <li className="mb-7">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="mb-7">
              <Link href="/projects">پروژه‌ها</Link>
            </li>
            <li className="mb-7">
              <Link href="/faq">سوالات متداول</Link>
            </li>
            <li className="mb-7">
              <Link href="/">بلاگ</Link>
            </li>
            <li className="mb-7">
              <Link href="/">تماس با ما</Link>
            </li>
            <li className="mb-7">
              <Link href="/aboutUs">درباره‌ما</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 mt-16 font-bold text-[#173046] ">
          <div>شماره تماس</div>
          <a href="tel:02179882222" className="text-lg">
            ۰۲۱-۷۹۸۸۲۲۲۲
          </a>
        </div>
      </nav>

      <style jsx>{``}</style>
    </>
  );
};

export default Header;
