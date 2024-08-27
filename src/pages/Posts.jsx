/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";
import Header from "@/components/shared/Header";
import { postsArray } from "../../constants/constatns";
import Post from "@/components/community/Post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Posts = () => {
  const AsideSection = ({ children }) => (
    <aside className="md:w-1/4 hidden md:flex h-fit   p-4 sticky top-12 w-full rounded-lg">
      <div className="space-y-4 w-full">
        <div className="w-full py-4 rounded-lg  text-black  bg-zinc-100/90">
          {children}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto flex pt-16">
          <AsideSection>
            <div className="flex justify-center text-gray-700">
              <h3 className="text-center leading-none my-4 text-xl font-medium hover:underline cursor-pointer">
                Front end developer
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <Button
                className="rounded-full flex gap-4 text-gray-700"
                variant="outline"
              >
                Create Post <Plus />
              </Button>
            </div>
            <div className="flex justify-center text-gray-600">
              <h3 className="text-center leading-none text- font-[500] text-lg my-4 underline cursor-pointer">
                Your Communities
              </h3>
            </div>
          </AsideSection>
          <main className="md:w-2/4 w-full bg-zinc-100/90 rounded-lg overflow-y-auto mx-2">
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <div className="rounded-full w-full mt-2 mx-2">
                  <Input placeholder="Search your community Posts..." />
                </div>
              </div>
              <div>
                {postsArray.map((item) => (
                  <div
                    key={item.textMessage}
                    className="mx-2 mb-2"
                    onClick={() => {}}
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
              <h2 className="text-[20px] font-[500] text-zinc-800">
                Communities for you
              </h2>
            </div>
          </AsideSection>
        </div>
      </div>
    </>
  );
};

export default Posts;
