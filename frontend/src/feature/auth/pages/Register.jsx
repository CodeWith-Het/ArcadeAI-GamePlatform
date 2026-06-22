import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 py-8">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#7b2fff]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[360px] sm:max-w-md">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-black tracking-[4px] sm:tracking-[6px] text-white uppercase">
            Arcade<span className="text-[#00b4d8]">AI</span>
          </h1>
          <p className="text-[#7b7676] text-xs sm:text-sm mt-2 tracking-widest uppercase">
            Join The Arena
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0d0d1a] border border-[#1a1a2e] rounded-lg p-5 sm:p-8">
          <h2 className="text-white text-lg sm:text-xl font-bold mb-1">
            Create Account
          </h2>
          <p className="text-[#7b7676] text-xl mt-3 sm:text-sm mb-5 sm:mb-6">
            Start your gaming journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Username */}
            <div>
              <label className="text-xs text-[#888] tracking-widest uppercase mb-1.5 sm:mb-2 block">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full bg-[#0a0a0f] border border-[#1a1a2e] text-white rounded px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-[#00b4d8] transition-colors placeholder:text-[#333]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-[#888] tracking-widest uppercase mb-1.5 sm:mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
                  placeholder="Create a strong password"
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
              <p className="text-[#333] text-xs mt-1">
                Min 6 chars, 1 uppercase, 1 number, 1 special char
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#00b4d8] hover:bg-[#0090b0] active:scale-95 text-white font-bold py-2.5 sm:py-3 rounded tracking-[2px] sm:tracking-[3px] uppercase text-sm transition-all mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5 sm:my-6">
            <div className="flex-1 h-px bg-[#1a1a2e]" />
            <span className="text-[#333] text-xs">OR</span>
            <div className="flex-1 h-px bg-[#1a1a2e]" />
          </div>

          {/* Login Link */}
          <p className="text-center text-[#555] text-xs sm:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#00b4d8] hover:text-white transition-colors font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;