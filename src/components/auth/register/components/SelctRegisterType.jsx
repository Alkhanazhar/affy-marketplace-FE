import { HandCoins, UserRoundSearch } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedRegisterType,
  toggleIsRegisterReady,
} from "../../../../app/features/auth/authSlice";

const SelectRegisterType = () => {
  const selectType = useSelector((state) => state.auth.selectRegisterType);
  const dispatch = useDispatch();
  const handleRegisterReady = () => {
    dispatch(toggleIsRegisterReady(true));
  };

  const handleSetSelectType = (e) => {
    dispatch(setSelectedRegisterType(e));
  };

  return (
    <div className="max-w-7xl mx-auto md:py-28 py-0">
      <>
        <div className="text-3xl text-center">
          Join as a client or freelancer
        </div>
        <div className="flex justify-center flex-col md:flex-row mt-8 md:gap-8 gap-4 ">
          <button
            className={`border-2 p-6 rounded-md md:w-2/6 active:scale-95 relative active:border-black duration-150 flex flex-col justify-start items-center space-y-4  bg-zinc-50 ${
              selectType === "Freelancer" ? "border-primary" : ""
            }`}
            onClick={() => handleSetSelectType("Freelancer")}
          >
            <UserRoundSearch
              className={`w-8 h-8 ${
                selectType === "Freelancer" ? "text-primary" : ""
              }`}
            />
            <div className="md:text-[28px] text-lg font-medium">
              {" I'm"} a freelancer, looking for work
            </div>
          </button>
          <button
            className={`border-2 p-6 rounded-md md:w-2/6 active:scale-95 relative active:border-black duration-150 flex flex-col justify-start items-center space-y-4 bg-zinc-50 ${
              selectType === "Client" ? "border-primary" : ""
            }`}
            onClick={() => handleSetSelectType("Client")}
          >
            <HandCoins
              className={`w-8 h-8 ${
                selectType === "Client" ? "text-primary" : ""
              }`}
            />
            <div className="md:text-[28px] text-lg font-medium">
              {" I'm"} a client, hiring for a project
            </div>
          </button>
        </div>
        <div className="flex justify-center ">
          <button
            disabled={selectType == ""}
            onClick={handleRegisterReady}
            className={`mx-auto text-white mt-8 px-4 py-2 rounded-lg ${
              selectType ? "bg-primary" : "bg-gray-400 "
            }`}
          >
            {selectType ? `Join as ${selectType}` : "Create an account"}
          </button>
        </div>
      </>
    </div>
  );
};

export default SelectRegisterType;
