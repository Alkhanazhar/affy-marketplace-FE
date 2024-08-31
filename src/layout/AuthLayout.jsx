import { setSelectedRegisterType } from "@/app/features/auth/authSlice";
import { brand } from "../../constants/constatns";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isRegisterReady = useSelector((state) => state.auth.isRegisterReady);
  const selectRegisterType = useSelector(
    (state) => state.auth.selectRegisterType
  );

  const handleSetSelectedRegisterType = (type) => {
    dispatch(setSelectedRegisterType(type));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <header className="border-b fixed top-0 left-0 w-full bg-white z-[10000]">
        <div className="max-w-7xl mx-auto flex justify-between cursive--font md:justify-between p-3 items-center">
          <Link
            to="/"
            className="logo  text-primary text-2xl font-bold cursor-pointer "
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
      <div className=" relative pb-10 ">
        <Outlet />
      </div>
      <footer className="justify-center fixed bottom-0 w-full hidden md:flex p-2 bg-white border-t">
        <h1 className="uppercase cursive--font">made with 💖 by affy cloud</h1>
      </footer>
    </div>
  );
};

export default AuthLayout;
