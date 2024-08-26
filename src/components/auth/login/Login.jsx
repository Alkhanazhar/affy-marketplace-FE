/* eslint-disable react/prop-types */
// import { Key, User } from "lucide-react";
import { brand } from "../../../../constants/constatns";
import { useState } from "react";
import Separator from "../../shared/Separator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleIsLogIn } from "../../../app/features/auth/authSlice";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onHandleIsLogin = () => {
    dispatch(toggleIsLogIn(false));
  };
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataForm) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/web/user/login", dataForm);
      console.log(data);
      if (data.error === false) {
        localStorage.setItem("token", data?.meta?.token);
        toast({
          variant: "default",
          title: "Successfully logged in",
          description: data.message,
        });
        navigate("/");
      } else {
        toast(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Wrong Credentials.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="">
      <div className="min-h-[90vh] pt-12 flex justify-center items-center max-w-7xl ">
        <div className="p-10 border shadow-xl rounded-lg max-w-4xl w-[30rem] bg-white z-[10]">
          <div className="md:text-[36px] text-[32px] text-gray-700  text-center bg">
            Log in to {brand}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto p-3 "
          >
            {/* Email Field */}
            <div className="mb-3">
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email address"
                className={` ${errors.email && "border-red-500"}`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  *{errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[@$!%*?&])/,
                    message:
                      "Password must contain at least one uppercase letter and one special character",
                  },
                })}
                placeholder="Password"
                className={`${errors.password && "border-red-500"}`}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  *{errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              disabled={isLoading}
              className="relative overflow-hidden rounded-lg backdrop-blur-sm px-4 py-2 text-white w-full duration-300 md:text-[18px] text-[16px] bg-green-500/50 hover:bg-opacity-90 hover:backdrop-contrast-50 hover:backdrop-brightness-90"
            >
              {/* Button Text */}
              <span className="relative z-50">
                {isLoading ? "Logging in..." : "Login"}
              </span>
            </Button>
          </form>

          <Separator text="or" />
          <OAuthButtons />
          <Separator text="Don't have an account?" />
          <div className="flex justify-center mt-4 mx-3">
            <Button
              variant="outline"
              disabled={isLoading}
              onClick={onHandleIsLogin}
              className="mx-auto border-secondary border hover:opacity-70 duration-150 px-4 py-1 rounded-md"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LabelInput = ({
  placeholder,
  value,
  icon: Icon,
  onChange,
  type,
  name,
  id,
}) => (
  <div className="mb-3">
    <label
      htmlFor={id}
      className="p-2 border rounded-md flex gap-2 hover:border-slate-700 duration-150 cursor-pointer"
    >
      <Icon />
      <input
        value={value}
        onChange={onChange}
        required
        id={id}
        name={name}
        type={type}
        className="outline-none border-none font-[200] placeholder:text-gray-400 placeholder:font-[400] w-full"
        placeholder={placeholder}
      />
    </label>
  </div>
);

const OAuthButtons = () => (
  <div className="px-3">
    <button className="bg-[#4384f4] rounded-lg flex px-4 py-2 relative w-full justify-center items-center text-white ">
      <div className="p-[1px] rounded-lg bg-white m-1 absolute left-0">
        <img src="google.svg" alt="Google" className="w-7 h-7" />
      </div>
      <span>Continue with Google</span>
    </button>
    <div className="mt-4">
      <button className="bg-slate-100 border-black border text-black rounded-lg flex gap-2 px-4 py-2 relative w-full justify-center items-center">
        <div className="rounded-lg">
          <img src="apple.svg" alt="Apple" className="w-4 h-4" />
        </div>
        <span>Continue with Apple</span>
      </button>
    </div>
  </div>
);

export default Login;
