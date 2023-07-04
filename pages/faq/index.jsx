import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import ReactModal from "react-modal";
import { getFaq } from "../../APIGate/public";

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
    width: "800px",
  },
};

const FAQ = () => {
  const [openOne, setOpenOne] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { data } = useQuery(["getFaq"], getFaq, {
    // initialData: preData,
  });
  console.log({ data });

  return (
    <>
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
            به سوال من پاسخ داده نشده است
          </span>
        </div>

        <form className="flex flex-wrap items-center justify-between">
          <div className="w-full px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                سوال من
              </span>
              <textarea
                type="text"
                className="resize-none border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>{" "}
          </div>
          <div className="w-full lg:w-1/3 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                نام و نام خانوادگی
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/3 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                ایمیل
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="w-full lg:w-1/3 px-6">
            <label className="relative mt-14 block">
              <span className="absolute bg-white text-sm right-3 -top-3 px-2">
                شماره موبایل
              </span>
              <input
                type="text"
                className="border border-[#DEE6EF] rounded-lg w-full p-3"
              />
            </label>
          </div>
          <div className="text-[#FF006E] font-medium text-xs mt-4 px-6">
            درصورت تمایل برای دریافت فوری پاسخ خود اطلاعات تماس را وارد کنید.
          </div>

          <div className="w-full flex items-center justify-center gap-6 mt-12 text-sm font-medium">
            <button className="bg-[#005BEA] text-white px-14 py-4 rounded-lg">
              ثبت سوال
            </button>
          </div>
        </form>
      </ReactModal>
      <div
        className="text-center text-sm fixed inset-0 w-full h-full bg-no-repeat -z-10"
        style={{
          backgroundImage: "url(/img/submelk/pattern2.svg)",
          backgroundPosition: "left bottom",
        }}
      ></div>
      <div>
        <div className="container mx-auto lg:px-16 px-3">
          <div className="text-[#005BEA] font-bold text-xl mt-16 mb-6">
            پرسش‌های متداول
          </div>
          <div className="font-semibold text-[#363636]">
            {data?.data?.map(({ id, answers, questions }) => (
              <div key={id} className="bg-white p-4 rounded-[10px] mb-4">
                <button
                  onClick={() => {
                    if (id === openOne) setOpenOne("");
                    else setOpenOne(id);
                  }}
                  className="flex items-center justify-between gap-3 text-[#005BEA] font-bold w-full"
                >
                  <span className="text-right">{questions}</span>
                  {openOne === id ? (
                    <Image
                      src="/img/submelk/minus.svg"
                      width="19"
                      height="19"
                    />
                  ) : (
                    <Image src="/img/submelk/plus.svg" width="19" height="19" />
                  )}
                </button>
                <div
                  className={`${
                    openOne === id
                      ? "max-h-screen opacity-100 visible"
                      : "max-h-0 opacity-0 invisible"
                  } font-normal`}
                  style={{ transition: ".4s" }}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: answers }}
                    className="text-[#5D6F7E] text-sm py-4"
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:px-16 px-3 sticky w-full bottom-0 right-0 left-0 border-t-4 mt-9 py-5 border-[#EDEEF2] bg-white flex items-center justify-around">
          <div className="flex flex-col lg:flex-row items-center w-full mx-auto border rounded-lg px-3">
            <div className=" grow py-4 text-[#173046] font-bold">
              به سوال من پاسخ داده نشده است
            </div>

            <button
              onClick={() => setModalIsOpen(true)}
              className="flex items-center justify-center gap-2 text-[#FF006E] text-sm font-bold lg:border-r self-stretch pr-3"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 9H11V1.5C11 1.23478 10.8946 0.98043 10.7071 0.792893C10.5196 0.605357 10.2652 0.5 10 0.5C9.73478 0.5 9.48043 0.605357 9.29289 0.792893C9.10536 0.98043 9 1.23478 9 1.5V9H1.5C1.23478 9 0.98043 9.10536 0.792893 9.29289C0.605357 9.48043 0.5 9.73478 0.5 10C0.5 10.2652 0.605357 10.5196 0.792893 10.7071C0.98043 10.8946 1.23478 11 1.5 11H9V18.5C9 18.7652 9.10536 19.0196 9.29289 19.2071C9.48043 19.3946 9.73478 19.5 10 19.5C10.2652 19.5 10.5196 19.3946 10.7071 19.2071C10.8946 19.0196 11 18.7652 11 18.5V11H18.5C18.7652 11 19.0196 10.8946 19.2071 10.7071C19.3946 10.5196 19.5 10.2652 19.5 10C19.5 9.73478 19.3946 9.48043 19.2071 9.29289C19.0196 9.10536 18.7652 9 18.5 9Z"
                  fill="#FF006E"
                />
              </svg>
              افزودن سوال
            </button>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          body {
            background-color: #f7f8fc;
          }
        `}
      </style>
    </>
  );
};

export default FAQ;
