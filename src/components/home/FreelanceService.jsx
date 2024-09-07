import { brand } from "../../../constants/constatns";
import useGsapAnimation from "../../hooks/useGsapAnimation";
import { Button } from "../ui/button";

const FreelanceService = () => {
  useGsapAnimation(".freelanceServices");
  return (
    <div className="mx-4 overflow-hidden">
      <div className="max-w-7xl freelanceServices mx-auto bg-[#0f385d]/80 md:p-4 p-2 rounded-lg mb-8 flex flex-col gap-12">
        <h2 className="text-center text-white leading-none lg:text-[64px] md:text-[40px] sm:text-[36px] text-[28px]">
          Photography services just a
          <span className="text-secondary cursive">&nbsp;click away!</span>
        </h2>
        <Button className="py-2 px-4 mt-4 md:text-lg bg-secondary  hover:bg-secondary/90 font-[500] w-fit mx-auto text-black/80 dark:text-zinc-700">
          Join {brand}
        </Button>
      </div>
    </div>
  );
};

export default FreelanceService;
