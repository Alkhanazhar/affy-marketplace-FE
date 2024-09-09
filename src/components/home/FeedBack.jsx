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
            <h2 className="mt-4 text-3xl font-[400] text-gray-800 dark:text-zinc-100 sm:text-3xl xl:text-4xl ">
              Our happy clients say about us
            </h2>
          </div>

          <div className="relative mt-10 md:mt-8 md:order-2 cursive--font">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-3xl filter bg-gradient-to-t feedback from-red-400/60 to-red-500/40 -mt-8"></div>
            </div>
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {reviews.map((review, index) => (
                <div key={index} className="hover:-translate-y-2 duration-150">
                  <Card className="backdrop-blur bg-zinc-100/80 dark:bg-black/40">
                    <CardHeader>
                      <div className="flex">
                        {Array(review.stars)
                          .fill(0)
                          .map((_, i) => (
                            <div key={i}>
                              <Star className="fill-yellow-400 border-none text-yellow-400" />
                            </div>
                          ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 mt-4">
                      <CardDescription className="line-clamp-3 cursor-default">
                        {review.feedback}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <CardTitle className="text-base  text-gray-900 dark:text-gray-100 font-[500]">
                          {review.name}
                        </CardTitle>
                        <p className="mt-0.5 text-sm font-[400] text-gray-600 dark:text-zinc-200">
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
