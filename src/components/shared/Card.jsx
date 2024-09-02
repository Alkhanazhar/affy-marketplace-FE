// import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const CardCommunity = ({ description, name, image, slug }) => {
  return (
    <Card className="overflow-hidden">
      <Link to={slug} className="inline-block mb-4 w-full">
        <img
          className="object-cover mix-blend-multiply w-full  h-[14rem]"
          src={image}
          alt="image"
        />
      </Link>
      <CardContent>
        <Link to={slug} className="inline-block mb-4">
          <CardTitle>{name}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-3 mt-1">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardCommunity;
