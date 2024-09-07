import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { brand } from "../../constants/constatns";

const MainLayout = () => {
  const [intro, setIntro] = useState(false);
  // const navigate = useNavigate();
  const tl = gsap.timeline({
    onComplete: () => {
      setIntro(true);
    },
  });
  useGSAP(() => {
    tl.to(".show", {
      height: "100%",
      duration: 1,
      ease: "circ.inOut",
    })
      .to(".heading", {
        opacity: 1,
        y: -30,
        duration: 1,
      })
      .to("heading span", {
        x: 10,
        ease: "circ.inOut",
        stagger: 0.2, // Staggering duration
        duration: 0.6, // Duration of opacity animation
      })
      .to(".heading span", {
        stagger: 0.2, // Staggering duration
        duration: 1, // Duration of opacity animation
        x: -100,
        opacity: 0,
      })
      .to(".heading-2", {
        opacity: 1,
        y: -30,
        duration: 1,
      })
      .to("heading-2 span", {
        x: 10,
        ease: "circ.inOut",
        stagger: 0.2, // Staggering duration
        duration: 0.6, // Duration of opacity animation
      })
      .to(".heading-2 span", {
        stagger: 0.2, // Staggering duration
        duration: 1, // Duration of opacity animation
        x: -100,
        opacity: 0,
      })
      .to(".camera", {
        duration: 1.2,
        opacity: 1,
      })
      .to(".show", {
        ease: "elastic.inOut",
        y: 1000,
        height: 0,
        duration: 1.6,
        // opacity: 0,
      });
  }, []);

  if (!intro) {
    return (
      <div className="h-screen bg-white dark:bg-[#060C1B] flex justify-center items-center overflow-hidden w-screen relative ">
        <div className="line w-full show  bg-primary/90  flex justify-center items-center ">
          <h1 className="flex gap-2 sm:text-6xl font-semibold heading opacity-0 block-head text-3xl  absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] text-white dark:text-[#060C1B]">
            <span>Welcome</span>
            <span>to</span>
            <span>{brand}</span>
          </h1>
          <h1 className="flex gap-2 heading-2 opacity-0 block-head text-3xl  sm:text-6xl font-semibold absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white dark:text-[#060C1B]">
            <span>Find</span>
            <span>and</span>
            <span>hire</span>
            <span>skilled</span>
            <span>photographers</span>
          </h1>
          <div>
            <img
              src="camera-vector.webp"
              alt=""
              className="w-96 h-96 opacity-0 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] camera"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
};

export default MainLayout;
