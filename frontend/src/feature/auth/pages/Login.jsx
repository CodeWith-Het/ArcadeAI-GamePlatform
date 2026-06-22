import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Login = () => {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { handLogin,isAuthenicate,isLoading,isError } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {

      await handLogin(formData);
  
      <Navigate to="/" replace />
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 py-8">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00b4d8]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[360px] sm:max-w-md">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-black tracking-[4px] sm:tracking-[6px] text-white uppercase">
            Arcade<span className="text-[#00b4d8]">AI</span>
          </h1>
          <p className="text-[#7b7676] text-xs sm:text-sm mt-2 tracking-widest uppercase">
            Enter The Arena
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0d0d1a] border border-[#1a1a2e] rounded-lg p-5 sm:p-8">
          <h2 className="text-white text-lg sm:text-xl font-bold mb-1">
            Welcome Back
          </h2>
          <p className="text-[#7b7676] text-xl mt-3 sm:text-sm mb-5 sm:mb-6">
            Login to continue playing
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* LoginId */}
            <div>
              <label className="text-xs text-[#888] tracking-widest uppercase mb-1.5 sm:mb-2 block">
                Username or Email
              </label>
              <input
                type="text"
                name="loginId"
                value={formData.loginId}
                onChange={handleChange}
                placeholder="Enter username or email"
                className="w-full bg-[#0a0a0f] border border-[#1a1a2e] text-white rounded px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-[#00b4d8] transition-colors placeholder:text-[#333]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-[#888] tracking-widest uppercase mb-1.5 sm:mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-[#0a0a0f] border border-[#1a1a2e] text-white rounded px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-[#00b4d8] transition-colors placeholder:text-[#333]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#00b4d8] text-xs transition-colors"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#00b4d8] hover:bg-[#0090b0] active:scale-95 text-white font-bold py-2.5 sm:py-3 rounded tracking-[2px] sm:tracking-[3px] uppercase text-sm transition-all mt-2"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5 sm:my-6">
            <div className="flex-1 h-px bg-[#1a1a2e]" />
            <span className="text-[#333] text-xs">OR</span>
            <div className="flex-1 h-px bg-[#1a1a2e]" />
          </div>

          {/* Register Link */}
          <p className="text-center text-[#555] text-xs sm:text-sm">
            New to ArcadeAI?{" "}
            <Link
              to="/register"
              className="text-[#00b4d8] hover:text-white transition-colors font-bold"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
