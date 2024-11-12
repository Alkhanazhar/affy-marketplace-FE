import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

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
      className="space-y-4 p-2 border rounded-xl w-full bg-white my-4"
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
      <div className="flex justify-end items-center gap-4">
        <Button type="submit" size="sm">
          Create Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
