import useGsapAnimation from "@/hooks/useGsapAnimation";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const FeedBack = () => {
  useGsapAnimation(".feedback");
  const reviews = [
    {
      name: "Emily Watson",
      role: "Pre-Wedding Shoot Client",
      image:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
      feedback:
        "The pre-wedding shoot was an amazing experience! The photographer captured our moments beautifully, and the final photos are stunning.",
      stars: 4,
    },
    {
      name: "Michael Brown",
      role: "Wedding Photography Client",
      image:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
      feedback:
        "The wedding photos turned out even better than we imagined. Every detail was captured perfectly, and the memories will last a lifetime.",
      stars: 4,
    },
    {
      name: "Sophia Davis",
      role: "Event Photography Client",
      image:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
      feedback:
        "I couldn’t be happier with the event photos. The photographer really understood what we were looking for and delivered exceptional results.",
      stars: 5,
    },
  ];

  return (
    <section className="py-4 sm:py-12 lg:py-4 my-4 feedback mx-4 md:mx-0">
      <div className="md:px-4  mx-auto max-w-7xl sm:px-6 lg:px-0">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-[400] text-gray-600 ">
              2,157 people have said how good Rareblocks
            </p>
            <h2 className="mt-4 text-3xl font-[400] text-gray-800 sm:text-3xl xl:text-4xl ">
              Our happy clients say about us
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              title=""
              className="pb-2 text-base font-medium leading-7 text-gray-700 transition-all duration-200 border-b-2 border-gray-600 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Check all 21,157 reviews
            </a>
          </div>

          <div className="relative mt-10 md:mt-16 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-xl filter bg-gradient-to-t from-primary to-secondary"></div>
            </div>
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {reviews.map((review, index) => (
                <div key={index} className="hover:-translate-y-2 duration-150">
                  <Card>
                    <CardHeader>
                      <div className="flex">
                        {Array(review.stars)
                          .fill(0)
                          .map((_, i) => (
                            <div key={i}>
                              <Star className="fill-yellow-300 border-none text-yellow-300" />
                            </div>
                          ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 mt-8">
                      <CardDescription>{review.feedback}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <CardTitle className="text-base  text-gray-900 font-[500]">
                          {review.name}
                        </CardTitle>
                        <p className="mt-0.5 text-sm font-[400] text-gray-600">
                          {review.role}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
