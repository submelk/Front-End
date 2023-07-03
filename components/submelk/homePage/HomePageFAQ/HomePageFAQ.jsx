import Image from "next/image";
import { useState } from "react";

const HomePageFAQ = ({ faq }) => {
  const [openOne, setOpenOne] = useState("");
  console.log({ faq });

  return (
    <>
      <div>
        <div className="font-semibold text-[#363636]">
          {faq?.map(({ id, questions, answers, date }) => (
            <div key={id} className="bg-white p-4 rounded-[10px] mb-4">
              <button
                onClick={() => {
                  if (id === openOne) setOpenOne("");
                  else setOpenOne(id);
                }}
                className="flex items-center justify-between gap-3 text-[#173046] w-full"
              >
                <span>{questions}</span>
                {openOne === id ? (
                  <Image src="/img/submelk/minus.svg" width="19" height="19" />
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
    </>
  );
};

export default HomePageFAQ;
