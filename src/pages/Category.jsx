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

const Category = () => {
  const handleEdit = (item) => {
    console.log("Editing:", item);
  };

  const handleDelete = (item) => {
    console.log("Deleting:", item);
  };
  const data = [
    {
      name: "Wedding Photography",
      description: "Capture the most memorable moments of weddings.",
      lastUpdated: "2023-01-01",
      popularity: "High",
    },
    {
      name: "Event Photography",
      description: "Specializing in corporate and private events.",
      lastUpdated: "2023-02-15",
      popularity: "Medium",
    },
    {
      name: "Portrait Photography",
      description: "Personalized portraits for individuals and families.",
      lastUpdated: "2023-03-20",
      popularity: "High",
    },
    {
      name: "Commercial Photography",
      description: "Professional images for businesses and advertisements.",
      lastUpdated: "2023-04-10",
      popularity: "Medium",
    },
    {
      name: "Product Photography",
      description: "High-quality images of products for e-commerce.",
      lastUpdated: "2023-05-05",
      popularity: "High",
    },
    {
      name: "Fashion Photography",
      description:
        "Showcasing the latest fashion trends with professional photos.",
      lastUpdated: "2023-06-18",
      popularity: "High",
    },
    {
      name: "Real Estate Photography",
      description: "Photographs of properties for sale or rent.",
      lastUpdated: "2023-07-22",
      popularity: "Medium",
    },
    {
      name: "Travel Photography",
      description: "Capturing the beauty of destinations around the world.",
      lastUpdated: "2023-08-30",
      popularity: "Low",
    },
    {
      name: "Food Photography",
      description:
        "Mouth-watering images of food for restaurants and cookbooks.",
      lastUpdated: "2023-09-12",
      popularity: "High",
    },
    {
      name: "Sports Photography",
      description: "Action-packed shots of athletes and sports events.",
      lastUpdated: "2023-10-25",
      popularity: "Medium",
    },
    {
      name: "Nature Photography",
      description: "Stunning images of wildlife and landscapes.",
      lastUpdated: "2023-11-05",
      popularity: "High",
    },
    {
      name: "Architectural Photography",
      description: "Capturing the essence of buildings and structures.",
      lastUpdated: "2023-12-08",
      popularity: "Medium",
    },
    {
      name: "Documentary Photography",
      description: "Telling stories through powerful images.",
      lastUpdated: "2024-01-18",
      popularity: "Low",
    },
    {
      name: "Aerial Photography",
      description:
        "Bird's eye view photos using drones and other aerial methods.",
      lastUpdated: "2024-02-22",
      popularity: "Medium",
    },
    {
      name: "Fine Art Photography",
      description: "Creative and artistic images for display and collection.",
      lastUpdated: "2024-03-30",
      popularity: "Low",
    },
  ];

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
      accessorKey: "lastUpdated",
      header: "Last Updated",
    },
    {
      accessorKey: "popularity",
      header: "Popularity",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      Cell: ({ row }) => (
        <td className="flex gap-2">
          <Button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => handleEdit(row.original)}
          >
            Edit
          </Button>
          <Button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(row.original)}
          >
            Delete
          </Button>
        </td>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Category" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Category;

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border bg-white">
    
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
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
