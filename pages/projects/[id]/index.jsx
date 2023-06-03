import Image from "next/image";

const ProjectId = () => {
  return (
    <div className="container mx-auto px-3 pt-14">
      <section className="flex items-stretch gap-[6px] rounded-[14px] overflow-hidden">
        <div className="w-1/2">
          <div className="relative w-full h-[375px]">
            <Image
              src="/img/submelk/homeMain.png"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="w-1/2 flex h-full gap-[6px]">
          <div className="w-1/2 flex flex-col justify-between h-full gap-[6px]">
            <div className="relative w-full h-[177px]">
              <Image
                src="/img/submelk/homeMain1.png"
                className="object-cover"
                fill
              />
            </div>
            <div className="relative w-full h-[192px]">
              <Image
                src="/img/submelk/homeMain2.png"
                className="object-cover"
                fill
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between h-full gap-[6px]">
            <div className="relative w-full h-[177px]">
              <Image
                src="/img/submelk/homeMain3.png"
                className="object-cover"
                fill
              />
            </div>
            <div className="relative w-full h-[192px]">
              <Image
                src="/img/submelk/homeMain4.png"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-6">
        <div className="grow">
          <div
            className="rounded-[10px] mt-4 p-8 text-[#173046]"
            style={{ "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="flex items-center justify-between border-b-4 pb-5 border-b-[#F7F8FC] -mx-8 px-8">
              <div>
                <div className="font-bold text-[#173046]">
                  پروژه ساختمانی الماس یزدانشاه
                </div>
                <div className="text-sm font-medium gap-4 flex items-center mt-4">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.69971 9.20792V9.05025C4.69971 5.57058 7.52029 2.75 11 2.75V2.75C14.4796 2.75 17.3002 5.57058 17.3002 9.05025V9.20792C17.3002 12.3805 13.2834 17.1563 11.6645 18.953C11.308 19.349 10.692 19.349 10.3354 18.953C8.71654 17.1563 4.69971 12.3805 4.69971 9.20792Z"
                      stroke="#5D6F7E"
                      stroke-width="1.4468"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16663 9.12541C9.16663 10.1383 9.98704 10.9587 11 10.9587V10.9587C12.0129 10.9587 12.8333 10.1383 12.8333 9.12541V9.0915C12.8333 8.07858 12.0129 7.25816 11 7.25816V7.25816C9.98704 7.25816 9.16663 8.07858 9.16663 9.0915"
                      stroke="#5D6F7E"
                      stroke-width="1.4468"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  تهران، بلوار میرداماد
                </div>
              </div>
              <div className="text-center">
                <Image
                  src="/img/submelk/homeMain.png"
                  width="70"
                  height="70"
                  className="rounded-[20px] mx-auto mb-3 border-[#FF006E] border h-[70px] p-[2px]"
                />
                <div className="flex items-center gap-2 text-sm font-medium">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00004 8.25C6.35831 8.25 5.01421 6.90651 5.01421 5.26417H3.51421C3.51421 7.73516 5.5301 9.75 8.00004 9.75V8.25ZM5.01421 5.26417C5.01421 3.61444 6.36565 2.25 8.00004 2.25V0.75C5.52276 0.75 3.51421 2.80056 3.51421 5.26417H5.01421ZM8.00004 2.25C9.64177 2.25 10.9859 3.59349 10.9859 5.23583H12.4859C12.4859 2.76484 10.47 0.75 8.00004 0.75V2.25ZM10.9859 5.23583C10.9859 6.88556 9.63443 8.25 8.00004 8.25V9.75C10.4773 9.75 12.4859 7.69944 12.4859 5.23583H10.9859ZM13.8334 15.75H2.16671V17.25H13.8334V15.75ZM2.16671 15.75C2.14612 15.75 2.12587 15.7423 2.1085 15.7249C2.09112 15.7075 2.08337 15.6873 2.08337 15.6667H0.583374C0.583374 16.5392 1.29416 17.25 2.16671 17.25V15.75ZM2.08337 15.6667V14.8333H0.583374V15.6667H2.08337ZM2.08337 14.8333C2.08337 13.4142 3.24759 12.25 4.66671 12.25V10.75C2.41916 10.75 0.583374 12.5858 0.583374 14.8333H2.08337ZM4.66671 12.25H11.3334V10.75H4.66671V12.25ZM11.3334 12.25C12.7525 12.25 13.9167 13.4142 13.9167 14.8333H15.4167C15.4167 12.5858 13.5809 10.75 11.3334 10.75V12.25ZM13.9167 14.8333V15.6667H15.4167V14.8333H13.9167ZM13.9167 15.6667C13.9167 15.6873 13.909 15.7075 13.8916 15.7249C13.8742 15.7423 13.854 15.75 13.8334 15.75V17.25C14.7059 17.25 15.4167 16.5392 15.4167 15.6667H13.9167Z"
                      fill="#5D6F7E"
                    />
                  </svg>
                  مهندس گنجی
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="lg:w-1/2 flex items-center justify-between font-medium">
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    4,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/metraj.svg"
                      width="20"
                      height="20"
                    />
                    متراژ
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>
                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    15
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image
                      src="/img/submelk/vahed.svg"
                      width="20"
                      height="20"
                    />
                    واحد
                  </div>
                </div>
                <div className="h-[44px] w-[1px] bg-[#EAEEF3]"></div>

                <div className="">
                  <div className="text-center py-1 px-2 bg-[#F4F4F4] rounded-md mb-4">
                    44,500
                  </div>
                  <div className="flex items-center text-sm text-[#5D6F7E] justify-center gap-1">
                    <Image src="/img/submelk/sub.svg" width="15" height="15" />
                    صاب
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">sd</div>
            </div>
          </div>
        </div>
        <div className="w-[287px]">1</div>
      </section>
    </div>
  );
};

export default ProjectId;
