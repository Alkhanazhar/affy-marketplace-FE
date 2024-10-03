import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const CreateJobs = () => {
  const { jobId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const token = localStorage.getItem("token");
  const userInfo = token && jwtDecode(token);

  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (userInfo.role !== "Employee") {
      toast({
        title: "Error",
        description: "Only employees can create or update jobs.",
        status: "error",
      });
      return;
    }

    const submitData = { ...data, createdBy: userInfo.id };
    const url = jobId ? `/api/job/update/${jobId}` : "/api/job/create";
    const method = jobId ? "put" : "post";

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios({
        method: method,
        url: url,
        data: submitData,
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      toast({
        title: "Success",
        description: jobId
          ? "Job updated successfully!"
          : "Job created successfully!",
        status: "success",
      });
      navigate("/employee-page");
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast({
          title: "Error",
          description: `Server responded with an error: ${error.response.data}`,
          status: "error",
        });
      } else if (error.request) {
        toast({
          title: "Error",
          description: "No response received from server.",
          status: "error",
        });
      } else {
        toast({
          title: "Error",
          description: `Error: ${error.message}`,
          status: "error",
        });
      }
    }
  };

  const fetchJobData = async () => {
    try {
      const res = await axios.get(`/api/job/display/edit/${jobId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const jobData = res.data.meta;
      setValue("name", jobData.name);
      setValue("description", jobData.description);
      setValue("price", jobData.price);
      setValue("location", jobData.location);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to fetch job data.",
        status: "error",
      });
    }
  };

  

  useEffect(() => {
    if (jobId) {
      fetchJobData();
    }
  }, [jobId]); // Ensure useEffect runs when jobId changes

  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-2xl rounded-2xl cursive--font p-8 mx-4 bg-white dark:bg-slate-950 shadow-lg border"
      >
        <h1 className="md:text-3xl text-2xl text-center font-bold">
          {jobId ? "Update your job here" : "Create your job here"}
        </h1>

        <div className="space-y-4">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Full Name:
            </Label>
            <Input
              type="text"
              id="name"
              {...register("name", {
                required: "Full Name is required",
                validate: (value) =>
                  value.trim().length > 4 ||
                  "Full Name must be more than 4 letters",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

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
                validate: (value) =>
                  value.trim().length > 15 ||
                  "Description must be more than 15 letters",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            {errors.description && (
              <span className="text-red-600 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div>
            <Label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Price:
            </Label>
            <Input
              type="number"
              id="price"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                validate: (value) =>
                  value > 100 || "Price must be more than 100",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            {errors.price && (
              <span className="text-red-600 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>

          <div>
            <Label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
            >
              Location:
            </Label>
            <Textarea
              id="location"
              {...register("location", {
                required: "Location is required",
                validate: (value) =>
                  value.trim().length > 5 ||
                  "Location must be more than 5 letters",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            {errors.location && (
              <span className="text-red-600 text-sm">
                {errors.location.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-offset-2"
            disabled={!isValid}
          >
            {jobId ? "Update Job" : "Create Job"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobs;
