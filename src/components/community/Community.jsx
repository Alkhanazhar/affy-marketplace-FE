import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  // communitiesConstant,
  photographyCommunities,
} from "../../../constants/constatns";
import Card from "../shared/Card";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import useCategories from "@/hooks/useCategories";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categories, loading, error } = useCategories();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category_id: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, category_id } = formData;
    if (name.trim() === "" || description.trim() === "" || category_id == "") {
      toast({
        variant: "destructive",
        title: "Fill all fields",
        description: "Please fill all the required fields",
      });
      return;
    }

    try {
      await axios.post("api/admin/community/create", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setIsModalOpen(() => false);
      setFormData({
        name: "",
        description: "",
        category_id: "",
      });
      toast({
        variant: "default",
        title: "Success",
        description: "Category created successfully.",
      });
    } catch (error) {
      setIsModalOpen(false);
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

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const filteredCommunities = useMemo(() => {
    return photographyCommunities.filter((community) =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-500 md:text-3xl text-2xl">
        {error}
      </div>
    );
  return (
    <div className="pt-16 pb-16 min-h-screen ">
      <div className="p-8 flex justify-center items-center flex-col space-y-6 leading-none relative">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center bg-clip-text text-transparent leading-none bg-gradient-to-tr from-gray-400 to-primary pb-2">
            Discover communities
          </h1>
          <p className="font-bold text-2xl text-center leading-none">
            <div className="text-black/50">or &nbsp;</div>
            <AlertDialog open={isModalOpen}>
              <AlertDialogTrigger>
                <div
                  className="text-primary font-bold w-fit mx-auto cursor-pointer border-primary"
                  onClick={toggleModal}
                >
                  create your own
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-3xl text-center text-black/70">
                    Create your Community
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 p-4 rounded-xl w-full mx-auto bg-white border mt-4"
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
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
                          placeholder="Enter category description"
                          className="my-2"
                        />
                        <select
                          name="category_id"
                          value={formData.category_id}
                          onChange={handleInputChange}
                          className="p-2 border-[1px] rounded-md"
                        >
                          <option value="">Select a Category</option>
                          {categories?.map((category, index) => (
                            <option value={category?.id} key={index}>
                              {category?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex justify-center items-center">
                        <Button type="submit">{"Create Community"}</Button>
                      </div>
                    </form>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Button onClick={toggleModal} size="sm" variant="outline">
                    Cancel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </p>
        </div>
        <div className="flex gap-3 items-center bg-white px-6 py-2 rounded-lg shadow-md shadow-[#00000047] lg:w-4/12 w-10/12 border-t ">
          <Search className="text-gray-500" />
          <Input
            type="text"
            className="w-full outline-none border-none"
            placeholder="Search for communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="md:max-w-5xl max-w-3xl md:mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 lg:gap-4 mx-4 gap-4">
        {filteredCommunities.map(({ slug, name, description, images }) => {
          return (
            <Card
              name={name}
              key={slug}
              slug={slug}
              description={description}
              image={images[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Community;
