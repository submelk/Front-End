import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MyAccountMenu = () => {
  const { pathname } = useRouter();

  return (
    <div
      className="w-full lg:w-1/4 bg-white rounded-[10px] py-6 px-5 h-[450px] relative"
      style={{ boxShadow: "0px 6px 20px 4px rgba(66, 71, 80, 0.1)" }}
    >
      <div className="text-[#424750] font-bold text-sm border-b pb-4 mb-6 border-[#E7E7E9]">
        Abolfazl Baghshahi
      </div>

      <div className="text-sm ">
        <Link href="/myAccount/info">
          <div
            className={`flex items-center justify-between mb-4 px-2 hover:opacity-100 ${
              pathname === "/myAccount/info" ? "" : "opacity-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Image src="/img/stamp/profile2.svg" width="24" height="24" />
              <div>Kontoinformationen</div>
            </div>
            <Image src="/img/stamp/arrowRight.svg" width="8" height="10" />
          </div>
        </Link>
        <Link href="/myAccount/wishList">
          <div
            className={`flex items-center justify-between mb-4 px-2 hover:opacity-100 border-b pb-4 ${
              pathname === "/myAccount/wishList" ? "" : "opacity-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Image src="/img/stamp/wishList.svg" width="24" height="24" />
              <div>Wunschliste</div>
            </div>
            <Image src="/img/stamp/arrowRight.svg" width="8" height="10" />
          </div>
        </Link>
        <Link href="/myAccount/history">
          <div
            className={`flex items-center justify-between mb-4 px-2 hover:opacity-100 ${
              pathname === "/myAccount/history" ? "" : "opacity-50"
            }`}
          >
            {" "}
            <div className="flex items-center gap-2">
              <Image src="/img/stamp/history.svg" width="24" height="24" />
              <div>Auftragsverlauf</div>
            </div>
            <Image src="/img/stamp/arrowRight.svg" width="8" height="10" />
          </div>
        </Link>
        <Link href="/myAccount/location">
          <div
            className={`flex items-center justify-between mb-4 px-2 hover:opacity-100 ${
              pathname === "/myAccount/location" ? "" : "opacity-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Image src="/img/stamp/location2.svg" width="24" height="24" />
              <div>Adressen</div>
            </div>
            <Image src="/img/stamp/arrowRight.svg" width="8" height="10" />
          </div>
        </Link>
        <Link
          href="/myAccount/location"
          className="absolute bottom-0 right-0 left-0 mx-4"
        >
          <div
            className={`flex items-center justify-between text-red-500 mb-4 px-2 hover:opacity-100 border-t pt-4 ${
              pathname === "asdfasdfasdfa" ? "" : "opacity-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Image src="/img/stamp/exit.svg" width="24" height="24" />
              <div>Adressen</div>
            </div>
            <Image src="/img/stamp/arrowRight.svg" width="8" height="10" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyAccountMenu;
