import HomeClientSection from "@/components/home/HomeClientSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import ForClients from "../components/home/ForClients";
import FreelanceService from "../components/home/FreelanceService";
import FeedBack from "@/components/home/FeedBack";
import Footer from "@/components/shared/Footer";
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
  useGsapAnimation(".cta, .cta__2");
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

  return (
    <>
      <Header />
      <Hero />
      <div className="cta">
        <Cta
          reverse={false}
          imgSrc="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="For Clients"
          subHeading="Connect with skilled photographers for your projects."
          items={clientItems}
          btnName="Find Photographers"
        />
      </div>
      <div className="cta__2">
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
      <Footer />
    </>
  );
};

export default Home;
