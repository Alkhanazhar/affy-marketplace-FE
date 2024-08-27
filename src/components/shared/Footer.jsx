// import useGsapAnimation from "@/hooks/useGsapAnimation";
import { brand } from "../../../constants/constatns";
// import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from "lucide-react";

const Footer = () => {
  const items = [
    {
      title: "Services",
      items: [
        "Photography Sessions",
        "Event Photography",
        "Portrait Photography",
        "Wedding Photography",
        "Product Photography",
        "Photo Editing",
        "Photo Retouching",
        "Portfolio Creation",
        "Custom Photography Packages",
      ],
    },
    {
      title: "Products",
      items: [
        "Prints and Wall Art",
        "Photo Books",
        "Digital Downloads",
        "Stock Photos",
        "Photography Gear",
        "Photography Courses",
        "Photography Workshops",
      ],
    },
    {
      title: "Resources",
      items: [
        "Photography Blog",
        "Tutorials and Guides",
        "Photography Community",
        "Equipment Reviews",
        "Inspiration Gallery",
      ],
    },
    {
      title: "Support",
      items: [
        "Customer Support",
        "Hire a Photographer",
        "Report an Issue",
        "Service Status",
      ],
    },
    {
      title: "Company",
      items: [
        "About Us",
        "Contact Us",
        "Press & Media",
        "Investor Relations",
        "Accessibility Statement",
        "Careers",
        "Sitemap",
        "Privacy Policy",
      ],
    },
  ];

  return (
    <footer className="pt-10  border-b border-t  cursive--font bg-white ">
      <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4">
        {items.map((item) => {
          return (
            <div key={item.title} className="px-4 md:px-0 footer">
              <h2 className="font-medium text-[16px] mb-4">{item.title}</h2>
              {item.items.map((item) => {
                return (
                  <div key={item} className="text-sm mb-2 ">
                    <span className="cursor-pointer text-gray-600 text-[400] hover:text-primary">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <footer className="py-4  cursive--font  text-gray-700 max-w-7xl text-center text-sm w-[90%] footer mx-auto border-t">
        © 2015 - 2024 {brand} Global Inc. <br />
        Privacy Policy
      </footer>
    </footer>
  );
};

export default Footer;
