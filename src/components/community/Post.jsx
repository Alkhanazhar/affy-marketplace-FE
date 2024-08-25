import { Heart, MessageCircle, MessageSquareShare } from "lucide-react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";

/* eslint-disable react/prop-types */
const Post = ({ textMessage, communityName }) => {
  // const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  function handleLike(e) {
    e.stopPropagation();
    console.log("/like");
  }
  function handleComment(e) {
    e.stopPropagation();
    console.log("/comment");
  }
  function handleShare(e) {
    e.stopPropagation();
    console.log("/Share");
  }
  return (
    <Card>
      <div className="flex items-center gap-2 px-6 py-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <CardTitle> {communityName}</CardTitle>
      </div>
      <CardContent>
        <CardDescription>{textMessage}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-2">
        <PostIcons onClick={handleLike}>
          <Heart className="w-6 h-6 p-1 rounded-full hover:bg-primary/60" />{" "}
          Like
        </PostIcons>
        <PostIcons onClick={handleComment}>
          <MessageCircle className="w-6 h-6 p-1 rounded-full hover:bg-primary/60 " />
          Comment
        </PostIcons>
        <PostIcons onClick={handleShare}>
          <MessageSquareShare className="w-6 h-6 p-1 rounded-full hover:bg-primary/60" />
          share
        </PostIcons>
      </CardFooter>
    </Card>
  );
};

export default Post;
export const PostIcons = ({ children, onClick }) => {
  return (
    <div className="cursor-pointer flex items-center" onClick={onClick}>
      {children}
    </div>
  );
};
