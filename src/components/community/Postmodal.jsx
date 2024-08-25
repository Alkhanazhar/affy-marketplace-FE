/* eslint-disable react/prop-types */
import { X } from "lucide-react";

const PostModal = ({ data = {}, toggleModal = () => {} }) => {
  const handleClose = () => toggleModal();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-lg p-4 px-6 md:w-[600px] md:max-h-[70vh] w-[90%] max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <div className="absolute right-2 top-2 p-1 border rounded-full cursor-pointer">
          <X onClick={handleClose} />
        </div>

        {/* Post Title */}
        <h2 className="text-center font-[500] text-lg">{data?.communityId}</h2>

        {/* Post Content */}
        <div className="mt-4">
          <p className="text-[16px] font-[400] leading-7 text-[#0a0c2a]/90">
            {data?.textMessage}
          </p>

          {/* Comment Input */}
          <div className="flex flex-col mt-4">
            <textarea
              placeholder="Comment here"
              className="w-full p-2 mb-2 resize-none rounded-md border outline-none"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClose}
                className="bg-black/10 text-sm font-[500] text-black px-4 py-2 rounded-md hover:bg-black/20"
              >
                Cancel
              </button>
              <button className="bg-black/80 text-sm font-[500] px-4 py-2 rounded-md text-white hover:bg-black/70">
                Comment
              </button>
            </div>
          </div>

          {/* Existing Comments */}
          <div className="my-2">
            {data?.comments?.map((comment) => (
              <div key={comment.text} className="border mb-4 p-2 rounded-md">
                <p className="font-[500] text-base">{comment?.commentedBy}</p>
                <p className="text-[14px] font-[400] leading-7 text-[#0a0c2a]/90">
                  {comment?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
