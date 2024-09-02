
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (targets, triggerOptions = {}) => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: targets,
                start: "top 80%",
                end: "bottom 20%",
                scrub: false,
                markers: false,
                ...triggerOptions,
            },
        });
        tl.from(targets, {
            y: 10,
            opacity: 0,
            delay: 0.3,
            duration: 0.4,
            stagger: 0.2,
            ease: "power1.out",
        });
    }, [targets, triggerOptions]);
};

export default useGsapAnimation;
