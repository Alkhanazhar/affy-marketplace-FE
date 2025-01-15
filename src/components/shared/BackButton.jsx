import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      className="flex gap-3 "
      size="back"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft size={18} />
      Back
    </Button>
  );
};

export default BackButton;
