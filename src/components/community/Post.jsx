// eslint-disable-next-line no-unused-vars
import { Heart, MessageCircle, ScreenShare } from "lucide-react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";

const Post = ({ textMessage, communityName }) => {
  const params = useParams();
  console.log(params);

  // eslint-disable-next-line no-unused-vars
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
      <div className="flex items-center gap-2 px-6 py-4 cursive--font overflow-hidden">
        <Avatar w={"10"} h={"10"}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <CardTitle className="text-black/80 dark:text-zinc-200 md:text-xl text-base font-medium">
          {" "}
          {communityName}
        </CardTitle>
      </div>
      <CardContent className="cursor-pointer">
        <CardDescription className="cursive--font dark:text-zinc-300 font-normal">
          {textMessage}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-2">
        {/* <PostIcons onClick={handleLike}>
          <Heart className="w-4 h-4  hover:fill-primary/60 dark:text-zinc-200" />{" "}
          Like
        </PostIcons> */}
        <PostIcons onClick={handleComment}>
          <MessageCircle className="w-4 h-4 hover:fill-primary/60 dark:text-zinc-200" />
          Comment
        </PostIcons>
        <PostIcons onClick={handleShare}>
          <ScreenShare className="w-4 h-4  hover:fill-primary/60 dark:text-zinc-200" />
          share
        </PostIcons>
      </CardFooter>
    </Card>
  );
};

export default Post;
export const PostIcons = ({ children, onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center dark:text-slate-400 cursive--font text-sm gap-2 text-slate-700 hover:text-primary"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
