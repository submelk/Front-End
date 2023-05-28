const DesktopMenu = () => {
  return (
    <>
      <nav className="bg-[#D4D8DA] px-16 relative z-10">
        <div className="flex items-center gap-20">
          <button className="py-3 text-[#424750] text-xs font-semibold group">
            Unsere Produkte
            <div className="z-50 h-[400px] group-hover:flex hidden items-stretch absolute w-3/4 max-w-[1200px] bg-[#F5F8FA] top-[100%] rounded-lg overflow-hidden p-3 shadow text-sm">
              <div className="w-[300px] pl-6">
                <button className="bg-[#fff] px-6 py-4 w-full rounded-tl-xl rounded-bl-xl whitespace-nowrap">
                  Unsere Produkte
                </button>
              </div>
              <div className="grow bg-[#fff] -mr-3 -mt-3 -mb-3 pt-5">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className="mb-6">Text / Logo Stempel</button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                  <div className="text-center w-1/3">
                    <button className=" mb-6 px-3 transition hover:bg-white hover:text-[#58A696] rounded-xl">
                      Text / Logo Stempel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="py-3 text-[#424750] text-xs font-semibold">
            Startseite
          </button>
          <button className="py-3 text-[#424750] text-xs font-semibold">
            Kontakt
          </button>
          <button className="py-3 text-[#424750] text-xs font-semibold">
            Zahlungsarten
          </button>
        </div>
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default DesktopMenu;
