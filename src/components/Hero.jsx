import gsap from "gsap";
import { useEffect, useRef } from "react";
import useGsapAnimation from "../hooks/useGsapAnimation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Star } from "lucide-react";

const Hero = () => {
  useGsapAnimation(
    ".heading, .subheading, .herobtn, .heroimg, .trusted, .hero__form, .trusted-item, .bg-div"
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
    "from-purple-500 to-pink-500 drop-shadow-xl blur w-32 h-32 md:w-48 md:h-48 rounded-tr-full absolute md:left-[60%] left-[20%] top-[10%] opacity-15",
    "from-red-500 to-yellow-500 drop-shadow-md blur w-20 h-20 md:w-28 md:h-28 absolute md:right-[20%] right-[10%] top-[60%] opacity-25 rounded-bl-lg",
    "from-indigo-500 to-blue-400 drop-shadow-sm blur w-36 h-36 md:w-52 md:h-52 rounded-full absolute md:left-[70%] left-[15%] top-[80%] opacity-10",
  ];

  return (
    <section className="overflow-hidden  lg:min-h-[800px]">
      {gradients.map((classes, index) => (
        <div
          key={index}
          className={`bg-gradient-to-tl ${classes} -z-10 trusted`}
        ></div>
      ))}
      <div className="relative px-6 lg:px-8">
        <div className="max-w-6xl pt-12 sm:pt-28 md:pt-32 lg:pt-40 mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:w-1/2 flex flex-col md:space-y-4 space-y-4">
            <h1 className="text-4xl font-medium text-black/80 sm:text-5xl lg:text-6xl xl:text-7xl heading text-center md:text-start z-10">
              Connecting <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#13160f] to-[#1394d0] ">
                Photographers
              </span>{" "}
              with Clients
            </h1>
            <p className="text-lg text-gray-400 font-[400] text-center md:text-start md:text-[18px] text-[16px] w-72 md:w-96 mx-auto md:mx-0 subheading leading-5">
              Find and hire skilled photographers for any assignment—browse
              portfolios, review profiles, and collaborate with professionals to
              bring your vision to life.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              method="POST"
              className="relative mt-4 rounded-full hero__form shadow shadow-black/20 "
            >
              <div className="relative ">
                <input
                  type="email"
                  placeholder="wedding photographer Bhopal."
                  className="block w-full py-3 pr-6 text-black/40 placeholder-gray-500 bg-secondary rounded-full pl-8 sm:py-5 focus:border-transparent border-none outline-none text-[3vw] sm:text-[1.4vw] md:text-[.8vw]"
                />
              </div>
              <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-3 sm:mt-0 ">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-[500] tracking-widest text-black/60 uppercase transition-all duration-200 bg-primary/80 rounded-full sm:w-auto sm:py-3 hover:opacity-90 text-[3vw] sm:text-[1.4vw] md:text-[.8vw]"
                >
                  Find A Photographer
                </button>
              </div>
            </form>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center mt-4 md:-mt-12 heroimg">
            <img
              ref={floatRef}
              src="camera-vector.webp"
              alt="Photographer ready for an assignment"
              className="object-cover z-50 aspect-square lg:w-[32rem] lg:h-[32rem] md:w-[25rem] md:h-[25rem] drop-shadow-xl"
              loading="lazy"
            />
            <div className="p-1 flex gap-2 absolute left-0 z-[1000] top-4 bg-black/10 items-center rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>

              <div className="mr-4">
                <p className="text-sm text-black/60">
                  {"I found the best photographer here!"}
                </p>
                <div className="flex gap-1 ">
                  <Star className="fill-red-400 text-red-400 w-3 h-3" />
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
      <section className="pb-8 max-w-6xl lg:mx-auto mx-8 w-[90%] trusted overflow-hidden md:text-[16px] text-[12px] mt-3 md:mt-0">
        <p className="text-lg  text-black/50 font-[400]">
          Trusted by 50k+ users
        </p>
      </section>
    </section>
  );
};

export default Hero;
