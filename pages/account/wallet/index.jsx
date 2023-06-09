import Image from "next/image";
import Checkbox from "react-custom-checkbox";
import { FileUploader } from "react-drag-drop-files";

import Link from "next/link";
import React from "react";
import AccountMenu from "../../../components/layout/accountMenu";
import { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #FF006E",
    borderRadius: "8px",

    maxWidth: "97%",
    width: "805px",
  },
};

const AccountWallet = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container mx-auto ">
      <ReactModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
        // className="w-[585px] m-auto"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className="flex gap-6">
          <button onClick={() => setModalIsOpen(false)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.23077 16L0 14.7692L6.76923 8L0 1.23077L1.23077 0L8 6.76923L14.7692 0L16 1.23077L9.23077 8L16 14.7692L14.7692 16L8 9.23077L1.23077 16Z"
                fill="#5D6F7E"
              />
            </svg>
          </button>
          <span className="text-[#173046] text-sm font-medium">
            درخواست افزایش موجودی
          </span>
        </div>

        <form className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                مبلغ
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                تاریخ واریز
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                واریز به بانک
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                شماره پیگیری
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>

          <div className="w-full flex items-center justify-center gap-6 mt-12 text-sm font-medium">
            <button className="bg-[#005BEA] text-white px-14 py-4 rounded-lg">
              ثبت واریزی
            </button>
          </div>
        </form>
      </ReactModal>
      <div
        className=" flex mt-9 mx-3 lg:mx-16 bg-white rounded-xl py-7 lg:px-5"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
      >
        <AccountMenu />
        <div className="w-full lg:w-auto lg:grow -ml-5">
          <div className="px-5 lg:px-12 pb-5 border-b-4 w-full">
            <div className="text-[#173046] font-bold">کیف‌پول</div>
            <div className="text-[#5D6F7E] font-medium text-xs mt-4">
              تفاهم نامه را بین خود و صاب‌ملک مشاهده و مدیریت کنید.
            </div>
          </div>

          <div className="flex  flex-col-reverse lg:flex-row items-center justify-between lg:px-12 pt-12 mx-2 lg:mx-0">
            <div className="w-full lg:w-auto items-center flex lg:block text-center mt-10">
              <div className="basis-1/2 text-[#173046] lg:mb-9 font-bold">
                درخواست شارژ کیف پول
              </div>
              <button
                onClick={() => setModalIsOpen(true)}
                className="basis-1/2 bg-[#005BEA] rounded-lg lg:px-14 py-3 lg:py-4 text-white font-medium text-sm w-full lg:w-auto"
              >
                شارژ کیف
              </button>
            </div>
            <div className="bg-[#F5F8FC] w-[550px] lg:h-[190px] py-4 lg:py-0 max-w-full rounded-lg flex items-center justify-center gap-14 text-[#173046]">
              <div className="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 9.5V6.5C21 5.11929 19.8807 4 18.5 4H5.5C4.11929 4 3 5.11929 3 6.5V9"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 14.5V17.5C21 18.8807 19.8807 20 18.5 20H15"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5 9.5H21C21.5523 9.5 22 9.94772 22 10.5V13.5C22 14.0523 21.5523 14.5 21 14.5H19.5C18.1193 14.5 17 13.3807 17 12V12C17 10.6193 18.1193 9.5 19.5 9.5V9.5Z"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 15C5 16.1046 5.89543 17 7 17C8.10457 17 9 16.1046 9 15"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="2"
                    y="12"
                    width="10"
                    height="9"
                    rx="2.5"
                    stroke="#173046"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>موجودی کیف پول</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-bold text-xl text-[#0547A8]">
                  28,500,000
                </div>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.82332 2.31405C1.46621 3.05462 1.28766 3.73743 1.28766 4.3625C1.28766 4.89245 1.41127 5.28991 1.6585 5.55488C1.9126 5.81985 2.33495 5.95234 2.92555 5.95234H3.81146C4.25098 5.95234 4.58062 5.91497 4.80038 5.84024C5.02014 5.7655 5.16779 5.63641 5.24333 5.45297C5.32574 5.26952 5.36695 4.99776 5.36695 4.63766V1.4376H6.6752V4.63766C6.6752 5.49373 6.44171 6.16975 5.97472 6.66573C5.5146 7.1685 4.79351 7.41988 3.81146 7.41988H2.92555C2.30748 7.41988 1.77868 7.284 1.33916 7.01223C0.899642 6.74047 0.566568 6.37358 0.339941 5.91157C0.113314 5.44957 0 4.93321 0 4.3625C0 3.94805 0.0721087 3.50643 0.216326 3.03763C0.360543 2.56883 0.532231 2.1374 0.731388 1.74334L1.82332 2.31405ZM2.92555 0.5H4.29562V1.82487H2.92555V0.5Z"
                    fill="#005BEA"
                  />
                  <path
                    d="M2.2582 14.8605C1.53712 14.8605 1.00489 14.6532 0.661512 14.2388C0.325004 13.8243 0.15675 13.2672 0.15675 12.5674V8.05267H1.46501V12.5674C1.46501 12.8256 1.47874 13.009 1.50621 13.1177C1.54055 13.2265 1.60923 13.3012 1.71224 13.342C1.82212 13.3759 2.00411 13.3929 2.2582 13.3929H2.62905L2.69086 14.1471L2.62905 14.8605H2.2582Z"
                    fill="#005BEA"
                  />
                  <path
                    d="M2.52378 13.3929H2.79161C2.92896 13.3929 3.03198 13.3623 3.10065 13.3012C3.17619 13.2332 3.23113 13.1245 3.26547 12.9751L3.5333 11.9967C3.68439 11.4056 3.93849 10.9538 4.2956 10.6413C4.65271 10.3287 5.08192 10.1725 5.58325 10.1725C5.98157 10.1725 6.33524 10.2812 6.64428 10.4986C6.96018 10.7092 7.20742 11.0048 7.38597 11.3852C7.56453 11.7589 7.6538 12.1801 7.6538 12.6489C7.6538 13.2129 7.56109 13.6749 7.37567 14.035C7.19025 14.3883 6.95675 14.6464 6.67518 14.8095C6.40048 14.9658 6.11205 15.0439 5.80988 15.0439C5.57638 15.0439 5.32915 14.9963 5.06819 14.9012C4.81409 14.8129 4.43295 14.6498 3.92475 14.412C3.7668 14.5547 3.59168 14.6668 3.39939 14.7484C3.2071 14.8231 3.01137 14.8605 2.81222 14.8605H2.52378V13.3929ZM4.55313 13.1789C4.92397 13.3487 5.19867 13.4642 5.37723 13.5254C5.55578 13.5865 5.71717 13.6171 5.86138 13.6171C6.2391 13.6171 6.42795 13.2978 6.42795 12.6591C6.42795 12.3126 6.35241 12.0477 6.20133 11.8642C6.05024 11.674 5.85452 11.5789 5.61415 11.5789C5.415 11.5789 5.23988 11.6502 5.08879 11.7929C4.93771 11.9356 4.82783 12.1428 4.75915 12.4145L4.55313 13.1789Z"
                    fill="#005BEA"
                  />
                  <path
                    d="M10.2161 16.0325C10.6419 16.0325 10.9646 15.9951 11.1844 15.9203C11.4042 15.8524 11.5552 15.7335 11.6376 15.5637C11.7269 15.4006 11.7784 15.1662 11.7922 14.8605H10.9063C10.2538 14.8605 9.73535 14.6736 9.35077 14.2999C8.97306 13.9195 8.7842 13.3895 8.7842 12.7101C8.7842 12.2277 8.87348 11.7997 9.05203 11.426C9.23746 11.0523 9.48812 10.7636 9.80402 10.5597C10.1268 10.3491 10.4908 10.2438 10.896 10.2438C11.3355 10.2438 11.7201 10.3457 12.0497 10.5495C12.3862 10.7534 12.6437 11.0421 12.8223 11.4158C13.0077 11.7895 13.1004 12.2209 13.1004 12.7101V13.3929H13.667L13.7494 14.1369L13.667 14.8605H13.1004C13.073 15.6554 12.8257 16.294 12.3587 16.7764C11.8917 17.2588 11.1775 17.5 10.2161 17.5H8.99022V16.0325H10.2161ZM10.041 12.6388C10.041 12.9173 10.1096 13.1245 10.247 13.2604C10.3843 13.3895 10.6041 13.4541 10.9063 13.4541H11.7922V12.6795C11.7922 11.9729 11.4934 11.6196 10.896 11.6196C10.6144 11.6196 10.4015 11.7147 10.2573 11.905C10.1131 12.0952 10.041 12.3398 10.041 12.6388Z"
                    fill="#005BEA"
                  />
                  <path
                    d="M13.5491 13.3929H14.6925C15.0016 13.3929 15.2213 13.342 15.3518 13.24C15.4823 13.1313 15.5407 12.9785 15.5269 12.7814C15.4926 12.3602 15.4033 11.7963 15.2591 11.0897L16.4952 10.7839C16.5777 11.144 16.6532 11.5279 16.7219 11.9356C16.7974 12.3432 16.8352 12.6727 16.8352 12.9241C16.8352 13.2638 16.7596 13.5798 16.6086 13.8719C16.4575 14.1641 16.2274 14.4018 15.9184 14.5853C15.6162 14.7687 15.2419 14.8605 14.7955 14.8605H13.5491V13.3929ZM13.8375 8.43994H15.0634V9.65271H13.8375V8.43994ZM15.7639 8.43994H17V9.65271H15.7639V8.43994Z"
                    fill="#005BEA"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden lg:block bg-[#F9F9F9] font-bold text-sm text-[#4B4D4D] py-4 pr-9 border-r-[3px] border-[#0547A8] mt-14">
            تراکنش‌ها
          </div>

          <div className="hidden lg:block mb-16">
            <table className=" w-full mt-4 text-sm font-medium text-[#173046]">
              <thead className="bg-[#F9F9F9] text-[#5D6F7E]">
                <tr className="border-t-2">
                  <th className="py-3 font-medium text-center">تاریخ</th>
                  <th className="py-3 font-medium text-center">
                    <div className="flex gap-1 justify-center">
                      مبلغ
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.28705 1.28051C1.03497 1.80326 0.908933 2.28525 0.908933 2.72647C0.908933 3.10055 0.996191 3.38111 1.17071 3.56815C1.35007 3.75519 1.6482 3.84871 2.0651 3.84871H2.69044C3.00069 3.84871 3.23338 3.82233 3.3885 3.76958C3.54363 3.71682 3.64785 3.6257 3.70118 3.49621C3.75935 3.36672 3.78843 3.17489 3.78843 2.9207V0.661835H4.71191V2.9207C4.71191 3.52499 4.54709 4.00218 4.21745 4.35228C3.89266 4.70718 3.38365 4.88462 2.69044 4.88462H2.0651C1.62881 4.88462 1.25554 4.78871 0.94529 4.59687C0.635041 4.40504 0.399931 4.14606 0.239958 3.81993C0.0799861 3.49381 0 3.12933 0 2.72647C0 2.43392 0.0509002 2.12219 0.152701 1.79127C0.254501 1.46035 0.375692 1.15581 0.516274 0.87765L1.28705 1.28051ZM2.0651 0H3.0322V0.935201H2.0651V0Z"
                          fill="#5D6F7E"
                        />
                        <path
                          d="M1.59403 10.1368C1.08502 10.1368 0.709332 9.99052 0.466949 9.69797C0.229415 9.40542 0.110647 9.01215 0.110647 8.51817V5.3313H1.03412V8.51817C1.03412 8.70042 1.04382 8.82991 1.06321 8.90664C1.08745 8.98338 1.13592 9.03613 1.20864 9.06491C1.2862 9.08889 1.41466 9.10088 1.59403 9.10088H1.8558L1.89943 9.63322L1.8558 10.1368H1.59403Z"
                          fill="#5D6F7E"
                        />
                        <path
                          d="M1.78149 9.10088H1.97055C2.0675 9.10088 2.14022 9.07929 2.1887 9.03613C2.24202 8.98817 2.2808 8.91144 2.30504 8.80593L2.4941 8.11532C2.60075 7.69808 2.78011 7.37915 3.03219 7.15854C3.28426 6.93793 3.58724 6.82762 3.94112 6.82762C4.22228 6.82762 4.47193 6.90435 4.69008 7.05782C4.91307 7.2065 5.08759 7.41512 5.21363 7.68369C5.33967 7.94746 5.40268 8.24481 5.40268 8.57572C5.40268 8.97378 5.33724 9.29991 5.20635 9.55409C5.07547 9.80348 4.91065 9.98572 4.71189 10.1008C4.51799 10.2111 4.31439 10.2663 4.10109 10.2663C3.93627 10.2663 3.76176 10.2327 3.57755 10.1656C3.39818 10.1032 3.12914 9.98812 2.77041 9.82026C2.65892 9.92098 2.5353 10.0001 2.39957 10.0577C2.26383 10.1104 2.12568 10.1368 1.98509 10.1368H1.78149V9.10088ZM3.21397 8.94981C3.47575 9.0697 3.66965 9.15123 3.79569 9.1944C3.92173 9.23756 4.03565 9.25914 4.13745 9.25914C4.40407 9.25914 4.53738 9.03373 4.53738 8.58292C4.53738 8.33833 4.48405 8.15129 4.37741 8.0218C4.27076 7.88751 4.1326 7.82037 3.96293 7.82037C3.82235 7.82037 3.69874 7.87073 3.59209 7.97144C3.48544 8.07216 3.40788 8.21843 3.3594 8.41027L3.21397 8.94981Z"
                          fill="#5D6F7E"
                        />
                        <path
                          d="M7.21135 10.9641C7.5119 10.9641 7.73974 10.9377 7.89487 10.885C8.04999 10.837 8.15664 10.7531 8.21481 10.6332C8.27783 10.5181 8.31418 10.3526 8.32388 10.1368H7.69854C7.23801 10.1368 6.87201 10.0049 6.60054 9.74113C6.33392 9.47256 6.20061 9.09848 6.20061 8.61889C6.20061 8.27838 6.26363 7.97624 6.38967 7.71246C6.52056 7.44869 6.6975 7.24486 6.92049 7.10099C7.14833 6.95231 7.40525 6.87798 7.69126 6.87798C8.00151 6.87798 8.27298 6.94992 8.50567 7.09379C8.7432 7.23767 8.92499 7.44149 9.05103 7.70527C9.18191 7.96904 9.24736 8.27358 9.24736 8.61889V9.10088H9.64729L9.70546 9.62603L9.64729 10.1368H9.24736C9.22797 10.6979 9.05345 11.1487 8.72381 11.4892C8.39417 11.8297 7.89002 12 7.21135 12H6.34604V10.9641H7.21135ZM7.08773 8.56853C7.08773 8.76516 7.13621 8.91144 7.23316 9.00736C7.33011 9.09848 7.48524 9.14404 7.69854 9.14404H8.32388V8.59731C8.32388 8.09853 8.11301 7.84915 7.69126 7.84915C7.49251 7.84915 7.34223 7.91629 7.24043 8.05057C7.13863 8.18486 7.08773 8.35751 7.08773 8.56853Z"
                          fill="#5D6F7E"
                        />
                        <path
                          d="M9.56406 9.10088H10.3712C10.5893 9.10088 10.7445 9.06491 10.8366 8.99297C10.9287 8.91623 10.9699 8.80833 10.9602 8.66925C10.9359 8.3719 10.8729 7.97384 10.7711 7.47507L11.6437 7.25925C11.7019 7.51343 11.7552 7.7844 11.8037 8.07216C11.857 8.35991 11.8837 8.59251 11.8837 8.76996C11.8837 9.00975 11.8303 9.23276 11.7237 9.43899C11.617 9.64521 11.4546 9.81307 11.2365 9.94256C11.0232 10.072 10.759 10.1368 10.4439 10.1368H9.56406V9.10088ZM9.76766 5.60467H10.633V6.46073H9.76766V5.60467ZM11.1274 5.60467H12V6.46073H11.1274V5.60467Z"
                          fill="#5D6F7E"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="py-3 font-medium text-center">
                    مانده بعد از تراکنش
                  </th>
                  <th className="py-3 font-medium">شرح</th>
                </tr>
              </thead>
              <tbody className="border-b-2">
                <tr className="border-t-2">
                  <td className="text-center py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 10V10C1 5.029 5.029 0.999999 10 0.999999V0.999999C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 14L10 6"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 11L10 14L7 11"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>1400/01/08</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <div>299,300,000</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <div>299,300,000</div>
                    </div>
                  </td>
                  <td className="py-3">در حال بررسی واریزی</td>
                </tr>
                <tr className="border-t-2">
                  <td className="text-center py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 10V10C1 5.029 5.029 0.999999 10 0.999999V0.999999C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 14L10 6"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 11L10 14L7 11"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>1400/01/08</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <div>299,300,000</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <div>299,300,000</div>
                    </div>
                  </td>
                  <td className="py-3">در حال بررسی واریزی</td>
                </tr>
                <tr className="border-t-2">
                  <td className="text-center py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 10V10C1 5.029 5.029 0.999999 10 0.999999V0.999999C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 14L10 6"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 11L10 14L7 11"
                          stroke="#005BEA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div>1400/01/08</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <div>299,300,000</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="items-center justify-center gap-4 flex">
                      <div>299,300,000</div>
                    </div>
                  </td>
                  <td className="py-3">در حال بررسی واریزی</td>
                </tr>
              </tbody>
            </table>
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
      <div className="lg:hidden mx-3 mt-4">
        <div className="bg-[#F9F9F9] font-bold text-sm text-[#4B4D4D] py-4 pr-9 border-r-[3px] border-[#0547A8] mb-4">
          تراکنش‌ها
        </div>
        <div>
          <div
            className="bg-white rounded-lg p-3 font-medium mb-4"
            style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div>تاریخ</div>
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 10V10C1 5.029 5.029 0.999999 10 0.999999V0.999999C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L10 6"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 11L10 14L7 11"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>1400/01/08</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex gap-1 items-center justify-center">
                مبلغ
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.28705 1.28051C1.03497 1.80326 0.908933 2.28525 0.908933 2.72647C0.908933 3.10055 0.996191 3.38111 1.17071 3.56815C1.35007 3.75519 1.6482 3.84871 2.0651 3.84871H2.69044C3.00069 3.84871 3.23338 3.82233 3.3885 3.76958C3.54363 3.71682 3.64785 3.6257 3.70118 3.49621C3.75935 3.36672 3.78843 3.17489 3.78843 2.9207V0.661835H4.71191V2.9207C4.71191 3.52499 4.54709 4.00218 4.21745 4.35228C3.89266 4.70718 3.38365 4.88462 2.69044 4.88462H2.0651C1.62881 4.88462 1.25554 4.78871 0.94529 4.59687C0.635041 4.40504 0.399931 4.14606 0.239958 3.81993C0.0799861 3.49381 0 3.12933 0 2.72647C0 2.43392 0.0509002 2.12219 0.152701 1.79127C0.254501 1.46035 0.375692 1.15581 0.516274 0.87765L1.28705 1.28051ZM2.0651 0H3.0322V0.935201H2.0651V0Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M1.59403 10.1368C1.08502 10.1368 0.709332 9.99052 0.466949 9.69797C0.229415 9.40542 0.110647 9.01215 0.110647 8.51817V5.3313H1.03412V8.51817C1.03412 8.70042 1.04382 8.82991 1.06321 8.90664C1.08745 8.98338 1.13592 9.03613 1.20864 9.06491C1.2862 9.08889 1.41466 9.10088 1.59403 9.10088H1.8558L1.89943 9.63322L1.8558 10.1368H1.59403Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M1.78149 9.10088H1.97055C2.0675 9.10088 2.14022 9.07929 2.1887 9.03613C2.24202 8.98817 2.2808 8.91144 2.30504 8.80593L2.4941 8.11532C2.60075 7.69808 2.78011 7.37915 3.03219 7.15854C3.28426 6.93793 3.58724 6.82762 3.94112 6.82762C4.22228 6.82762 4.47193 6.90435 4.69008 7.05782C4.91307 7.2065 5.08759 7.41512 5.21363 7.68369C5.33967 7.94746 5.40268 8.24481 5.40268 8.57572C5.40268 8.97378 5.33724 9.29991 5.20635 9.55409C5.07547 9.80348 4.91065 9.98572 4.71189 10.1008C4.51799 10.2111 4.31439 10.2663 4.10109 10.2663C3.93627 10.2663 3.76176 10.2327 3.57755 10.1656C3.39818 10.1032 3.12914 9.98812 2.77041 9.82026C2.65892 9.92098 2.5353 10.0001 2.39957 10.0577C2.26383 10.1104 2.12568 10.1368 1.98509 10.1368H1.78149V9.10088ZM3.21397 8.94981C3.47575 9.0697 3.66965 9.15123 3.79569 9.1944C3.92173 9.23756 4.03565 9.25914 4.13745 9.25914C4.40407 9.25914 4.53738 9.03373 4.53738 8.58292C4.53738 8.33833 4.48405 8.15129 4.37741 8.0218C4.27076 7.88751 4.1326 7.82037 3.96293 7.82037C3.82235 7.82037 3.69874 7.87073 3.59209 7.97144C3.48544 8.07216 3.40788 8.21843 3.3594 8.41027L3.21397 8.94981Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M7.21135 10.9641C7.5119 10.9641 7.73974 10.9377 7.89487 10.885C8.04999 10.837 8.15664 10.7531 8.21481 10.6332C8.27783 10.5181 8.31418 10.3526 8.32388 10.1368H7.69854C7.23801 10.1368 6.87201 10.0049 6.60054 9.74113C6.33392 9.47256 6.20061 9.09848 6.20061 8.61889C6.20061 8.27838 6.26363 7.97624 6.38967 7.71246C6.52056 7.44869 6.6975 7.24486 6.92049 7.10099C7.14833 6.95231 7.40525 6.87798 7.69126 6.87798C8.00151 6.87798 8.27298 6.94992 8.50567 7.09379C8.7432 7.23767 8.92499 7.44149 9.05103 7.70527C9.18191 7.96904 9.24736 8.27358 9.24736 8.61889V9.10088H9.64729L9.70546 9.62603L9.64729 10.1368H9.24736C9.22797 10.6979 9.05345 11.1487 8.72381 11.4892C8.39417 11.8297 7.89002 12 7.21135 12H6.34604V10.9641H7.21135ZM7.08773 8.56853C7.08773 8.76516 7.13621 8.91144 7.23316 9.00736C7.33011 9.09848 7.48524 9.14404 7.69854 9.14404H8.32388V8.59731C8.32388 8.09853 8.11301 7.84915 7.69126 7.84915C7.49251 7.84915 7.34223 7.91629 7.24043 8.05057C7.13863 8.18486 7.08773 8.35751 7.08773 8.56853Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M9.56406 9.10088H10.3712C10.5893 9.10088 10.7445 9.06491 10.8366 8.99297C10.9287 8.91623 10.9699 8.80833 10.9602 8.66925C10.9359 8.3719 10.8729 7.97384 10.7711 7.47507L11.6437 7.25925C11.7019 7.51343 11.7552 7.7844 11.8037 8.07216C11.857 8.35991 11.8837 8.59251 11.8837 8.76996C11.8837 9.00975 11.8303 9.23276 11.7237 9.43899C11.617 9.64521 11.4546 9.81307 11.2365 9.94256C11.0232 10.072 10.759 10.1368 10.4439 10.1368H9.56406V9.10088ZM9.76766 5.60467H10.633V6.46073H9.76766V5.60467ZM11.1274 5.60467H12V6.46073H11.1274V5.60467Z"
                    fill="#5D6F7E"
                  />
                </svg>
              </div>{" "}
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                299,300,000
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex gap-1 items-center justify-center">
                مانده بعد از تراکنش
              </div>{" "}
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                299,300,000
              </div>
            </div>
            <div className="flex items-center justify-between pb-3">
              <div className="flex gap-1 items-center justify-center">شرح</div>{" "}
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                در حال بررسی واریزی
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-lg p-3 font-medium mb-4"
            style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div>تاریخ</div>
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 10V10C1 5.029 5.029 0.999999 10 0.999999V0.999999C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L10 6"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 11L10 14L7 11"
                    stroke="#005BEA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>1400/01/08</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex gap-1 items-center justify-center">
                مبلغ
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.28705 1.28051C1.03497 1.80326 0.908933 2.28525 0.908933 2.72647C0.908933 3.10055 0.996191 3.38111 1.17071 3.56815C1.35007 3.75519 1.6482 3.84871 2.0651 3.84871H2.69044C3.00069 3.84871 3.23338 3.82233 3.3885 3.76958C3.54363 3.71682 3.64785 3.6257 3.70118 3.49621C3.75935 3.36672 3.78843 3.17489 3.78843 2.9207V0.661835H4.71191V2.9207C4.71191 3.52499 4.54709 4.00218 4.21745 4.35228C3.89266 4.70718 3.38365 4.88462 2.69044 4.88462H2.0651C1.62881 4.88462 1.25554 4.78871 0.94529 4.59687C0.635041 4.40504 0.399931 4.14606 0.239958 3.81993C0.0799861 3.49381 0 3.12933 0 2.72647C0 2.43392 0.0509002 2.12219 0.152701 1.79127C0.254501 1.46035 0.375692 1.15581 0.516274 0.87765L1.28705 1.28051ZM2.0651 0H3.0322V0.935201H2.0651V0Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M1.59403 10.1368C1.08502 10.1368 0.709332 9.99052 0.466949 9.69797C0.229415 9.40542 0.110647 9.01215 0.110647 8.51817V5.3313H1.03412V8.51817C1.03412 8.70042 1.04382 8.82991 1.06321 8.90664C1.08745 8.98338 1.13592 9.03613 1.20864 9.06491C1.2862 9.08889 1.41466 9.10088 1.59403 9.10088H1.8558L1.89943 9.63322L1.8558 10.1368H1.59403Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M1.78149 9.10088H1.97055C2.0675 9.10088 2.14022 9.07929 2.1887 9.03613C2.24202 8.98817 2.2808 8.91144 2.30504 8.80593L2.4941 8.11532C2.60075 7.69808 2.78011 7.37915 3.03219 7.15854C3.28426 6.93793 3.58724 6.82762 3.94112 6.82762C4.22228 6.82762 4.47193 6.90435 4.69008 7.05782C4.91307 7.2065 5.08759 7.41512 5.21363 7.68369C5.33967 7.94746 5.40268 8.24481 5.40268 8.57572C5.40268 8.97378 5.33724 9.29991 5.20635 9.55409C5.07547 9.80348 4.91065 9.98572 4.71189 10.1008C4.51799 10.2111 4.31439 10.2663 4.10109 10.2663C3.93627 10.2663 3.76176 10.2327 3.57755 10.1656C3.39818 10.1032 3.12914 9.98812 2.77041 9.82026C2.65892 9.92098 2.5353 10.0001 2.39957 10.0577C2.26383 10.1104 2.12568 10.1368 1.98509 10.1368H1.78149V9.10088ZM3.21397 8.94981C3.47575 9.0697 3.66965 9.15123 3.79569 9.1944C3.92173 9.23756 4.03565 9.25914 4.13745 9.25914C4.40407 9.25914 4.53738 9.03373 4.53738 8.58292C4.53738 8.33833 4.48405 8.15129 4.37741 8.0218C4.27076 7.88751 4.1326 7.82037 3.96293 7.82037C3.82235 7.82037 3.69874 7.87073 3.59209 7.97144C3.48544 8.07216 3.40788 8.21843 3.3594 8.41027L3.21397 8.94981Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M7.21135 10.9641C7.5119 10.9641 7.73974 10.9377 7.89487 10.885C8.04999 10.837 8.15664 10.7531 8.21481 10.6332C8.27783 10.5181 8.31418 10.3526 8.32388 10.1368H7.69854C7.23801 10.1368 6.87201 10.0049 6.60054 9.74113C6.33392 9.47256 6.20061 9.09848 6.20061 8.61889C6.20061 8.27838 6.26363 7.97624 6.38967 7.71246C6.52056 7.44869 6.6975 7.24486 6.92049 7.10099C7.14833 6.95231 7.40525 6.87798 7.69126 6.87798C8.00151 6.87798 8.27298 6.94992 8.50567 7.09379C8.7432 7.23767 8.92499 7.44149 9.05103 7.70527C9.18191 7.96904 9.24736 8.27358 9.24736 8.61889V9.10088H9.64729L9.70546 9.62603L9.64729 10.1368H9.24736C9.22797 10.6979 9.05345 11.1487 8.72381 11.4892C8.39417 11.8297 7.89002 12 7.21135 12H6.34604V10.9641H7.21135ZM7.08773 8.56853C7.08773 8.76516 7.13621 8.91144 7.23316 9.00736C7.33011 9.09848 7.48524 9.14404 7.69854 9.14404H8.32388V8.59731C8.32388 8.09853 8.11301 7.84915 7.69126 7.84915C7.49251 7.84915 7.34223 7.91629 7.24043 8.05057C7.13863 8.18486 7.08773 8.35751 7.08773 8.56853Z"
                    fill="#5D6F7E"
                  />
                  <path
                    d="M9.56406 9.10088H10.3712C10.5893 9.10088 10.7445 9.06491 10.8366 8.99297C10.9287 8.91623 10.9699 8.80833 10.9602 8.66925C10.9359 8.3719 10.8729 7.97384 10.7711 7.47507L11.6437 7.25925C11.7019 7.51343 11.7552 7.7844 11.8037 8.07216C11.857 8.35991 11.8837 8.59251 11.8837 8.76996C11.8837 9.00975 11.8303 9.23276 11.7237 9.43899C11.617 9.64521 11.4546 9.81307 11.2365 9.94256C11.0232 10.072 10.759 10.1368 10.4439 10.1368H9.56406V9.10088ZM9.76766 5.60467H10.633V6.46073H9.76766V5.60467ZM11.1274 5.60467H12V6.46073H11.1274V5.60467Z"
                    fill="#5D6F7E"
                  />
                </svg>
              </div>{" "}
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                299,300,000
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex gap-1 items-center justify-center">
                مانده بعد از تراکنش
              </div>{" "}
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                299,300,000
              </div>
            </div>
            <div className="flex items-center justify-between pb-3">
              <div className="flex gap-1 items-center justify-center">شرح</div>{" "}
              <div className="flex flex-row-reverse gap-3 items-center text-[#173046]">
                در حال بررسی واریزی
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountWallet;
