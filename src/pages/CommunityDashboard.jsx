import { useState } from "react";
import axios from "axios";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { PageTitle } from "./Dashboard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pen, Trash } from "lucide-react";
import useCommunities from "@/hooks/useCommunity";
import useCategories from "@/hooks/useCategories";

const CommunityDashboard = () => {
  const [updateCategory, setUpdateCategoryId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category_id: "",
  });
  const { toast } = useToast();
  const { categories } = useCategories();
  const { community, loading, error, fetchCommunities } = useCommunities();

  const toggleModal = () => {
    if (isEdit) {
      setIsEdit(() => false);
      setFormData({
        name: "",
        description: "",
      });
    }
    setIsModalOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
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
      if (isEdit) {
        await axios.patch(
          "/api/admin/community/update/" + updateCategory,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast({
          variant: "default",
          title: "Success",
          description: "Community updated successfully.",
        });
      } else {
        await axios.post("/api/admin/community/create", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }
      setUpdateCategoryId("");
      fetchCommunities();
      setIsEdit(() => false);
      setIsModalOpen(() => false);
      setFormData({
        name: "",
        description: "",
      });
      toast({
        variant: "default",
        title: "Success",
        description: "Community created successfully.",
      });
    } catch (error) {
      setIsModalOpen(false);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error?.response?.data?.message ||
          "Failed to create Community.Please try again.",
      });
      console.error("Error creating Community:", error);
    }
  };

  const handleEdit = (category) => {
    console.log(category);
    setFormData({
      name: category.name,
      description: category?.description,
      category_id: category.category_id,
    });
    setIsEdit(() => true);
    setUpdateCategoryId(() => category.id);
    setIsModalOpen(() => true);
  };

  const handleDelete = async (community) => {
    try {
      await axios.delete(`api/admin/community/delete/${community?.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchCommunities();
      toast({
        variant: "default",
        title: "Success",
        description: "Category deleted successfully.",
      });
    } catch (error) {
      console.log("Error deleting category:", error);
    }
  };

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded-lg"
            onClick={() => handleEdit(row.original)}
          >
            <Pen className="w-5 h-5" />
          </Button>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-red-400 hover:bg-red-500 text-white px-2 py-1 rounded-lg">
                  <Trash className="w-5 h-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your Data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button
                      className="bg-red-400 hover:bg-red-500 flex items-center justify-center text-white px-2 py-1 rounded-lg"
                      onClick={() => handleDelete(row.original)}
                    >
                      <Trash className="w-5 h-5" />
                      <span className="ml-1 text-base">Delete</span>
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ),
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="flex flex-col gap-5 w-full cursive--font">
      <PageTitle title="Community" />
      <DataTable columns={columns} data={community} />
      <AlertDialog open={isModalOpen}>
        <AlertDialogTrigger asChild>
          <button
            className="fixed right-10 bottom-6 rounded-full md:w-12 bg-primary text-white shadow-md md:h-12  md:text-4xl text-2xl w-8 h-8 flex justify-center items-center"
            onClick={toggleModal}
          >
            +
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle className="md:text-4xl text-2xl text-black/70 text-center rounded-full  dark:text-slate-100">
            {isEdit ? "Update your Community" : "Create Your Community"}
          </AlertDialogTitle>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-4 rounded-xl w-full mx-auto bg-white border mt-4 dark:bg-transparent"
          >
            <div>
              <Label htmlFor="name" className="my-4">
                Community Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Community name"
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
                placeholder="Enter Community description"
                className="my-2"
              />
            </div>
            <div>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                className="p-2 border-[1px] rounded-md dark:bg-transparent mt-2"
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
              <Button type="submit">
                {isEdit ? "Update Community" : "Create Community"}
              </Button>
            </div>
          </form>
          <AlertDialogFooter>
            <Button onClick={toggleModal} variant="outline">
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CommunityDashboard;

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border bg-white dark:bg-slate-900">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
