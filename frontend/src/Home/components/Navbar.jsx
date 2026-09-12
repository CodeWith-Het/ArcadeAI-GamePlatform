import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import useAuth from "../../auth/hook/useAuth";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Feedback", href: "/#feedback" },
  { label: "Demo", href: "/#demo" },
];

const Navbar = () => {
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
    logout(); // Token clear karega
    setMobileOpen(false);
    navigate("/login");
  };

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
          {/* Left: Logo + status */}
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
              // LOGGED IN STATE
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-ink-800/50 rounded-lg border border-line">
                  <div className="h-5 w-5 rounded-full bg-lime-500/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-lime-500">
                      {user?.username?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-bone-200 uppercase tracking-wider">
                    {user?.username || "PLAYER"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-bone-400 transition-colors hover:text-red-400 hover:bg-red-500/10"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              // LOGGED OUT STATE
              <>
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
              </>
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
              <div className="h-8 w-8 rounded-full bg-lime-500/20 flex items-center justify-center border border-lime-500/30">
                <span className="text-sm font-bold text-lime-500">
                  {user?.username?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
              <div>
                <p className="text-xs text-bone-400 font-mono uppercase tracking-ultra">
                  Logged in as
                </p>
                <p className="text-sm font-bold text-bone-50 uppercase">
                  {user?.username || "PLAYER"}
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
                className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut size={16} /> Logout
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

export default Navbar;