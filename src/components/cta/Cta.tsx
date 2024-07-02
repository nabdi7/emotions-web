import React from "react";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="py-14 bg-gray-500">
      <div className="max-w-screen-xl mx-auto px-4 justify-center text-center py-14">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Try Emotions Tm for free
          </h3>
          <p className="mt-3 text-gray-600">
            Available for iOS, Android, and desktop.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4 justify-center">
          <button className="btn-primary flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src="/logo-apple.png"
              alt="App Store"
              className="w-6 h-6"
            />
            App Store
          </button>
          <button className="w-full px-5 py-3 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
            <div className="flex items-center justify-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 fill-gray-600 dark:fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
              </svg>
              <p className="mx-1 text-sm text-gray-600 dark:text-white">
                Coming Soon
              </p>
            </div>
          </button>
          {/* <button className="btn-primary flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src="/logo-google.png"
              alt="Google Play"
              className="w-6 h-6"
            />
            Google Play
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Cta;
