import flogo from "../../../images/footer.jpg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#7ea7ff3d] text-base-content border-[#7b64ff96] border-b-2">
        <h1 className="text-center py-3 font-bold font-2 text-lg">
          Developer Information
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center md:gap-0 gap-10 bg-[#7ea7ff3d]">
        {/* person-1 */}
        <div className=" text-base-content lg:border-none border-b-2 border-[#d93fffa6]">
          <footer className="footer border-t px-10 py-4">
            <aside className="flex md:flex-row items-center justify-center flex-col">
              <div className="w-full md:w-52">
                <img
                  className="rounded-full lg:w-full w-32"
                  src={flogo}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold text-lg font-2">
                  Md. Waliur Rafiq Sami
                </h1>
                <p className="text-sm font-semibold font-1">
                  Bangladesh Army University Of Science And Technology (BAUST)
                </p>
                <p className="text-sm font-semibold font-2">
                  Hosting:{" "}
                  <span>
                    <a
                      target="_blank"
                      href=" https://github.com/Waliur-Rafiq-Sami/OHi"
                      className="link link-accent font-1"
                    >
                      https://github.com/Waliur-Rafiq-Sami/OHi
                    </a>
                  </span>
                </p>
              </div>
            </aside>
          </footer>
        </div>
        {/* person-2 */}
        <div className=" text-base-content lg:border-none border-b-2 border-[#d93fffa6]">
          <footer className="footer border-t px-10 py-4">
            <aside className="flex md:flex-row flex-col justify-center items-center">
              <div className="w-full md:w-52">
                <img
                  className="rounded-full lg:w-full w-32"
                  src={flogo}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold text-lg font-2">
                  Md. Waliur Rafiq Sami
                </h1>
                <p className="text-sm font-semibold font-1">
                  Bangladesh Army University Of Science And Technology (BAUST)
                </p>
                <p className="text-sm font-semibold font-2">
                  Hosting:{" "}
                  <span>
                    <a
                      target="_blank"
                      href=" https://github.com/Waliur-Rafiq-Sami/OHi"
                      className="link link-accent font-1"
                    >
                      https://github.com/Waliur-Rafiq-Sami/OHi
                    </a>
                  </span>
                </p>
              </div>
            </aside>
          </footer>
        </div>
        {/* person-3 */}
        <div className=" text-base-content border-base-300">
          <footer className="footer border-t px-10 py-4">
            <aside className="flex md:flex-row flex-col justify-center items-center">
              <div className="w-full md:w-52">
                <img
                  className="rounded-full lg:w-full w-32"
                  src={flogo}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold text-lg font-2">
                  Md. Waliur Rafiq Sami
                </h1>
                <p className="text-sm font-semibold font-1">
                  Bangladesh Army University Of Science And Technology (BAUST)
                </p>
                <p className="text-sm font-semibold font-2">
                  Hosting:{" "}
                  <span>
                    <a
                      target="_blank"
                      href=" https://github.com/Waliur-Rafiq-Sami/OHi"
                      className="link link-accent font-1"
                    >
                      https://github.com/Waliur-Rafiq-Sami/OHi
                    </a>
                  </span>
                </p>
              </div>
            </aside>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
