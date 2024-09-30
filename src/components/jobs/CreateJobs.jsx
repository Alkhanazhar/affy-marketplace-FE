import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";

const CreateJobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // validates as you type
  });

  const onSubmit = async (data) => {
    try {
      data.status = true; // Add status property

      // Send form data to the API
      const response = await axios.post("/api/", data);

      // Log the response data
      console.log(response.data);
    } catch (error) {
      // Log the error to the console
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-2xl rounded-2xl cursive--font p-8 mx-4 bg-white shadow-lg border"
      >
        <h1 className="md:text-3xl text-2xl text-center font-bold">
          Create your job here
        </h1>

        <div className="space-y-4">
          <div>
            <Label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Full Name:
            </Label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: "Full Name is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
            />
          </div>
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
          <div>
            <Label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Description:
            </Label>
            <Textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          {errors.description && (
            <span className="text-red-600 text-sm">
              {errors.description.message}
            </span>
          )}
          <div>
            <Label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Price:
            </Label>
            <Input
              type="text"
              id="price"
              {...register("price", { required: "Price is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          {errors.price && (
            <span className="text-red-600 text-sm">{errors.price.message}</span>
          )}
          <div>
            <Label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Location:
            </Label>
            <Textarea
              id="location"
              {...register("location", { required: "Location is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          {errors.location && (
            <span className="text-red-600 text-sm">
              {errors.location.message}
            </span>
          )}
          <Button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-offset-2"
            disabled={!isValid}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobs;
