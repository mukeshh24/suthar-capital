import { newsAndInsights } from "@/json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewsAndInsights = () => {
  return (
    <section id="news-insights" className="w-full min-h-screen">
      <div className="flex flex-col gap-10 py-15 w-full">
        <div className="flex items-center gap-5 px-4 lg:px-6">
          <span className="h-2 w-2 bg-[#181818] rounded-full"></span>
          <h4 className="text-[15px] capitalize">News & Insights</h4>
        </div>
        <div className="w-full min-h-screen flex flex-col lg:flex-row items-start gap-5 lg:gap-0 px-4 lg:px-6">
          <div className="w-full lg:w-1/2 lg:sticky top-120 xl:top-145 left-0 order-2 lg:order-1">
            <Link
              href={"/"}
              className="p-3 flex items-center justify-between w-full lg:w-2/3 pt-20 rounded-sm capitalize text-white bg-[#114167] hover:bg-[#00F2E5] hover:text-[#181818] transition-all duration-300"
            >
              <span className="font-light text-base">
                Explore More News & Insights
              </span>
              <ArrowRight />
            </Link>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col gap-5 lg:gap-0 items-start w-full">
              {newsAndInsights.map((item) => (
                <Link
                  href={"/"}
                  key={item.id}
                  className="w-full cursor-pointer group transition-all duration-300"
                >
                  <div className="flex flex-col items-start capitalize w-full  px-5 py-7 rounded-sm border-b border-gray-200 lg:group-hover:border-0 lg:group-hover:border-white lg:group-hover:bg-white max-lg:bg-white ">
                    <span className="bg-gray-300 lg:bg-gray-50 px-2 py-1 leading-0 mb-4 lg:group-hover:bg-gray-300">
                      {item.type}
                    </span>
                    <h3 className="text-2xl mb-1">{item.title}</h3>
                    <p className="text-base font-light text-gray-500">
                      {item.description}
                    </p>
                    <div className="mt-8 flex items-center justify-between w-full">
                      <span className="text-base font-light">{item.date}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndInsights;
