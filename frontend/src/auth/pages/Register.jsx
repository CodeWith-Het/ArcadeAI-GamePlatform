import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import useAuth from "../hook/useAuth";

const Register = () => {
  const { register, loading, error, success } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthLayout title="SIGN UP" subtitle="Create your new account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full bg-[#121412] border border-[#282a28] focus:border-[#b8f600] rounded-xl px-4 py-4 text-sm text-white placeholder:text-[#8d9479] outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
            className="w-full bg-[#121412] border border-[#282a28] focus:border-[#b8f600] rounded-xl px-4 py-4 text-sm text-white placeholder:text-[#8d9479] outline-none transition-all"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full bg-[#121412] border border-[#282a28] focus:border-[#b8f600] rounded-xl px-4 py-4 text-sm text-white placeholder:text-[#8d9479] outline-none transition-all"
          />
        </div>

        {error && (
          <div className="text-[10px] text-red-400 font-mono uppercase px-1">
            {error}
          </div>
        )}
        {success && (
          <div className="text-[10px] text-[#b8f600] font-mono uppercase px-1">
            Registration successful!
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 rounded-xl bg-gradient-to-r from-[#b8f600] to-[#8ebf00] px-4 py-4 text-sm font-bold text-[#050505] transition-all hover:shadow-[0_0_20px_rgba(184,246,0,0.3)] active:scale-[0.98] disabled:opacity-50 uppercase tracking-wider"
        >
          {loading ? "PROCESSING..." : "CONTINUE"}
        </button>
      </form>

      <div className="mt-10 mb-6 flex items-center">
        <span className="text-xs font-medium text-[#8d9479]">
          Or continue with open account
        </span>
      </div>

      <div className="grid gap-4">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#121412] border border-[#282a28] hover:border-[#b8f600]/50 py-3.5 transition-all">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
              fill="#EA4335"
            />
            <path
              d="M23.49 12.27c0-.8-.07-1.57-.2-2.32H12v4.4h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.55-5.17 3.55-8.71z"
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
          <span className="text-[11px] font-bold text-white uppercase tracking-wider">
            Google
          </span>
        </button>
      </div>

      {/* ================= NEW: Redirect Link at Bottom ================= */}
      <div className="mt-10 text-center text-[11px] text-[#8d9479] font-mono tracking-wide">
        ALREADY A MEMBER?{" "}
        <Link
          to="/login"
          className="text-white font-bold hover:text-[#b8f600] transition-colors ml-1"
        >
          SIGN IN
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;