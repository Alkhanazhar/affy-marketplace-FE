import useGsapAnimation from "@/hooks/useGsapAnimation";
import { ArrowRight } from "lucide-react";

const items = [
  {
    name: "Tele market place",
    description: "Post a job and hire a pro",
  },
  {
    name: "Project Catalog",
    description: "Browse and  buy projects",
  },
  {
    name: "Consultations",
    description: "Get advice from an industry expert",
  },
];

const HomeClientSection = () => {
  useGsapAnimation(".forClients");
  return (
    <section className="mb-4 forClients ">
      <div className="lg:max-w-7xl w-[95%] mx-auto rounded-lg bg-gradient-to-t from-[#2f39628a] to-[#0000009b]  via-[#00000032] p-6 relative overflow-hidden dark:border">
        <img
          src="camera-women.webp"
          alt=""
          className="absolute w-full left-0 top-0 bg-top h-full -z-10 object-cover"
        />
        <div className="md:text-4xl text-2xl font-normal text-zinc-100">
          For clients
        </div>
        <div className="flex flex-col space-y-4 text-zinc-100 lg:mt-60 md:mt-52 mt-32 ">
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl md:mt-0 leading-none font-medium text-zinc-100">
            Find talent <br />
            your way
          </h1>
          <p className="md:w-96 w-72 text-[10px] md:text-[14px] md:font-normal md:leading-5 cursive--font">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          <div className="w-full flex md:mt-12 mt-8 justify-between lg:gap-4 md:gap-3 gap-2 flex-col md:flex-row">
            {items.map((item, index) => (
              <div
                className="md:p-4 p-2 md:h-36 w-full text-2xl hover:bg-white/90 rounded-lg cursor-pointer flex flex-col justify-between gap-2 bg-primary/80 hover:text-primary duration-250 hover:-translate-y-2 duration-150 backdrop-blur-sm"
                key={index}
              >
                <h1 className="lg:text-3xl md:text-xl text-xl font-medium lg:w-68 leading-none">
                  {item.description}
                </h1>
                <div className="flex">
                  <p className="md:text-sm text-xs">{item.name}</p>
                  <span>
                    <ArrowRight className="ml-2 w-5 h-5 md:w-5 md:h-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClientSection;
