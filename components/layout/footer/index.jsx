import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" text-white mt-20">
        <div className="bg-[#424750] w-full py-8 lg:px-16 px-8">
          <div className="flex justify-center lg:justify-start">
            <input
              className="inputProj w-[480px] max-w-[75%] mr-3"
              placeholder="Geben sie ihre E-Mailadresse ein"
              type="text"
            />
            <button className="bg-[#418266] rounded-xl lg:px-5 px-2 self-stretch">
              einreichen
            </button>
          </div>

          <div className="hidden md:flex my-12 items-start px-4">
            <div className="lg:w-1/3">
              <div>Informationen</div>
              <ul className="mt-5">
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Versandoptionen</Link>
                </li>
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Zahlungsarten</Link>
                </li>
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Impressum</Link>
                </li>
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">AGB</Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <div>Wege der Kommunikation</div>
              <ul className="mt-5">
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Kontakt</Link>
                </li>
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Seitenübersicht</Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <div>Kundenservice</div>
              <ul className="mt-5">
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Konto</Link>
                </li>
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Auftragsverlauf</Link>
                </li>
                <li className="opacity-80 hover:opacity-100 text-xs mb-3">
                  <Link href="#">Wunschliste</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:hidden pt-14">
            <div className="w-1/2 flex flex-col items-start">
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Versandoptionen</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Zahlungsarten</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Impressum</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">AGB</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Kontakt</Link>
              </button>
            </div>
            <div className="w-1/2 flex flex-col items-start">
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Seitenübersicht</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Konto</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Auftragsverlauf</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Wunschliste</Link>
              </button>
              <button className="opacity-80 hover:opacity-100 text-xs mb-3">
                <Link href="#">Wunschliste</Link>
              </button>
            </div>
          </div>

          <hr className="border-[#A3A6AB]" />

          <div className="mt-6">
            <div className="flex justify-between px-4 md:pr-14">
              <div>
                <h3 className="font-bold text-3xl mb-3">Printeam</h3>
                <div className="opacity-80 text-sm">
                  <div className="mb-3">
                    EXPRESS-SERVICE ohne Expresszuschlag
                  </div>
                  <div className="mb-3">
                    Stempel jetzt bestellen, in 1 Stunde abholen!
                  </div>
                  <div className="mb-3">trodaf COLO</div>
                  <div className="mb-3">
                    Österreichweite Lieferung in 1-2 Tagen!
                  </div>
                  <div className="mb-3">
                    Versandkostenfrei ab € 100,- Bestellwert
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="mb-7 flex gap-3 items-center">
                  <Image src="/img/stamp/location.svg" width={18} height={24} />
                  <span>1050 Wien : Wiedner Hauptstraße 141-143</span>
                </div>
                <div className="mb-5 flex gap-3 items-center">
                  <Image src="/img/stamp/phone2.svg" width={18} height={18} />
                  <span>+43 (0)1 9200 146</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2C3035] text-center py-7 text-xs">
          <div>Copyright Printeam 2023</div>
        </div>
      </footer>
      <style jsx>{``}</style>
    </>
  );
};

export default Footer;
