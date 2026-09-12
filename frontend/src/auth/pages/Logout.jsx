import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] text-[#e2e3de]">
      <p className="font-mono text-xs uppercase tracking-wider text-[#8d9479]">
        Signing out...
      </p>
    </main>
  );
};

export default Logout;
