import gsap from "gsap";
import { useEffect, useRef } from "react";
import useGsapAnimation from "@/hooks/useGsapAnimation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { imageSrc } from "../../../constants/constatns";
import Marquee from "../shared/Marquee";

const Hero = () => {
  useGsapAnimation(
    ".heading, .subheading, .herobtn, .getStarted, .heroimg, .trusted, .hero__form, .trusted-item, .bg-div, .marquee"
  );

  const floatRef = useRef(null);
  useEffect(() => {
    gsap.to(floatRef.current, {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  const gradients = [
    "from-primary to-secondary drop-shadow-md blur md:w-40 md:h-40 w-32 h-32 absolute md:left-[20%] left-[50%] top-[50%] opacity-10",
    "from-green-400 to-blue-500 drop-shadow-lg blur w-24 h-24 md:w-36 md:h-36 rounded-full absolute md:left-[10%] left-[40%] top-[30%] opacity-20",
    "from-purple-500 to-pink-500 drop-shadow-xl blur w-32 h-32 md:w-48 md:h-48 rounded-tr-full absolute md:left-[50%] left-[20%] top-[40%] opacity-15",
    "from-red-500 to-yellow-500 drop-shadow-md blur w-20 h-20 md:w-28 md:h-28 absolute md:right-[20%] right-[10%] top-[60%] opacity-25 rounded-bl-lg",
    "from-indigo-500 to-blue-400 drop-shadow-sm blur w-36 h-36 md:w-52 md:h-52 rounded-full absolute md:left-[70%] left-[15%] top-[20%] opacity-10",
  ];

  return (
    <section className="overflow-hidden lg:min-h-[800px]">
      {gradients.map((classes, index) => (
        <div
          key={index}
          className={`bg-gradient-to-tl ${classes} -z-10 trusted`}
        ></div>
      ))}
      <div className="relative px-6 lg:px-8">
        <div className="max-w-6xl pt-12 sm:pt-28 md:pt-32 lg:pt-40 mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:w-1/2 flex flex-col md:space-y-4 space-y-4">
            <h1 className="text-4xl font-medium    dark:text-white/80  sm:text-5xl lg:text-6xl xl:text-7xl heading text-center md:text-start ">
              Connecting <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white  from-[#161616c9] dark:to-[#1394d0] to-[#1394d0] ">
                Photographers
              </span>{" "}
              with Clients
            </h1>
            <p className=" dark:text-gray-400 text-gray-500 font-[400] cursive--font text-center md:text-start md:text-[16px] text-[14px] w-72 md:w-96 mx-auto md:mx-0 subheading leading-5 my-8">
              Find and hire skilled photographers for any assignment—browse
              portfolios, review profiles, and collaborate with professionals to
              bring your vision to life.
            </p>

            <div className="getStarted mt-4 flex justify-center md:justify-start">
              <Button
                size="lg"
                className="text-lg text-neutral-100 shadow"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center mt-4 md:-mt-12 heroimg">
            <img
              ref={floatRef}
              src="camera-vector.webp"
              alt="Photographer ready for an assignment"
              className="object-cover -z-10 aspect-square lg:w-[32rem] lg:h-[32rem] md:w-[25rem] md:h-[25rem] drop-shadow-xl"
              loading="lazy"
            />
            <div className="p-1 flex gap-2 absolute left-0 top-4  dark:bg-zinc-100/20 items-center  backdrop-blur bg-black/20 rounded-full">
              <Avatar w={"10"} h={"10"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>

              <div className="mr-4 ">
                <p className="text-sm text-black/70 dark:text-zinc-100 ">
                  {"I found the best photographer here!"}
                </p>
                <div className="flex gap-1 ">
                  <Star className="fill-red-400 text-red-400 w-3 h-3" />
                  <Star className="fill-red-400 text-red-400 w-3 h-3" />
                  <Star className="fill-red-400 text-red-400 w-3 h-3" />
                  <Star className="fill-red-400 text-red-400 w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee">
        <Marquee images={imageSrc} />
      </div>
    </section>
  );
};

export default Hero;
