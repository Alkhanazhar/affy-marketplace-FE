import { Plus, Search } from "lucide-react";
import { postsArray } from "../../constants/constatns";
import Post from "@/components/community/Post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import axios from "axios";

const Posts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  // Step 2: Handle change for the input fields
  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Update title state
  };

  const handlePostChange = (e) => {
    setPost(e.target.value); // Update post state
  };

  async function handleCreatePost() {
    const { data } = await axios.post("/api/web/post/create", {
      community_id: "",
    });
    console.log(data);
  }
  const [data, setData] = useState({});
  const AsideSection = ({ children }) => (
    <aside className="md:w-1/4 hidden md:flex h-fit p-4 sticky top-20 w-full rounded-lg border dark:bg-[#020817]">
      <div className="space-y-4 w-full">
        <div className="w-full py-4 rounded-lg  text-neutral-800  bg-zinc-100/90 dark:bg-[#020817]">
          {children}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <div className="min-h-screen mx-4 xl:mx-0">
        <div className="max-w-7xl mx-auto flex pt-16">
          <AsideSection>
            <div className="flex justify-center text-gray-700 dark:text-zinc-200">
              <h3 className="text-center leading-none my-4 text-xl font-medium hover:underline cursor-pointer">
                Front end developer
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <AlertDialog>
                <div className="flex justify-center">
                  <AlertDialogTrigger asChild>
                    <Button
                      className="rounded-3xl flex gap-2 cursive--font text-gray-700 dark:text-zinc-100 shadow"
                      variant="outline"
                    >
                      Create Post
                      <Plus className="text-black/50 w-5 h-5 dark:text-zinc-100" />
                    </Button>
                  </AlertDialogTrigger>
                </div>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle
                      className="md:text-3xl text-center text-2xl"
                      asChild
                    >
                      Create your Post
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div>
                        {/* Title Input */}
                        <div className="my-4 flex flex-col gap-4">
                          <Label className="font-[400] text-sm">Title</Label>
                          <Input value={title} onChange={handleTitleChange} />
                        </div>

                        {/* Post Textarea */}
                        <div className="my-4 flex flex-col gap-4">
                          <Label className="font-[400] text-sm">Post</Label>
                          <Textarea
                            placeholder="Write something here, less than 255 words"
                            value={post}
                            onChange={handlePostChange}
                          />
                        </div>

                        {/* You can add a submit button or other actions */}
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button onClick={handleCreatePost}>
                        Create your post
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="flex justify-center text-gray-600 dark:text-zinc-100 cursive--font ">
              <h3 className="text-center leading-none text- font-[500] text-lg my-4 dark:text-zinc-200 underline cursor-pointer">
                Your Communities
              </h3>
            </div>
          </AsideSection>
          <main className="md:w-2/4 w-full bg-zinc-100/90  dark:bg-transparent rounded-lg overflow-y-auto mx-2">
            <div className="space-y-4 ">
              <div className="flex gap-3 items-center bg-white dark:bg-slate-950 px-6 py-2 rounded-lg shadow-md shadow-[#00000047]  dark:shadow-white/20 mx-4 mt-4 border-t ">
                <Search className="text-gray-500 dark:text-zinc-100" />
                <Input
                  type="text"
                  className="w-full outline-none border-none"
                  placeholder="Search for communities..."
                />
              </div>
              <div>
                {postsArray.map((item) => (
                  <div
                    key={item.textMessage}
                    className="mx-2 mb-2 cursor-pointer"
                    onClick={() => {
                      setData(() => item);
                      setIsModalOpen(true);
                    }}
                  >
                    <Post
                      communityName={item.communityId}
                      textMessage={item.textMessage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </main>
          <AsideSection>
            <div className="px-4">
              <h2 className="text-[20px] font-[500] dark:text-zinc-200 text-zinc-800">
                Communities for you
              </h2>
            </div>
            {isModalOpen && (
              <Modal
                item={data}
                toggleModal={() => setIsModalOpen((prev) => !prev)}
                isModalOpen={isModalOpen}
              />
            )}
          </AsideSection>
        </div>
      </div>
    </>
  );
};

export default Posts;

const Modal = ({ item, toggleModal, isModalOpen }) => {
  return (
    <AlertDialog open={isModalOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> */}
          <AlertDialogDescription className="h-[30rem] overflow-scroll overflow-x-hidden no-scroll">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <CardTitle>Card Title</CardTitle>
                </div>
                <CardDescription>{item?.textMessage}</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Comment here" />
                <div className="mt-4 w-full justify-end mr-auto flex">
                  <Button
                    onClick={toggleModal}
                    className="bg-black/10 text-sm font-[500] text-black px-4 py-2 rounded-md hover:bg-black/20"
                    size="sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-black/80 text-sm font-[500] px-4 py-2 rounded-md text-white hover:bg-black/70 ml-2"
                    size="sm"
                  >
                    Comment
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <div className="">
                  {item?.comments?.map((comment) => (
                    <div
                      key={comment.text}
                      className="border mb-4 p-2 rounded-md"
                    >
                      <CardDescription className="font-[500] mb-2 text-base">
                        {comment?.commentedBy}
                      </CardDescription>
                      <CardDescription>
                        <div className="text-xs">{comment?.text}</div>
                      </CardDescription>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
