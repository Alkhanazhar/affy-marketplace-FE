import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Decode the JWT token only once on mount
  // const userInfo = useMemo(() => (token ? jwtDecode(token) : null), [token]);

  const fetchUserInfo = async () => {
    if (!token) {
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        "/api/web/user/verify-token",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUserInfo(response.data.meta.user);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch user information",
      });
      localStorage.removeItem("token");
      navigate("/auth");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, [token]);

  return (
    <AuthContext.Provider value={{ userInfo, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
