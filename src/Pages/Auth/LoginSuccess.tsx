import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../../utils/auth";
import axiosInstance from "../../utils/axios";

const LoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      navigate("/auth/login", { replace: true });
      return;
    }
    setToken(token);
    // جيب بيانات الـ user وحطها في localStorage
    axiosInstance
      .get("/auth/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/", { replace: true });
      })
      .catch(() => navigate("/", { replace: true }));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500 text-lg">Logging in...</p>
    </div>
  );
};

export default LoginSuccess;
