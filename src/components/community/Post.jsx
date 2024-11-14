// eslint-disable-next-line no-unused-vars
import { Heart, MessageCircle, ScreenShare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { timeAgo } from "../../../constants/constatns";
import { baseUrl } from "@/App";


const Post = ({ item, showMessage }) => {
  function handleShare(e) {
    e.stopPropagation();
    console.log("/Share");
  }
  

  const image = baseUrl + "uploads/"+item.userId.avatar
  console.log(item,"item");
  return (
    <Card>
      <div className="flex items-center gap-2 px-6 py-3 cursive--font overflow-hidden">
        <Avatar w={"10"} h={"10"}>
          <AvatarImage src={image || "https://github.com/shadcn.png"} />
          <AvatarFallback className="uppercase">
            {item?.userId?.name?.split("")[0]}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-black/80 dark:text-zinc-200 text-base font-medium">
          {item.userId.name}
          <div className="text-sm text-gray-500 font-normal">
            {timeAgo(new Date(item?.updatedAt))}
          </div>
        </CardTitle>
      </div>
      <CardContent className="cursor-pointer mb-2">
        <CardDescription
          className="cursive--font dark:text-zinc-300 font-normal text-base "
          onClick={showMessage}
        >
          {item?.textMessage}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col justify-start gap-2 items-start ">
        {/* <PostIcons onClick={handleLike}>
          <Heart className="w-4 h-4  hover:fill-primary/60 dark:text-zinc-200" />{" "}
          Like
        </PostIcons> */}
        <div className="flex justify-start gap-6">
          <PostIcons onClick={showMessage}>
            <MessageCircle className="w-4 h-4  dark:text-zinc-200" />
            Comment
          </PostIcons>
          <PostIcons onClick={handleShare}>
            <ScreenShare className="w-4 h-4   dark:text-zinc-200" />
            share
          </PostIcons>
        </div>
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
