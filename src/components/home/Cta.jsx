/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const Cta = ({ reverse, imgSrc, heading, subHeading, items }) => {
  return (
    <section className="bg-white  mb-8 pb-4 md:pb-0 max-w-7xl mx-auto border rounded-lg">
      <div
        className={`flex items-center justify-between  md:gap-10 gap-0 flex-col  ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="p-4 h-96 cta  md:w-1/2 w-full overflow-hidden rounded-lg">
          <img
            className="object-cover  heroimg w-full h-full rounded-lg"
            src={imgSrc}
            alt="cta image"
          />
        </div>

        <div className="mt-4 md:mt-0 cta md:w-1/2 w-full px-8 flex flex-col space-y-4 cta-content">
          <h2 className="lg:text-4xl font-[400] md:text-2xl text-xl text-gray-700 ">
            {heading}
          </h2>
          <p className="text-lg text-gray-400 mb-6">{subHeading}</p>
          {items?.map((item, index) => (
            <div className="flex items-start item" key={index}>
              <div className="text-primary flex items-center justify-center p-2">
                {item.icon}
              </div>
              <div className="ml-3">
                <h5 className="text-base font-medium text-gray-600 ">
                  {item.heading}
                </h5>
                <p className="text-gray-500 text-sm ">{item.subHeading}</p>
              </div>
            </div>
          ))}
          <div className="flex">
            <Button href="#" size="sm" className="w-fit">
              Get started
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
