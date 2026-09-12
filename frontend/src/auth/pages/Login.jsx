import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import useAuth from "../hook/useAuth";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Feedback", href: "/#feedback" },
  { label: "Demo", href: "/#demo" },
];

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("/#", ""));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const el = document.querySelector(href.replace("/", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
    navigate("/login");
  };

  // Database se jo field aa rahi hai usko yahan set karein (user.username ya user.name)
  const displayName = user?.username || user?.name || "Player";
  const firstLetter = displayName.charAt(0).toUpperCase();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 transition-all duration-500 sm:px-7 ${
            scrolled
              ? "glass border border-transparent py-3 shadow-2xl shadow-black/50"
              : "border border-transparent py-3.5"
          }`}
          style={{ width: "calc(100% - 2rem)" }}
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("/#home")}
              className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-lime-500/10 border border-lime-500/20">
                <span className="font-display text-lg font-bold text-lime-500">
                  A
                </span>
                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-lime-500 animate-pulse-soft" />
              </div>
              <span className="font-display text-lg font-bold tracking-tighter text-bone-50">
                Arcade<span className="text-lime-500">.AI</span>
              </span>
            </button>
            <div className="hidden items-center gap-1.5 sm:flex">
              <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse-soft" />
              <span className="font-mono text-[10px] text-bone-400 uppercase tracking-ultra">
                Live
              </span>
            </div>
          </div>

          {/* Center: Nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("/#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="group relative px-4 py-2"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${isActive ? "text-bone-50" : "text-bone-400 group-hover:text-bone-50"}`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-lime-500 transition-all duration-300 ${isActive ? "w-5" : "w-0 group-hover:w-5"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Auth / User Profile */}
          <div className="hidden items-center gap-4 md:flex">
            {user ? (
              <div className="flex items-center gap-4">
                {/* User Profile Badge */}
                <div className="flex items-center gap-2.5 rounded-full border border-line bg-ink-800/80 pr-4 pl-1.5 py-1.5 shadow-[0_0_15px_rgba(191,255,0,0.05)]">
                  {/* Round Avatar */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-500 text-ink-950">
                    <span className="font-bold text-sm leading-none">
                      {firstLetter}
                    </span>
                  </div>
                  {/* Database Username */}
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-bone-50">
                    {displayName}
                  </span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center rounded-lg p-2 text-bone-400 transition-colors hover:text-red-400 hover:bg-red-500/10"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <Link
                  to="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-bone-200 transition-colors hover:text-bone-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="group relative overflow-hidden rounded-lg bg-lime-500 px-5 py-2 text-sm font-bold text-ink-950 transition-all duration-300 hover:bg-lime-400 hover:shadow-lg hover:shadow-lime-500/20 active:scale-95"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-bone-200 md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 right-0 top-20 mx-4 rounded-2xl border border-line glass p-6 transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-4"}`}
        >
          {user && (
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-line">
              <div className="h-10 w-10 rounded-full bg-lime-500 flex items-center justify-center shadow-[0_0_15px_rgba(191,255,0,0.2)]">
                <span className="text-lg font-bold text-ink-950">
                  {firstLetter}
                </span>
              </div>
              <div>
                <p className="text-[10px] text-bone-400 font-mono uppercase tracking-ultra">
                  Logged in as
                </p>
                <p className="text-sm font-bold text-bone-50 uppercase tracking-wider">
                  {displayName}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium text-bone-200 transition-colors hover:bg-ink-700 hover:text-bone-50"
              >
                {link.label}
                <ChevronDown size={16} className="-rotate-90 text-bone-600" />
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-line pt-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 px-4 py-3 text-sm font-bold text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut size={16} /> LOGOUT
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-center rounded-xl border border-line px-4 py-3 text-sm font-medium text-bone-200 transition-colors hover:text-bone-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="text-center rounded-xl bg-lime-500 px-4 py-3 text-sm font-bold text-ink-950 transition-all active:scale-95"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(formData);
      navigate("/");
    } catch (submitError) {
      console.error(submitError);
    }
  };

  return (
    <AuthLayout title="WELCOME BACK" subtitle="Sign in to continue playing">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            autoComplete="username"
            required
            className="w-full rounded-xl border border-[#282a28] bg-[#121412] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-[#8d9479] focus:border-[#b8f600]"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-[#282a28] bg-[#121412] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-[#8d9479] focus:border-[#b8f600]"
          />
        </div>

        {error && (
          <div className="px-1 font-mono text-[10px] uppercase text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#b8f600] to-[#8ebf00] px-4 py-4 text-sm font-bold uppercase tracking-wider text-[#050505] transition-all hover:shadow-[0_0_20px_rgba(184,246,0,0.3)] active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? "SIGNING IN..." : "CONTINUE"}
        </button>
      </form>

      {/* Google Login */}
      <div className="mt-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#282a28]" />
          <span className="font-mono text-[10px] text-[#8d9479]">OR</span>
          <div className="h-px flex-1 bg-[#282a28]" />
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#282a28] bg-[#121412] py-3.5 transition-all hover:border-[#b8f600]/50"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
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

          <span className="text-[11px] font-bold uppercase tracking-wider text-white">
            Continue with Google
          </span>
        </button>
      </div>

      <div className="mt-10 text-center font-mono text-[11px] tracking-wide text-[#8d9479]">
        NEW TO ARCADE.AI?{" "}
        <Link
          to="/register"
          className="ml-1 font-bold text-white transition-colors hover:text-[#b8f600]"
        >
          SIGN UP
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
