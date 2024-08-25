import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { brand } from "../../constants/constants";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import { setSelectedRegisterType } from "../app/features/auth/authSlice";
import { brand } from "../../constants/constatns";

const LoginPage = () => {
  const dispatch = useDispatch();

  const isLogIn = useSelector((state) => state.auth.isLogIn);
  const isRegisterReady = useSelector((state) => state.auth.isRegisterReady);
  const selectRegisterType = useSelector(
    (state) => state.auth.selectRegisterType
  );

  const handleSetSelectedRegisterType = (type) => {
    dispatch(setSelectedRegisterType(type));
  };

  return (
    <div className=" relative pb-10">
      <header className="border-b fixed top-0 left-0 w-full bg-white">
        <div className="max-w-7xl mx-auto flex justify-between md:justify-between p-3 items-center">
          <Link
            to="/"
            className="logo text-primary text-2xl font-bold cursor-pointer z-10"
          >
            {brand}
          </Link>
          {isRegisterReady && (
            <div className="flex md:gap-8 gap-2 items-center">
              {selectRegisterType === "Client" ? (
                <>
                  <p className="leading-none text-[12px] md:text-[16px]">
                    Looking for work?
                  </p>
                  <button
                    className="text-primary font-[400] text-[12px] md:text-[16px]"
                    onClick={() => handleSetSelectedRegisterType("Freelancer")}
                    aria-label="Apply as talent"
                  >
                    Apply as talent
                  </button>
                </>
              ) : (
                <>
                  <p className="leading-none text-[12px] md:text-[16px]">
                    Here to hire talent?
                  </p>
                  <button
                    className="text-primary font-[400] text-[12px] md:text-[16px]"
                    onClick={() => handleSetSelectedRegisterType("Client")}
                    aria-label="Join as a client"
                  >
                    Join as a client
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </header>
      <main className="max-w-7xl p-4 mx-auto pt-8">
        {isLogIn ? <Login /> : <Register />}
      </main>
    </div>
  );
};

export default LoginPage;
