import { useNavigate } from "react-router-dom";
import { brand } from "../../../constants/constatns";
import useGsapAnimation from "../../hooks/useGsapAnimation";
import { Button } from "../ui/button";

const FreelanceService = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const handleGetStarted = () => {
      if (token) {
        navigate("/community");
      } else {
        navigate("/auth");
      }
    };
  useGsapAnimation(".freelanceServices");
  return (
    <div className="mx-4 ">
      <div className="max-w-7xl freelanceServices mx-auto bg-[#0f385d]/80 md:p-4 p-2 rounded-lg mb-8 flex flex-col gap-12">
        <h2 className="text-center text-white leading-none lg:text-[64px] md:text-[40px] sm:text-[36px] text-[28px]">
          Photography services just a
          <span className="text-secondary cursive">&nbsp;click away!</span>
        </h2>
        <Button
          onClick={handleGetStarted}
          className="text-lg w-fit mx-auto text-neutral-100 dark:bg-secondary shadow dark:text-neutral-900"
        >
          Join {brand}
        </Button>
      </div>
    </div>
  );
};

export default FreelanceService;
