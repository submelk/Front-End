import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-14">
        <div className="container mx-auto px-4 lg:px-32 pt-12 pb-6 flex flex-col lg:flex-row items-stretch justify-between gap-14">
          <div>
            <div>
              <div className="text-[#005BEA] font-bold text-lg mb-4">اهداف</div>
              <ul className="text-[#5D6F7E] text-sm">
                <li className="mb-3">
                  ایجاد فرصت‌های جذاب در سرمایه گذاری مسکن برای همه ی افراد
                </li>
                <li className="mb-3">
                  ایجاد تحول در فرآیند مدیریت ساخت و جذب سرمایه در صنعت ساختمان
                  کشور
                </li>
                <li className="mb-3">
                  فراهم کردن امنیت در سرمایه‌گذاری به خصوص برای سرمایه های خرد{" "}
                </li>
              </ul>
            </div>
            <div>
              <div className="text-[#005BEA] font-bold text-lg mb-4 mt-9">
                اصول ما
              </div>
              <ul className="text-[#5D6F7E] text-sm">
                <li className="mb-3">شفافیت و پاسخگویی</li>
                <li className="mb-3">اصالت راهکارهای علمی و تکنولوژیکی</li>
                <li className="mb-3">خطرپذیری مسئولانه</li>
              </ul>
            </div>
          </div>
          <div className="lg:border-r lg:border-l lg:grow lg:pr-14">
            <div className="text-[#005BEA] font-bold text-lg mb-5">
              دسترسی سریع
            </div>
            <ul className="text-sm font-bold text-[#5D6F7E] flex flex-wrap lg:block ">
              <li className="mb-3 w-1/2">
                <Link href="/">تماس با ما</Link>
              </li>
              <li className="mb-3 w-1/2">
                <Link href="/aboutUs">درباره ما</Link>
              </li>
              <li className="mb-3 w-1/2">
                <Link href="/">قوانین و مقررات</Link>
              </li>
              <li className="mb-3 w-1/2">
                <Link href="/faq">سوالات متداول</Link>
              </li>
              <li className="mb-3 w-1/2">
                <Link href="/">بلاگ</Link>
              </li>
              <li className="mb-3 w-1/2">
                <Link href="/">راهنما</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[#005BEA] font-bold text-lg mb-4">
              پشتیبانی ، رضایت
            </div>
            <div className="flex items-center justify-between gap-6 mt-6 border-b pb-9 mb-5">
              <Image
                src="/img/submelk/cert/1.png"
                width="99"
                height="99"
                className="border rounded-lg"
              />
              <Image
                src="/img/submelk/cert/2.png"
                width="99"
                height="99"
                className="border rounded-lg"
              />
              <Image
                src="/img/submelk/cert/3.png"
                width="99"
                height="99"
                className="border rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between text-[#173046] font-medium">
              <div>شماره تماس</div>
              <a href="tel:02179882222" className="text-lg">
                ۰۲۱-۷۹۸۸۲۲۲۲
              </a>
            </div>
            <div className="hidden lg:flex items-center mt-5 justify-between text-[#173046] font-medium ">
              <span>آدرس:</span>
              <span className="mr-2 text-sm ">
                تهران، اختیاریه، خیابان رحمانی، پلاک 131، طبقه پنجم
              </span>
            </div>
            <div className="mt-8 flex items-center justify-between gap-7 footerIcons">
              <Link href="#">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4228 21.629H3.7998C3.00472 21.6272 2.24274 21.3105 1.68053 20.7483C1.11832 20.1861 0.801653 19.4241 0.799805 18.629L0.799805 3C0.801653 2.20492 1.11832 1.44293 1.68053 0.880722C2.24274 0.318513 3.00472 0.00184873 3.7998 0L19.4198 0C20.2149 0.00184873 20.9769 0.318513 21.5391 0.880722C22.1013 1.44293 22.418 2.20492 22.4198 3V18.625C22.419 19.4203 22.1032 20.1828 21.5416 20.7458C20.9799 21.3088 20.2181 21.6264 19.4228 21.629ZM12.8148 11.414V19.224H15.8148V11.414H17.8368L18.2168 9.014H15.8168V7.645C15.8168 6.982 15.8648 6.608 16.8468 6.608H18.2198V4.208H16.1748C15.7018 4.1633 15.2247 4.21942 14.775 4.37266C14.3252 4.5259 13.9131 4.77278 13.5658 5.097C13.0118 5.79516 12.7438 6.67768 12.8158 7.566V9.013H11.0158V11.413L12.8148 11.414Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8037 21.6285H3.17969C2.38461 21.6266 1.62262 21.31 1.06041 20.7478C0.4982 20.1856 0.181536 19.4236 0.179688 18.6285L0.179688 3.00049C0.181536 2.20541 0.4982 1.44342 1.06041 0.88121C1.62262 0.319001 2.38461 0.00233701 3.17969 0.000488281L18.7997 0.000488281C19.5948 0.00233701 20.3568 0.319001 20.919 0.88121C21.4812 1.44342 21.7978 2.20541 21.7997 3.00049V18.6205C21.8 19.4163 21.4848 20.1797 20.9232 20.7435C20.3616 21.3073 19.5995 21.6256 18.8037 21.6285V21.6285ZM13.2797 10.3365C13.5575 10.3388 13.8317 10.4004 14.0838 10.5171C14.336 10.6338 14.5604 10.803 14.742 11.0132C14.9236 11.2235 15.0583 11.4701 15.137 11.7366C15.2158 12.0031 15.2368 12.2833 15.1987 12.5585V18.0245H18.1987V12.1805C18.2801 10.978 17.8951 9.79045 17.1237 8.86449C16.7738 8.51162 16.354 8.23569 15.8913 8.05437C15.4286 7.87305 14.9332 7.79032 14.4367 7.81149C13.862 7.77625 13.2892 7.90538 12.7852 8.18376C12.2812 8.46215 11.8669 8.87828 11.5907 9.38349V7.81149H8.59069V18.0245H11.5907V12.6165C11.5907 12.5695 11.5907 12.5165 11.5907 12.4535V12.4375C11.5679 12.1341 11.5888 11.829 11.6527 11.5315C11.7662 11.188 11.9839 10.8884 12.2754 10.6743C12.567 10.4602 12.918 10.3421 13.2797 10.3365V10.3365ZM3.77969 7.81149V18.0245H6.77969V7.81149H3.77969ZM5.29669 3.60049C5.09564 3.58996 4.89461 3.62162 4.70652 3.69343C4.51844 3.76524 4.34746 3.87561 4.20459 4.01745C4.06171 4.15929 3.9501 4.32946 3.87692 4.51702C3.80374 4.70457 3.77062 4.90537 3.77969 5.10649C3.77155 5.30361 3.80397 5.50031 3.87495 5.68439C3.94593 5.86847 4.05396 6.03601 4.19234 6.17663C4.33071 6.31726 4.49649 6.42797 4.6794 6.50191C4.86231 6.57586 5.05846 6.61145 5.25569 6.60649H5.27969C5.47976 6.61624 5.67967 6.58421 5.86668 6.51243C6.05368 6.44065 6.22368 6.33069 6.36584 6.18957C6.508 6.04844 6.61919 5.87925 6.69234 5.69277C6.76549 5.5063 6.79898 5.30663 6.79069 5.10649C6.80059 4.90712 6.76882 4.70788 6.6974 4.52148C6.62599 4.33508 6.5165 4.16562 6.37591 4.02391C6.23533 3.8822 6.06675 3.77135 5.88093 3.69845C5.69511 3.62554 5.49613 3.59218 5.29669 3.60049Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.925 3.37603C23.9898 3.7863 22.9991 4.05589 21.985 4.17603C23.0506 3.5428 23.8501 2.5443 24.235 1.36603C23.2305 1.95953 22.1321 2.3772 20.987 2.60103C20.2228 1.7735 19.2062 1.22222 18.0958 1.03324C16.9854 0.844255 15.8436 1.0282 14.8488 1.55636C13.8539 2.08452 13.0618 2.92718 12.5962 3.95284C12.1306 4.97849 12.0177 6.12943 12.275 7.22603C10.2456 7.12699 8.25937 6.60425 6.44411 5.69146C4.62885 4.77867 3.02476 3.49602 1.735 1.92603C1.27933 2.69948 1.0403 3.58134 1.043 4.47903C1.04288 5.31602 1.25059 6.13994 1.64749 6.87684C2.04439 7.61374 2.61806 8.24056 3.317 8.70103C2.50564 8.67346 1.71205 8.45596 1 8.06603V8.12603C1.00373 9.3012 1.41415 10.4388 2.16153 11.3457C2.90892 12.2526 3.94719 12.8728 5.1 13.101C4.66201 13.2207 4.21004 13.2816 3.756 13.282C3.43279 13.2795 3.11048 13.2477 2.793 13.187C3.12467 14.1976 3.7629 15.0798 4.61899 15.711C5.47509 16.3422 6.50653 16.691 7.57 16.709C5.75281 18.1194 3.51729 18.8837 1.217 18.881C0.810192 18.8806 0.403782 18.8556 0 18.806C2.34476 20.2932 5.06438 21.0823 7.841 21.081C9.74733 21.1025 11.6389 20.7449 13.4059 20.029C15.1728 19.3131 16.7799 18.2532 18.1336 16.9109C19.4874 15.5686 20.5609 13.9706 21.2918 12.2098C22.0226 10.449 22.3963 8.56048 22.391 6.65403C22.391 6.43503 22.383 6.21603 22.372 6.00203C23.3757 5.28929 24.2408 4.39938 24.925 3.37603Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3595 8.48057C17.2314 8.8209 17.0068 9.11247 16.7402 9.356C16.5072 9.58693 16.2762 9.81995 16.0432 10.053C15.7955 10.3007 15.5477 10.5463 15.3021 10.7962C15.0649 11.0313 14.8277 11.2664 14.5904 11.5057C14.3322 11.764 14.0719 12.0222 13.8158 12.2804C13.5219 12.5764 13.2259 12.8682 12.932 13.1642C12.6548 13.4434 12.3756 13.7206 12.0964 13.9998C11.8172 14.2811 11.5338 14.5603 11.2546 14.8416C10.9963 15.0893 10.7612 15.3643 10.4694 15.5764C10.1083 15.8052 9.68215 15.9186 9.25388 15.9123C8.75844 15.8808 8.27349 15.6855 7.9166 15.3371C6.81863 14.2391 5.72067 13.139 4.62061 12.0411C4.35189 11.7744 4.17135 11.4302 4.07478 11.067C3.97401 10.5652 4.03279 10.0278 4.29101 9.58063C4.48835 9.23447 4.79066 8.95922 5.13495 8.76188C5.51283 8.58577 5.93481 8.50996 6.35048 8.55847C6.79974 8.62542 7.23011 8.83116 7.54501 9.16286C8.14123 9.75931 8.73534 10.3574 9.33576 10.9515C9.5163 10.7794 9.69055 10.5988 9.8627 10.4204C10.1146 10.1789 10.3623 9.93122 10.6038 9.6772C10.8431 9.45467 11.0719 9.21954 11.2987 8.98231C11.4603 8.83746 11.6073 8.67813 11.7626 8.52465C12.0145 8.27902 12.2602 8.02921 12.5058 7.77962C12.743 7.55265 12.9718 7.31752 13.2007 7.08659C13.4484 6.84517 13.6898 6.59745 13.9354 6.35392C14.1832 6.1041 14.4876 5.90886 14.8214 5.79969C15.2496 5.67793 15.7094 5.69053 16.1314 5.82698C16.6709 6.03272 17.1034 6.45679 17.3406 6.97953C17.5146 7.46028 17.5356 7.99772 17.3595 8.48057ZM21.2055 9.85774C21.1782 9.40848 21.1005 8.95922 21.0019 8.51835C20.7415 7.32825 20.2608 6.19017 19.6058 5.16359C18.1279 2.8396 15.701 1.13282 13.0012 0.565999C12.6066 0.471528 12.2014 0.412746 11.7983 0.374957C11.2651 0.318275 10.7276 0.303583 10.1944 0.339272C9.75773 0.353967 9.32106 0.406454 8.89489 0.490428C8.50232 0.545011 8.12023 0.654172 7.74025 0.75704C7.38546 0.868306 7.03277 0.994267 6.68847 1.13912C6.36097 1.27768 6.03977 1.42884 5.72697 1.60308C5.41837 1.76893 5.12026 1.95368 4.83055 2.15521C4.75917 2.2077 4.68359 2.25598 4.60802 2.29797C3.89004 1.75214 3.16366 1.2189 2.40789 0.727654C2.20006 0.599594 1.99852 0.454734 1.76549 0.377057C1.38341 0.242699 0.936246 0.345568 0.636038 0.618484C0.350526 0.872506 0.226662 1.26718 0.260252 1.64297C0.262351 2.14261 0.258154 2.64436 0.264452 3.14401C0.258154 3.64785 0.262351 4.1559 0.260252 4.65974C0.260252 5.16359 0.258153 5.66743 0.262352 6.17127C0.258153 6.75909 0.258153 7.34715 0.262352 7.93264C0.258153 8.50366 0.258154 9.07468 0.264452 9.64571C0.268651 10.3595 0.230862 11.0775 0.310637 11.7892C0.36732 12.5218 0.518472 13.2482 0.736805 13.9473C1.7319 17.1992 4.41697 19.8906 7.68357 20.8416L7.68567 20.8542C8.36586 21.0557 9.06494 21.2048 9.77033 21.2593C10.5534 21.3349 11.3469 21.3328 12.1258 21.2131C12.5436 21.1816 12.9529 21.0788 13.3623 20.9885C13.8326 20.8626 14.2944 20.7114 14.7458 20.5288C15.1678 20.3482 15.5855 20.153 15.9823 19.9178C16.3371 19.7205 16.673 19.4938 16.9984 19.2544C17.3784 18.9731 17.7395 18.6687 18.0754 18.3412C18.3378 18.0914 18.5792 17.8206 18.8143 17.5435C19.0411 17.2727 19.2552 16.9892 19.4546 16.6953C19.6352 16.4266 19.8031 16.1474 19.9648 15.8661C20.1306 15.547 20.2902 15.2279 20.4329 14.8983C20.5883 14.5036 20.7415 14.1068 20.8507 13.6975C20.9431 13.3616 21.0439 13.0257 21.0774 12.6793C21.1656 12.314 21.2055 11.9298 21.2202 11.5561C21.2706 10.9935 21.2664 10.4225 21.2055 9.85774Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.278 0C4.61395 0.00317165 3.01895 0.66562 1.84229 1.84229C0.66562 3.01895 0.00317165 4.61395 0 6.278L0 15.35C0.00317165 17.0141 0.66562 18.609 1.84229 19.7857C3.01895 20.9624 4.61395 21.6248 6.278 21.628H15.35C17.0141 21.6248 18.609 20.9624 19.7857 19.7857C20.9624 18.609 21.6248 17.0141 21.628 15.35V6.278C21.6248 4.61395 20.9624 3.01895 19.7857 1.84229C18.609 0.66562 17.0141 0.00317165 15.35 0L6.278 0ZM6.278 1.664H15.35C15.9564 1.66215 16.5573 1.78023 17.1179 2.01145C17.6785 2.24268 18.1879 2.58247 18.6167 3.01129C19.0455 3.44011 19.3853 3.94948 19.6165 4.51011C19.8478 5.07074 19.9658 5.67156 19.964 6.278V15.35C19.9658 15.9564 19.8478 16.5573 19.6165 17.1179C19.3853 17.6785 19.0455 18.1879 18.6167 18.6167C18.1879 19.0455 17.6785 19.3853 17.1179 19.6165C16.5573 19.8478 15.9564 19.9658 15.35 19.964H6.278C5.67156 19.9658 5.07074 19.8478 4.51011 19.6165C3.94948 19.3853 3.44011 19.0455 3.01129 18.6167C2.58247 18.1879 2.24268 17.6785 2.01145 17.1179C1.78023 16.5573 1.66215 15.9564 1.664 15.35V6.278C1.66215 5.67156 1.78023 5.07074 2.01145 4.51011C2.24268 3.94948 2.58247 3.44011 3.01129 3.01129C3.44011 2.58247 3.94948 2.24268 4.51011 2.01145C5.07074 1.78023 5.67156 1.66215 6.278 1.664ZM17.052 3.327C16.8052 3.327 16.5639 3.40019 16.3586 3.53733C16.1534 3.67446 15.9935 3.86937 15.899 4.09741C15.8045 4.32545 15.7798 4.57638 15.828 4.81847C15.8761 5.06056 15.995 5.28293 16.1695 5.45747C16.3441 5.63201 16.5664 5.75087 16.8085 5.79902C17.0506 5.84717 17.3015 5.82246 17.5296 5.728C17.7576 5.63354 17.9525 5.47358 18.0897 5.26835C18.2268 5.06312 18.3 4.82183 18.3 4.575C18.3 4.41111 18.2677 4.24883 18.205 4.09741C18.1423 3.946 18.0504 3.80842 17.9345 3.69253C17.8186 3.57664 17.681 3.48472 17.5296 3.422C17.3782 3.35928 17.2159 3.327 17.052 3.327ZM10.814 4.991C9.66232 4.991 8.5365 5.33251 7.57891 5.97235C6.62133 6.61219 5.87498 7.52162 5.43425 8.58563C4.99352 9.64965 4.87821 10.8205 5.10289 11.95C5.32757 13.0796 5.88216 14.1171 6.69652 14.9315C7.51088 15.7458 8.54844 16.3004 9.67799 16.5251C10.8075 16.7498 11.9784 16.6345 13.0424 16.1938C14.1064 15.753 15.0158 15.0067 15.6556 14.0491C16.2955 13.0915 16.637 11.9657 16.637 10.814C16.6341 9.27054 16.0197 7.79112 14.9283 6.69973C13.8369 5.60833 12.3575 4.99391 10.814 4.991ZM10.814 6.655C11.6366 6.655 12.4407 6.89892 13.1246 7.35592C13.8086 7.81291 14.3416 8.46246 14.6564 9.22242C14.9712 9.98238 15.0536 10.8186 14.8931 11.6254C14.7326 12.4321 14.3365 13.1732 13.7549 13.7549C13.1732 14.3365 12.4321 14.7326 11.6254 14.8931C10.8186 15.0536 9.98238 14.9712 9.22242 14.6564C8.46246 14.3416 7.81291 13.8086 7.35592 13.1246C6.89892 12.4407 6.655 11.6366 6.655 10.814C6.65328 10.2674 6.75969 9.72576 6.96809 9.22039C7.17649 8.71502 7.48277 8.25586 7.86931 7.86931C8.25586 7.48277 8.71502 7.17649 9.22039 6.96809C9.72576 6.75969 10.2674 6.65328 10.814 6.655Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6085 16.2205C21.6028 16.2796 21.5953 16.3384 21.586 16.3971C21.1575 19.0577 19.2464 20.9966 16.6139 21.4877C16.513 21.5067 16.419 21.5637 16.3221 21.6029H5.95527C5.811 21.5598 5.66977 21.5011 5.52265 21.4761C2.84539 21.0181 0.698008 18.6245 0.65707 15.9283C0.607908 12.6574 0.633474 9.38519 0.634546 6.11371C0.634546 5.71809 0.63955 5.31318 0.719103 4.92847C1.28634 2.18364 3.3329 0.358581 6.09435 0.073086C6.33301 0.048237 6.57721 0.0351879 6.82605 0.0339365C9.66956 0.0192774 12.5134 0.0280346 15.3569 0.0335764C15.6707 0.0341128 15.9878 0.0382259 16.2992 0.073086C16.3813 0.0818457 16.4632 0.0931019 16.5445 0.106867C19.1413 0.548071 21.1056 2.40424 21.5052 5.01553C21.5601 5.37378 21.5915 5.73561 21.6085 6.0994C21.6437 6.85256 21.6173 7.61466 21.6085 8.37389C21.6058 8.59628 21.6048 8.81867 21.6071 9.04017C21.6083 9.14081 21.5198 9.26292 21.4396 9.34032C20.3754 10.369 19.3263 11.4148 18.2298 12.408C17.2927 13.2566 16.3509 14.1172 15.3173 14.8384C14.0621 15.7145 12.6152 15.9564 11.1144 15.5728C10.7021 15.4673 10.5373 15.6037 10.4529 15.9484C10.3124 16.5213 10.1901 17.0989 10.0548 17.6969C10.0065 17.6969 9.9295 17.7116 9.85978 17.6948C8.57549 17.3896 7.35021 15.9823 7.28245 14.6666C7.2619 14.2617 7.12782 13.9955 6.83946 13.7284C6.07236 13.0178 5.73359 12.1304 5.89323 11.0817C6.00461 10.3509 6.34767 9.71931 6.82051 9.16727C8.38904 7.33703 10.3922 6.31626 12.7873 6.15072C14.0916 6.06026 15.2727 6.43924 16.1069 7.54726C16.4494 8.00223 16.4276 8.31133 16.0297 8.72196C15.9135 8.84192 15.7855 8.95722 15.6449 9.0466C14.2729 9.91793 12.7698 10.3144 11.1525 10.182C10.0461 10.0913 9.6297 9.57487 9.64704 8.47364C9.64811 8.38998 9.62612 8.30525 9.60735 8.16617C8.92105 8.41644 8.51471 8.88697 8.24262 9.48549C7.80875 10.441 8.08674 11.2644 8.77947 11.9598C7.48321 13.8637 7.89116 16.2301 9.62612 16.8174C9.79881 14.5579 11.4051 13.5455 13.2112 12.7098C13.7934 12.4402 14.3669 12.1522 14.9544 11.8955C16.8974 11.0461 17.9727 9.58058 18.1402 7.4593C18.3072 5.34768 17.5728 3.42001 15.5303 2.43767C14.0276 1.7149 12.4859 1.76692 10.9481 2.35633C6.15084 4.19605 2.91869 10.0427 3.54599 14.4764C3.78518 16.1661 4.50902 17.587 5.9061 18.6179C8.68687 20.6697 12.5492 20.4709 15.368 18.1385C16.7603 16.9868 17.8402 15.5626 18.907 14.1242C19.5255 13.2897 20.154 12.462 20.7989 11.6473C21.0064 11.3851 21.2787 11.1731 21.6085 10.8549C21.6105 10.8529 21.6126 10.8509 21.6146 10.8491C21.6146 12.3404 21.6162 13.6819 21.6137 15.0236C21.613 15.4221 21.6471 15.8272 21.6085 16.2205Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.816 21.6267C7.94775 21.6262 5.19712 20.4866 3.16887 18.4585C1.14062 16.4305 0.00079536 13.6799 0 10.8117C0.000455859 8.67317 0.634969 6.58278 1.82332 4.80482C3.01167 3.02686 4.7005 1.64116 6.6763 0.822907C8.6521 0.0046525 10.8261 -0.209414 12.9236 0.20777C15.021 0.624955 16.9477 1.65466 18.46 3.1667C19.4641 4.1707 20.2605 5.36264 20.8039 6.67446C21.3473 7.98628 21.627 9.39229 21.627 10.8122C21.627 12.2321 21.3473 13.6381 20.8039 14.9499C20.2605 16.2618 19.4641 17.4537 18.46 18.4577C17.4591 19.4656 16.268 20.2647 14.9558 20.8087C13.6436 21.3527 12.2365 21.6307 10.816 21.6267ZM14.046 7.0267C13.9653 7.02713 13.8854 7.04203 13.81 7.0707C12.041 7.7997 10.2 8.4337 8.429 9.0427C7.729 9.2837 7.049 9.5187 6.367 9.7597C6.24492 9.80446 6.13939 9.88541 6.06453 9.99173C5.98966 10.098 5.94901 10.2247 5.948 10.3547C5.94671 10.4881 5.98828 10.6184 6.06658 10.7264C6.14489 10.8344 6.25581 10.9144 6.383 10.9547L9.283 12.4347L10.812 15.5567C10.8669 15.668 10.9534 15.7607 11.0607 15.8232C11.1679 15.8857 11.2913 15.9153 11.4152 15.9081C11.5391 15.901 11.6582 15.8575 11.7576 15.7831C11.857 15.7086 11.9322 15.6066 11.974 15.4897L14.642 7.8697C14.6673 7.80262 14.6799 7.73139 14.679 7.6597C14.6785 7.49226 14.6115 7.33187 14.4928 7.21375C14.3742 7.09563 14.2134 7.02943 14.046 7.0297V7.0267Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="text-[#5D6F7E] py-8 text-sm mt-6 text-center px-3"
          style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
        >
          تمامی خدمات این وب سایت دارای مجوزهای لازم از مراجع مربوطه می باشد و
          کليه حقوق اين سايت متعلق به صاب‌ملک می‌باشد.
        </div>
      </footer>
      <style jsx global>{`
        .footerIcons a:hover path {
          fill: #005bea;
        }
      `}</style>
      <style jsx>{`
        footer {
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
          background: white;
        }

        li::before {
          content: "• ";
          color: #005bea;
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Footer;
