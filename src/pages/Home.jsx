import HomeClientSection from "@/components/home/HomeClientSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FreelanceService from "@/components/home/FreelanceService";
import FeedBack from "@/components/home/FeedBack";
import Footer from "@/components/shared/Footer";
import Cta from "@/components/home/Cta";
import Autoplay from "embla-carousel-autoplay";
import {
  Briefcase,
  BriefcaseBusiness,
  Building,
  Camera,
  Globe,
  Headset,
  Monitor,
  MonitorCheck,
  Phone,
  Server,
  User,
} from "lucide-react";
import useGsapAnimation from "@/hooks/useGsapAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Home = () => {
  useGsapAnimation(".cta-client, .cta-freelancer , .carousel-autoplay");

  // Define companies array with color property
  const companies = [
    {
      name: "TechCorp",
      icon: <Monitor width={100} height={100} />,
      color: "bg-blue-200",
    },
    {
      name: "PhotoPro",
      icon: <Camera width={100} height={100} />,
      color: "bg-green-200",
    },
    {
      name: "GlobalComm",
      icon: <Globe width={100} height={100} />,
      color: "bg-red-200",
    },
    {
      name: "SecureNet",
      icon: <Server width={100} height={100} />,
      color: "bg-yellow-200",
    },
    {
      name: "BizSolutions",
      icon: <Briefcase width={100} height={100} />,
      color: "bg-pink-200",
    },
    {
      name: "BuildCo",
      icon: <Building width={100} height={100} />,
      color: "bg-purple-200",
    },
    {
      name: "MobileX",
      icon: <Phone width={100} height={100} />,
      color: "bg-teal-200",
    },
  ];

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

  return (
    <>
      <Header />
      <Hero />
      <div className="max-w-7xl md:mx-auto md:-mt-32 my-4 carousel-autoplay mx-4">
        <p className="text-lg  text-black/50 font-[400]">
          Trusted by top companies and 50k+ peoples.
        </p>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full md:py-10 py-5"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 ">
                <h2 className="md:text-2xl text-xl cursive--font font-[600] text-neutral-500">
                  {item.name}
                </h2>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="cta-client">
        <Cta
          reverse={false}
          imgSrc="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="For Clients"
          subHeading="Connect with skilled photographers for your projects."
          items={clientItems}
          btnName="Find Photographers"
        />
      </div>
      <div className="cta-freelancer">
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
