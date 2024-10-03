import HomeClientSection from "@/components/home/HomeClientSection";
import Hero from "@/components/home/Hero";
import FreelanceService from "@/components/home/FreelanceService";
import FeedBack from "@/components/home/FeedBack";
import Cta from "@/components/home/Cta";
import {
  BriefcaseBusiness,
  Camera,
  Headset,
  MonitorCheck,
  Phone,
  User,
} from "lucide-react";

import useGsapAnimation from "@/hooks/useGsapAnimation";

const Home = () => {
  const clientItems = [
    {
      icon: <Camera />,
      heading: "Find Photographers",
      subHeading:
        "Browse portfolios and find the perfect photographer for your needs.",
    },
    {
      icon: <User />,
      heading: "Review Profiles",
      subHeading: "Read reviews and see the work of potential candidates.",
    },
    {
      icon: <Headset />,
      heading: "Hire Professionals",
      subHeading: "Contact and hire photographers who fit your vision.",
    },
  ];

  // Data for Freelancers section
  const freelancerItems = [
    {
      icon: <BriefcaseBusiness />,
      heading: "Showcase Your Work",
      subHeading:
        "Upload and display your portfolio to attract potential clients.",
    },
    {
      icon: <Phone />,
      heading: "Connect with Clients",
      subHeading:
        "Find and communicate with clients looking for photography services.",
    },
    {
      icon: <MonitorCheck />,
      heading: "Grow Your Network",
      subHeading:
        "Expand your professional network and gain more opportunities.",
    },
  ];

  useGsapAnimation(".Trusted, .cta-client");
  return (
    <>
      <Hero />
      <div className="cta-client relative max-w-7xl sm:mx-auto overflow-hidden h-fit mb-8 mx-4">
        <div className="-z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-gradient-to-r cta-client from-blue-400/80 dark:to-blue-600/80 blur-3xl opacity-40 w-full h-full "></div>
        <Cta
          reverse={false}
          imgSrc="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="For Clients"
          subHeading="Connect with skilled photographers for your projects."
          items={clientItems}
          btnName="Find Photographers"
        />
      </div>
      <div className="cta-freelancer relative max-w-7xl sm:mx-auto h-fit mx-4 mb-8">
        <div className="-z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-gradient-to-r from-blue-400/80 dark:to-blue-600/80 blur-3xl opacity-40 w-full h-full cta-freelancer mx-4"></div>
        <Cta
          reverse={true}
          imgSrc="https://images.unsplash.com/photo-1522198684868-88edd8463fc9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="For Freelancers"
          subHeading="Expand your reach and grow your photography business."
          items={freelancerItems}
          btnName="Join Us"
        />
      </div>
      <HomeClientSection />
      <FeedBack />
      <FreelanceService />
    </>
  );
};

export default Home;
