// import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const CardCommunity = ({ description, name, id }) => {
  return (
    <Card className="overflow-hidden">
      <Link to={"/community/" + id} className="inline-block mb-4 w-full">
        <img
          className="object-cover  w-full  h-[14rem]"
          src={
            "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg"
          }
          alt="image"
        />
      </Link>
      <CardContent className="cursive--font">
        <Link to={"/community/" + id} className="inline-block mb-4">
          <CardTitle className="text-xl">{name}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-3 mt-1">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardCommunity;
