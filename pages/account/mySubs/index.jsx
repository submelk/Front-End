import React from "react";
import AccountMenu from "../../../components/layout/accountMenu";

const AccountMySubs = () => {
  return (
    <div className="container mx-auto ">
      <div
        className=" flex mt-9 mx-3 lg:mx-16 bg-white rounded-xl pb-4 pt-7 lg:py-7 lg:px-5"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
      >
        <AccountMenu />
        <div className="w-full lg:w-auto lg:grow -ml-5">
          <div className="px-5 lg:px-12 pb-5 border-b-4 w-full">
            <div className="text-[#173046] font-bold">صاب‌های من</div>
            <div className="text-[#5D6F7E] font-medium text-xs mt-4">
              اطلاعات این صفحه پایان زمان اداری بروز رسانی می‌شود.
            </div>
          </div>

          <div className="px-2 lg:px-16 flex items-center justify-between mt-8 mb-4 flex-wrap gap-2 lg:gap-0">
            <div className="bg-[#005BEA] border border-[#EAEEF3] flex items-center justify-between px-4 lg:px-0 py-3 lg:py-0 lg:justify-around flex-row-reverse lg:flex-col w-full lg:w-[200px] lg:h-[200px] rounded-[10px] overflow-hidden">
              <div className="rounded-[800px] bg-white font-bold lg:text-xl text-lg lg:w-[160px] w-[120px] py-2 lg:py-0 lg:h-[69px] flex items-center justify-center text-[#005BEA]">
                34
              </div>
              <div className="font-medium text-white lg:text-sm text-xs">
                تعداد پروژه
              </div>
            </div>
            <div className="bg-[#005BEA] border border-[#EAEEF3] flex items-center justify-between px-4 lg:px-0 py-3 lg:py-0 lg:justify-around flex-row-reverse lg:flex-col w-full lg:w-[200px] lg:h-[200px] rounded-[10px] overflow-hidden">
              <div className="rounded-[800px] bg-white font-bold lg:text-xl text-lg lg:w-[160px] w-[120px] py-2 lg:py-0 lg:h-[69px] flex items-center justify-center text-[#005BEA]">
                34
              </div>
              <div className="font-medium text-white lg:text-sm text-xs">
                تعداد صاب‌های موجود
              </div>
            </div>
            <div className="bg-[#005BEA] border border-[#EAEEF3] flex items-center justify-between px-4 lg:px-0 py-3 lg:py-0 lg:justify-around flex-row-reverse lg:flex-col w-full lg:w-[200px] lg:h-[200px] rounded-[10px] overflow-hidden">
              <div className="rounded-[800px] bg-white font-bold lg:text-xl text-lg lg:w-[160px] lg:h-[69px] py-2 lg:py-0 px-2 lg:px-0 flex items-center justify-center text-[#005BEA]">
                ۲۰۸,900,000
              </div>
              <div className="font-medium text-white lg:text-sm text-xs">
                ارزش کل صاب‌های موجود
              </div>
            </div>
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
          .tabActive {
            color: #005bea;
            font-weight: bold;
          }
          .tabActive::after {
            width: 32px !important;
            bottom: -16px;
          }
        `}</style>
      </div>
      <div className="lg:hidden mx-3 mt-4">
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

export default AccountMySubs;
