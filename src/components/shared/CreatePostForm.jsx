import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Image, Send } from "lucide-react";

const PostForm = ({ userData, communityId, onPostCreated }) => {
  const [textMessage, setTextMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/web/post/create",
        {
          community_id: communityId,
          userId: userData?.id,
          textMessage: textMessage,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status == 201) {
        toast({
          variant: "default",
          title: "Success",
          description: "Post created successfully",
        });
        onPostCreated(); // Callback to refresh posts in parent
        setTextMessage(""); // Clear input after submit
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Failed to create post",
        description: error?.response?.data?.message || "Please try again",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2  border rounded-xl mx-3  p-2 bg-white dark:bg-slate-950"
    >
      <div>
        <Label htmlFor="name" className="m-3">
          Create your Post
        </Label>
        <Textarea
          id="name"
          name="name"
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
          placeholder="Enter up to 255 words"
          className="my-2 border-none resize-none"
        />
      </div>
      <div className="flex justify-end items-center gap-2">
        <Image color="gray" className="cursor-pointer" />
        <Button
          type="submit"
          size="sm"
          className="flex gap-2 items-center font-normal"
        >
          <Send size={16} />
          Create Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
