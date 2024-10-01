import Separator from "../../shared/Separator";
import SelectRegisterType from "./components/SelctRegisterType";
import MyForm from "./components/MyForm";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsLogIn } from "../../../app/features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const isRegisterReady = useSelector((store) => store.auth.isRegisterReady);
  const selectType = useSelector((state) => state.auth.selectRegisterType);
  const onHandleIsLogin = () => {
    dispatch(toggleIsLogIn(true));
  };

  return (
    <div className="min-h-[80vh] pt-16 flex flex-col justify-center items-center max-w-7xl">
      {!isRegisterReady && <SelectRegisterType />}
      {isRegisterReady && selectType && <MyForm />}
      <div className="flex justify-center mt-4">
        <Separator text="Already have an account?" />
        <button
          onClick={onHandleIsLogin}
          className="mx-auto text-primary hover:opacity-70 duration-150"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Register;
