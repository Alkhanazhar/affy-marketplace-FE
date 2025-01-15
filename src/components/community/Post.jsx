// eslint-disable-next-line no-unused-vars
import { Heart, MessageCircle, ScreenShare, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeAgo } from "../../../constants/constatns";
import { baseUrl } from "@/App";
import axios from "axios";

const Post = ({ item, showMessage }) => {
  function handleShare(e) {
    e.stopPropagation();
    console.log("/Share");
  }

  const handleLike = async () => {
    try {
      const response = await axios.post();
    } catch (error) {
      console.log(error);
    }
  };

  const image = baseUrl + "uploads/" + item.userId.avatar;
  console.log(item, "item");
  return (
    <div className="border p-3 rounded-md shadow-md">
      <div className="flex items-center gap-2  pb-3 cursive--font overflow-hidden">
        <Avatar w={"10"} h={"10"} className="border">
          <AvatarImage src={image || "https://github.com/shadcn.png"} />
          <AvatarFallback className="uppercase">
            {item?.userId?.name?.split("")[0]}
          </AvatarFallback>
        </Avatar>
        <div className="text-black/90 dark:text-zinc-200 text-base font-medium">
          {item.userId.name}
        </div>
      </div>
      <div className="cursor-pointer mb-2">
        <p
          className="cursive--font dark:text-zinc-300 font-normal text-base "
          onClick={showMessage}
        >
          <span className="text-[15px] cursive--font">{item?.textMessage}</span>
        </p>
        <div className="text-sm text-gray-400 font-normal">
          {timeAgo(new Date(item?.updatedAt))}
        </div>
      </div>
      <div className="flex flex-col justify-start gap-2 items-start mt-4">
        <div className="flex justify-start gap-6">
          <PostIcons>
            <ThumbsUp size={16} />
          </PostIcons>
          <PostIcons onClick={showMessage}>
            <MessageCircle size={16} />
          </PostIcons>
          <PostIcons onClick={handleShare}>
            <ScreenShare size={16} />
          </PostIcons>
        </div>
      </div>
    </div>
  );
};

export default Post;
export const PostIcons = ({ children, onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center w-8 h-8 bg-gray-300/40 rounded-lg dark:text-slate-400 cursive--font text-sm gap-2 justify-center   text-slate-700 hover:text-primary"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
