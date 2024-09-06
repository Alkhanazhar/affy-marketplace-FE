// import { motion } from "framer-motion";

// const Marquee = ({ images }) => {
//   return (
//     <div className="flex w-full overflow-hidden">
//       <motion.div
//         initial={{ x: "0" }}
//         animate={{ x: "-100%" }}
//         transition={{ duration: 15, ease: "linear", repeat: Infinity }}
//         className="flex gap-20 shrink-0 pt-10"
//       >
//         {images.map((item, index) => {
//           return <img src={item} alt={"images"} key={index} className="w-32" />;
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default Marquee;

import { motion } from "framer-motion";

const Marquee = ({ images }) => {
  return (
    <div className="flex flex-col gap-5 relative max-w-7xl mx-auto my-10">
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-[#020817]  to-transparent z-10 pointer-events-none"></div>
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-20 shrink-0 my-5"
          animate={{ x: ["0%", "-100%"] }} // Animate from 0% to -100%
          transition={{
            duration: 400, // Control the speed of the animation
            ease: "linear", // Keep the speed consistent
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "loop", // Ensure that the animation repeats in a loop
          }}
        >
          {/* Repeat the images array twice for a smooth loop */}
          {[...images, ...images].map((item, index) => (
            <img
              src={item}
              alt={`marquee-image-${index}`}
              key={index}
              className="w-32 h-10 opacity-70 dark:invert"
            />
          ))}
        </motion.div>
      </div>
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-20 shrink-0 mb-5"
          initial={{ x: "-100%" }} // Start at the end position (-100%)
          animate={{ x: 0 }} // Move to the start position (0%)
          transition={{
            duration: 400, // Control the speed of the animation
            ease: "linear", // Keep the speed consistent
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Reverse the animation direction on repeat
          }}
        >
          {/* Repeat the images array twice for a smooth loop */}
          {[...images, ...images].map((item, index) => (
            <img
              src={item}
              alt={`marquee-image-${index}`}
              key={index}
              className="w-32 opacity-70 h-10 dark:invert"
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white dark:from-[#020817]  to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Marquee;
