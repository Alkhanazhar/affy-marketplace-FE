import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  //   const fetchBlogs = async () => {

  //     try {
  //     } catch (error) {
  //         console.error(error);
  //     }
  //   };

  return (
    <div className="min-h-[50vh]  border-t">
      <div className="max-w-7xl mx-auto">
        <div className="my-6">
          <h1 className="text-5xl text-gray-700/80 font-semibold">
            Photography Blogs
          </h1>
        </div>
        <div className="flex border-b border-[#d3e3e2] px-4 gap-8">
          <div
            className="flex flex-col items-center justify-center border-b-[3px] border-b-[#35b1a7] text-[#101918] pb-[13px] pt-4"
            href="#"
          >
            <p className="text-[#101918c7] text-xl font-bold leading-normal  cursor-pointer">
              All Blogs
            </p>
          </div>
        </div>
        <>
          <div className="flex items-center gap-4 cursor-pointer hover:bg-green-50 px-4 py-3">
            <img
              src="https://cdn.usegalileo.ai/sdxl10/fb9cfb5c-d70e-4f5d-8cb3-c7a7c4568e4b.png"
              className="w-32 h-20 rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#101918] dark:text-slate-100 text-base font-medium leading-normal line-clamp-1">
                Exploring the Art of Long Exposure Photography
              </p>
              <p className="text-[#5a8c88] text-sm font-normal leading-normal line-clamp-2">
                9 min read - 1 week ago
              </p>
            </div>
          </div>
        </>
        <>
          <div className="flex items-center gap-4 cursor-pointer hover:bg-green-50 px-4 py-3">
            <img
              src="https://cdn.usegalileo.ai/sdxl10/fb9cfb5c-d70e-4f5d-8cb3-c7a7c4568e4b.png"
              className="w-32 h-20 rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#101918] dark:text-slate-100 text-base font-medium leading-normal line-clamp-1">
                Exploring the Art of Long Exposure Photography
              </p>
              <p className="text-[#5a8c88] text-sm font-normal leading-normal line-clamp-2">
                9 min read - 1 week ago
              </p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Blogs;
