import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col space-y-10 cursive--font">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">Page Not Found</h1>
        <h2 className=" text-center text-5xl font-semibold text-red-500">
          500
        </h2>
        <p className=" text-black text-center font-mdeium text-xl">
          Sorry for the inconvenience. <br /> Please go back to the home page.
        </p>
      </div>
      <Button onClick={() => navigate("/")}>Go To Home</Button>
    </div>
  );
}
