import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  countries,
  genderOptions,
  // occupations,
} from "../../../../../constants/constatns";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedRegisterType,
  toggleIsLogIn,
  toggleIsRegisterReady,
} from "../../../../app/features/auth/authSlice";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";

const MyForm = () => {
  const { toast } = useToast();
  const selectType = useSelector((state) => state.auth.selectRegisterType);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPwd: "",
      country: "",
      gender: "",
      city: "",
      state: "",
      occupation: "",
    },
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const country = watch("country");
  const state = watch("state");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [profilePicture, setProfilePicture] = useState({});
  const [isPasswordShow, setIsPasswordShow] = useState(true);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(true);

  const handleIsPasswordShow = () => {
    setIsPasswordShow(!isPasswordShow);
  };
  const handleIsConfirmPasswordShow = () => {
    setIsConfirmPasswordShow(!isConfirmPasswordShow);
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedRegisterType(""));
      dispatch(toggleIsRegisterReady(false));
    };
  }, [dispatch]);

  useEffect(() => {
    if (country) {
      // eslint-disable-next-line no-unused-vars
      setStates((prevStates) => {
        const countrySelected = countries?.find(
          (countries) => countries?.slug === country
        );
        return countrySelected?.states || [];
      });
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      // eslint-disable-next-line no-unused-vars
      setCities((prevCities) => {
        const stateSelected = states.find(
          (stateNames) => stateNames?.name === state
        );
        return stateSelected?.cities || [];
      });
    }
  }, [states, state]);

  const onSubmit = async (data) => {
    const submitSelectType = selectType == "Client" ? "Employer" : "Employee";
    console.log(submitSelectType);
    if (!profilePicture) return;
    setIsLoading(true);
    const formData = new FormData();

    formData.append("name", `${data.firstName} ${data.lastName}`);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPwd", data.confirmPwd);
    formData.append("gender", data.gender);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    // formData.append("occupation", data.occupation);
    formData.append("phone_number", data.phone);
    formData.append("profilePicture", profilePicture);
    formData.append("role", submitSelectType);
    try {
      const res = await axios.post("/api/web/user/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast({
        variant: "default",
        title: "Success",
        description: "Sign up successfully",
      }); // Show success toast
      console.log(res?.data);
      dispatch(toggleIsLogIn(true));
    } catch (error) {
      console.log(error.message);
      toast({
        variant: "destructive",
        title: "Registration failed. Please try again.",
        description:
          error?.response?.data?.message ||
          "Something went wrong. Please try again",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error("Error during registration:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:w-[60%] h-full  rounded-lg w-[90%] md:p-4 p-2 -mt-4 bg-white  dark:bg-slate-950 shadow-xl shadow-black/30 dark:shadow-white/10">
      <h2 className="text-center md:text-[36px] text-[28px] font-[500] text-gray-800 mb-2 dark:text-gray-100">
        {selectType === "Freelancer" && "Sign up to find work you love"}
        {selectType === "Client" && "Sign up to hire talent"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div className="flex gap-2 ">
          <div className="flex flex-col w-full mb-2">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "*First name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  className={`${errors.firstName && "border-red-500"}`}
                  placeholder="First Name*"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">
                {" "}
                *{errors.firstName.message}
              </p>
            )}
          </div>
          {/* Last Name */}
          <div className="flex flex-col w-full">
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "*Last name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="*Last Name"
                  className={` ${errors.lastName && "border-red-500"}`}
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">*{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="*Email"
              className={`${errors.email && "border-red-500 mb"} "mb-2"`}
            />
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">*{errors.email.message}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-2 mt-2">
          <div className="flex flex-col w-full gap-2 ">
            {/* Password */}
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  message:
                    "Password must contain at least one uppercase letter and one special character",
                },
              }}
              render={({ field }) => (
                <div className="relative flex items-center">
                  <Input
                    {...field}
                    type={isPasswordShow ? "password" : "text"}
                    placeholder="*Password"
                    className={` ${errors.password && "border-red-500"}`}
                  />
                  <div className="absolute right-4 flex items-center">
                    {isPasswordShow ? (
                      <Eye
                        onClick={handleIsPasswordShow}
                        className="w-4 h-4 font-[300]  text-gray-400 "
                      />
                    ) : (
                      <EyeOff
                        onClick={handleIsPasswordShow}
                        className="w-4 h-4 font-[300]  text-gray-400 "
                      />
                    )}
                  </div>
                </div>
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">*{errors.password.message}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="flex flex-col w-full">
            <Controller
              name="confirmPwd"
              control={control}
              rules={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <div className="relative flex items-center">
                  <Input
                    {...field}
                    className={`${errors.confirmPwd && "border-red-500"}`}
                    type={isConfirmPasswordShow ? "password" : "text"}
                    placeholder="*Confirm Password"
                  />
                  <div className="absolute right-4  flex items-center">
                    {isConfirmPasswordShow ? (
                      <Eye
                        onClick={handleIsConfirmPasswordShow}
                        className=" font-[300] text-gray-400 w-5 h-5"
                      />
                    ) : (
                      <EyeOff
                        onClick={handleIsConfirmPasswordShow}
                        className="font-[300] text-gray-400 w-5 h-5"
                      />
                    )}
                  </div>
                </div>
              )}
            />
            {errors.confirmPwd && (
              <p className="text-red-500 text-sm">
                *{errors.confirmPwd.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Controller
            name="address"
            control={control}
            rules={{
              required: "Address field is required",
            }}
            render={({ field }) => (
              <Textarea
                {...field}
                className={` w-full mt-2  focus:border-gray-600 p-2 border-[1px] outline-none font-[400]  rounded-lg ${
                  errors.address && "border-red-500"
                }`}
                placeholder="Add Address"
              ></Textarea>
            )}
          />
        </div>
        <div>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone field is required",
            }}
            render={({ field }) => (
              <Input
                {...field}
                className={` w-full mt-2  focus:border-gray-600 p-2 border-[1px] outline-none font-[400]  rounded-lg ${
                  errors.address && "border-red-500"
                }`}
                placeholder="Add your Phone"
              ></Input>
            )}
          />
        </div>
        {/* Country */}
        <div className="flex gap-2 md:gap-2 sm:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Controller
              name="country"
              control={control}
              rules={{
                required: "country field is required",
              }}
              render={({ field }) => (
                <select
                  {...field}
                  className={`outline-none w-full mt-2  focus:border-gray-600 p-2 border-[1px]   font-[400]  rounded-lg dark:bg-transparent ${
                    errors.country && "border-red-500"
                  }`}
                >
                  <option placeholder=""> Select a Country</option>
                  {countries?.map((country) => {
                    return (
                      <option key={country?.title} value={country?.slug}>
                        {" "}
                        {country.title}
                      </option>
                    );
                  })}
                </select>
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">*{errors.country.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Controller
              name="state"
              control={control}
              rules={{
                required: "state field is required",
              }}
              render={({ field }) => (
                <select
                  disabled={!country}
                  {...field}
                  className={`outline-none w-full mt-2  focus:border-gray-600 dark:bg-transparent p-2 border-[1px]  font-[400]  rounded-lg ${
                    errors.state && "border-red-500"
                  }`}
                >
                  <option>Select a State</option>
                  {states?.map((item) => {
                    return (
                      <option key={item?.name} value={item?.name}>
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              )}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">*{errors.state.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Controller
              name="city"
              control={control}
              rules={{
                required: "city field is required",
              }}
              render={({ field }) => (
                <select
                  disabled={!state}
                  {...field}
                  className={`outline-none w-full mt-2  focus:border-gray-600 dark:bg-transparent p-2 border-[1px]  font-[400]  rounded-lg ${
                    errors.city && "border-red-500"
                  }`}
                >
                  <option value="">Select a City</option>
                  {cities?.map((city) => {
                    return (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    );
                  })}
                </select>
              )}
            />
            {errors?.city && (
              <p className="text-red-500 text-sm">*{errors?.city?.message}</p>
            )}
          </div>
        </div>

        {/* Gender */}
        <Controller
          name="gender"
          control={control}
          rules={{
            required: "gender field is required",
          }}
          render={({ field }) => (
            <select
              {...field}
              className={`outline-none w-full mt-2 focus:border-gray-600 dark:bg-transparent p-2 border-[1px]  font-[400]  rounded-lg ${
                errors.gender && "border-red-500"
              }`}
            >
              {genderOptions.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.title}
                </option>
              ))}
            </select>
          )}
        />

        {errors.gender && (
          <p className="text-red-500 text-sm">*{errors.gender.message}</p>
        )}

        {/* Occupation */}
        {/* <Controller
          name="occupation"
          control={control}
          rules={{
            required: "occupation field is required",
          }}
          render={({ field }) => (
            <select
              {...field}
              className={`outline-none  w-full mt-2 focus:border-gray-600 p-2 border-[1px] font-[400]  rounded-lg ${
                errors.occupation && "border-red-500"
              }`}
            >
              <option value="">Select your occupation</option>

              {occupations.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.title}
                </option>
              ))}
            </select>
          )}
        />
        {errors.occupation && (
          <p className="text-red-500 text-sm">*{errors.occupation.message}</p>
        )} */}

        {/* Profile Picture */}

        <Input
          type="file"
          className="mt-2"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setProfilePicture(file);
          }}
        />

        {!profilePicture && (
          <p className="text-red-500 text-sm">
            *{"profile Picture field is required"}
          </p>
        )}

        {/* Submit Button */}

        <Button
          type="submit"
          disabled={isLoading}
          className="relative overflow-hidden duration-150 rounded-lg backdrop-blur-sm px-4 py-2 text-white w-full mt-2 md:text-[18px] text-[16px] bg-green-500/50 hover:bg-opacity-90 hover:backdrop-contrast-50 hover:backdrop-brightness-90"
        >
          {/* Button Text */}
          <span className="relative z-10">
            {isLoading ? "Signing up..." : "Sign up"}
          </span>
        </Button>
      </form>
    </div>
  );
};

export default MyForm;
