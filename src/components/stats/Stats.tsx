import React from "react";
import { stats } from "./index";

const Stats = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {/* <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                className="dark:hidden w-[272px] h-[572px]"
                alt=""
              /> */}
              <img
                src="/stats.png"
                className="hidden dark:block w-[272px] h-[572px]"
                alt=""
              />
            </div>
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Transforming lives through Quran and Hadith
              </h3>
              <p className="mt-3 max-w-xl">
                Our platform connects users with valuable insights and guidance,
                making a meaningful impact globally.
              </p>
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
              <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                {stats.map((item, idx) => (
                  <li key={idx} className="">
                    <h4 className="text-4xl text-primary-100 font-semibold">
                      {item.data}
                    </h4>
                    <p className="mt-3 font-medium">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
