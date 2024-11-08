"use client";
import React, { useState } from "react";
import { tabsData } from "./index";
import Image from "next/image";

const Features = () => {
  const [activeTab, setActiveTab] = useState("tabs-with-card-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-center text-3xl font-semibold py-5 text-gray-800 sm:text-3xl mb-4">All-in-one place</h2>
        <nav
          className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4"
          aria-label="Tabs"
          role="tablist"
        >
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`w-full flex flex-col text-start p-3 md:p-5 rounded-xl ${
                activeTab === tab.id ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-800"
              }`}
              id={`${tab.id}-item`}
              data-hs-tab={`#${tab.id}`}
              aria-controls={tab.id}
              role="tab"
              onClick={() => handleTabClick(tab.id)}
            >
              {React.cloneElement(tab.icon, {
                className: `flex-shrink-0 hidden sm:block size-7 ${
                  activeTab === tab.id ? "text-white" : "text-gray-800"
                }`,
              })}
              <span className="mt-5">
                <span
                  className={`block font-semibold ${
                    activeTab === tab.id ? "text-white" : "text-gray-800"
                  }`}
                >
                  {tab.title}
                </span>
                <span
                  className={`hidden lg:block mt-2 ${
                    activeTab === tab.id ? "text-white" : "text-gray-800"
                  }`}
                >
                  {tab.description}
                </span>
              </span>
            </button>
          ))}
        </nav>
        <div className="mt-12 md:mt-16">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`${activeTab === tab.id ? "" : "hidden"}`}
              role="tabpanel"
              aria-labelledby={`${tab.id}-item`}
            >
              <div className="max-w-[1140px] lg:pb-32 relative">
                <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
                  <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] dark:bg-neutral-700">
                    <Image
                      className="max-w-full rounded-[1.25rem] h-auto"
                      width={800}
                      height={500}
                       src={tab.imageSmall}
                      alt="Image Description"
                    />
                  </div>
                </figure>
                <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] lg:rounded-tl-[16rem] rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    width={800}
                    height={500}
                    src={tab.image}
                    alt="Image Description"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
