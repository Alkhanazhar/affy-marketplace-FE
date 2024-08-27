import { useSelector } from "react-redux";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";

const LoginPage = () => {
  const isLogIn = useSelector((state) => state.auth.isLogIn);
  return (
    <main className="max-w-7xl p-4 mx-auto pt-8">
      {isLogIn ? <Login /> : <Register />}
    </main>
  );
};

export default LoginPage;
