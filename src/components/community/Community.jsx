import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import useCategories from "@/hooks/useCategories";

import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "../ui/use-toast";
import Card from "../shared/Card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Community = () => {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const { toast } = useToast();

  const [state, setState] = useState({
    searchQuery: "",
    isModalOpen: false,
    communities: [],
    communityLoading: true,
    formData: { name: "", description: "", category_id: "" },
  });

  const { searchQuery, isModalOpen, communities, communityLoading, formData } =
    state;

  const toggleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, category_id } = formData;

    if (!name.trim() || !description.trim() || !category_id) {
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
      setState((prevState) => ({
        ...prevState,
        isModalOpen: false,
        formData: { name: "", description: "", category_id: "" },
      }));
      fetchCommunities();
      toast({
        variant: "default",
        title: "Success",
        description: "Community created successfully.",
      });
    } catch (error) {
      setState((prevState) => ({ ...prevState, isModalOpen: false }));
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error?.response?.data?.message ||
          "Failed to create community. Please try again.",
      });
    }
  };

  const fetchCommunities = async () => {
    setState((prevState) => ({ ...prevState, communityLoading: true }));
    try {
      const { data } = await axios.get("api/admin/community/display");
      setState((prevState) => ({
        ...prevState,
        communities: data.meta,
        communityLoading: false,
      }));
    } catch (error) {
      console.error(error, "Community loading failed");
      setState((prevState) => ({ ...prevState, communityLoading: false }));
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch communities.",
      });
    }
  };

  useEffect(() => {
    fetchCommunities();
  }, []);

  const filteredCommunities = useMemo(() => {
    return communities.filter((community) =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [communities, searchQuery]);

  if (categoriesLoading || communityLoading)
    return (
      <div className="min-h-[50vh] grid md:grid-cols-3 grid-cols-1 max-w-7xl md:mx-auto mt-32 my-40 mx-4">
        {[...Array(9)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-3 w-full justify-center items-center"
          >
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-[300px]" />
              <Skeleton className="h-8 w-[300px]" />
            </div>
          </div>
        ))}
      </div>
    );

  if (categoriesError)
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-500 md:text-3xl text-2xl">
        {categoriesError}
      </div>
    );

  return (
    <div className="pt-16 pb-16 min-h-screen">
      <div className="p-8 flex justify-center items-center flex-col space-y-6 leading-none relative">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center bg-clip-text text-transparent leading-none bg-gradient-to-tr from-green-300 to-primary pb-2">
            Discover communities
          </h1>
          <p className="font-bold text-2xl text-center leading-none">
            <div className="text-black/50 dark:text-white/90">or &nbsp;</div>
            <AlertDialog open={isModalOpen}>
              <AlertDialogTrigger asChild>
                <div
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent leading-none bg-gradient-to-tr from-green-300 to-primary cursor-pointer"
                  onClick={toggleModal}
                >
                  create your own
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-3xl text-center text-black/70 dark:text-zinc-100">
                    Create your Community
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 p-4 rounded-xl w-full mx-auto bg-white dark:bg-transparent border mt-4"
                    >
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
                        className="p-2 border-[1px] rounded-md dark:bg-transparent mt-2"
                      >
                        <option value="">Select a Category</option>
                        {categories?.map((category) => (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
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
        <div className="flex gap-3 items-center bg-white dark:bg-slate-950 px-6 py-2 rounded-lg shadow-md shadow-[#00000047] dark:shadow-white/10 lg:w-4/12 w-10/12 border-t">
          <Search className="text-gray-500" />
          <Input
            type="text"
            className="w-full outline-none border-none"
            placeholder="Search for communities..."
            value={searchQuery}
            onChange={(e) =>
              setState((prev) => ({ ...prev, searchQuery: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="md:max-w-5xl max-w-3xl md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-4 mx-4 gap-4">
        {filteredCommunities?.map(({ name, description, id }) => (
          <Card name={name} key={id} id={id} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Community;
