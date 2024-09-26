import { useState } from "react";
import { PageTitle } from "./Dashboard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const { toast } = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description } = formData;
    if (name.trim() === "" || description.trim() === "") {
      toast({
        variant: "destructive",
        title: "Fill all fields",
        description: "Please fill all the required fields",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8714/api/admin/category/create",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      toast({
        variant: "default",
        title: "Success",
        description: "Category created successfully.",
      });

      console.log("Category created successfully:", response.data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error?.response?.data?.message ||
          "Failed to create category. Please try again.",
      });

      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="md:w-1/2 w-full -mt-16">
        <div className="flex justify-center">
          <PageTitle title="Create Category" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 p-4 rounded-xl bg-white border mt-4 shadow-lg shadow-black/10"
        >
          <div>
            <Label htmlFor="name" className="my-4">
              Category Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className="my-2"
            />
          </div>
          <div>
            <Label htmlFor="description" className="my-4">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter category description"
              className="my-2"
            />
          </div>
          <Button type="submit" className="mt-4">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
