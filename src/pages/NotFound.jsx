import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button onClick={() => navigate("/")}>Go to Home</Button>
    </div>
  );
};

export default NotFound;
