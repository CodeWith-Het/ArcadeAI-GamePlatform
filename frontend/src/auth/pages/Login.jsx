import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN:", formData);
    // Backend later: axios.post("/api/auth/login", formData)
  };

  const handleGoogleAuth = () => {
    console.log("Google Authentication");
  };

  return (
    <AuthLayout>
      <div className="p-5 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ================= EMAIL / USERNAME ================= */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="username"
                className="text-[10px] text-[#c3caac] uppercase font-mono flex items-center gap-1 font-semibold tracking-wider"
              >
                <span className="text-[#b8f600]">#</span>
                Email or Username
              </label>
              <span className="text-[9px] text-[#8d9479] font-mono uppercase tracking-wider">
                Required
              </span>
            </div>

            <div className="min-h-11 flex items-center bg-[#0d0f0c] border border-[#434933]/60 focus-within:border-[#b8f600] focus-within:shadow-[0_0_0_1px_#b8f600] transition-all">
              <span className="px-3 py-2.5 border-r border-[#434933]/30 text-[12px] text-[#8d9479] font-mono">
                @
              </span>

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="name@example.com"
                autoComplete="username"
                required
                className="flex-1 min-w-0 bg-transparent outline-none border-none px-3 py-2.5 text-xs text-[#e2e3de] placeholder:text-[#8d9479]/40 font-mono"
              />

              <span className="material-symbols-outlined text-[#8d9479] text-base mr-3">
                mail
              </span>
            </div>
          </div>

          {/* ================= PASSWORD ================= */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[10px] text-[#c3caac] uppercase font-mono flex items-center gap-1 font-semibold tracking-wider"
              >
                <span className="text-[#b8f600]">#</span>
                Password
              </label>

              <button
                type="button"
                className="text-[9px] text-[#8d9479] hover:text-[#b8f600] uppercase font-mono transition-colors tracking-wider"
              >
                Forgot Password?
              </button>
            </div>

            <div className="min-h-11 flex items-center bg-[#0d0f0c] border border-[#434933]/60 focus-within:border-[#b8f600] focus-within:shadow-[0_0_0_1px_#b8f600] transition-all">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••••••••"
                autoComplete="current-password"
                required
                className="flex-1 min-w-0 bg-transparent outline-none border-none px-3 py-2.5 text-xs text-[#e2e3de] placeholder:text-[#8d9479]/40 font-mono"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="px-3 text-[#8d9479] hover:text-[#e2e3de] transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            <div className="pt-1 flex items-center gap-1.5 text-[9px] text-[#8d9479] uppercase font-mono tracking-wider">
              <span className="material-symbols-outlined text-[#b8f600] text-sm">
                lock
              </span>
              Secure Connection Encrypted
            </div>
          </div>

          {/* ================= REMEMBER ME ================= */}
          <label className="flex items-center gap-2 cursor-pointer select-none text-[10px] text-[#c3caac] uppercase font-mono tracking-wider">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 appearance-none border border-[#434933] bg-[#0d0f0c] checked:bg-[#b8f600] checked:border-[#b8f600] relative checked:after:content-['✓'] checked:after:absolute checked:after:text-[#263500] checked:after:text-xs checked:after:left-[2px] checked:after:top-[-2px]"
            />
            Remember Me
          </label>

          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            className="w-full py-3 bg-[#b8f600] text-[#263500] font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#a1d800] hover:shadow-[0_0_20px_rgba(184,246,0,0.4)] active:scale-[0.99] transition-all"
          >
            <span>Sign In</span>
            <span className="material-symbols-outlined font-bold text-lg">
              login
            </span>
          </button>
        </form>

        {/* ================= DIVIDER ================= */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute w-full border-t border-[#434933]/30" />
          <span className="relative bg-[#0d0f0c] px-3 text-[9px] text-[#8d9479] uppercase tracking-wider font-mono">
            Or continue with
          </span>
        </div>

        {/* ================= SOCIAL AUTH ================= */}
        <div>
          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            className="w-full group flex items-center justify-center gap-2 py-2.5 px-3 bg-[#121412] border border-[#434933]/40 hover:border-[#b8f600] hover:shadow-[0_0_12px_-2px_rgba(184,246,0,0.25)] transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                fill="#EA4335"
              />
              <path
                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1-8.9z"
                fill="#4285F4"
              />
              <path
                d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.1-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2c0 2.9.7 5.5 1.9 7.9l3.7-2.9z"
                fill="#FBBC05"
              />
              <path
                d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
                fill="#34A853"
              />
            </svg>
            <span className="text-[10px] text-[#e2e3de] group-hover:text-[#b8f600] uppercase tracking-wider font-mono transition-colors">
              Google
            </span>
          </button>
        </div>

        {/* ================= REGISTER LINK ================= */}
        <div className="mt-6 pt-4 border-t border-[#434933]/20 text-center">
          <span className="text-[10px] text-[#8d9479] font-mono tracking-wider">
            DON'T HAVE AN ACCOUNT?
          </span>
          <Link
            to="/register"
            className="ml-2 text-[10px] text-[#b8f600] hover:text-[#e2ff9a] uppercase font-mono font-semibold tracking-wider transition-colors"
          >
            SIGN UP →
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;