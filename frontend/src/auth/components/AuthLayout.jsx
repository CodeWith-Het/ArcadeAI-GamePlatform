import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AuthLayout = ({ children, title, subtitle }) => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const heroImage = isLogin
    ? "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80"
    : "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80";

  return (
    <div className="min-h-screen bg-[#050505] text-[#e2e3de] flex flex-col lg:flex-row overflow-hidden font-sans">
      {/* ================= LEFT PANEL ================= */}
      <div className="relative w-full h-[42vh] sm:h-[38vh] lg:h-screen lg:w-[55%] bg-[#0d0f0c] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-12">
        {/* Different image for Login / Register */}
        <motion.img
          src={heroImage}
          alt={isLogin ? "Arcade gaming experience" : "Arcade gaming world"}
          initial={{
            scale: 1.08,
            x: isLogin ? -15 : 15,
          }}
          animate={{
            scale: [1.08, 1.15, 1.08],
            x: isLogin ? [-15, 10, -15] : [15, -10, 15],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,246,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,246,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]" />

        {/* Glowing orb */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -left-10 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-[#b8f600]/20 to-transparent blur-[50px] sm:blur-[80px]"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/4 right-4 sm:right-10 w-[110px] h-[110px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-to-bl from-[#b8f600]/25 to-transparent blur-[40px] sm:blur-[60px]"
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#121412] border border-[#b8f600]/30 transition-colors group-hover:border-[#b8f600]">
              <span className="font-display text-sm sm:text-base font-bold text-[#b8f600]">
                A
              </span>
            </div>

            <span className="font-display text-base sm:text-lg font-bold tracking-wider text-white">
              Arcade<span className="text-[#b8f600]">.AI</span>
            </span>
          </Link>
        </div>

        {/* Bottom Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <div className="mb-2 sm:mb-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#b8f600]/30 bg-[#050505]/70 px-2.5 sm:px-3 py-0.5 sm:py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8f600] animate-pulse" />

            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] text-[#b8f600]">
              Neural Link Active
            </span>
          </div>

          {/* Different sentence */}
          <h1 className="font-display text-xl sm:text-2xl lg:text-5xl font-bold leading-tight text-white mb-1 sm:mb-2">
            {isLogin ? (
              <>
                RETURN TO <br className="hidden sm:block" /> THE ARCADE
              </>
            ) : (
              <>
                CREATE YOUR <br className="hidden sm:block" /> LEGACY
              </>
            )}
          </h1>

          <p className="text-[#8d9479] text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em]">
            Arcade.AI Engine
          </p>
        </motion.div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
        }}
        className="relative w-full flex-1 lg:w-[45%] bg-[#050505] rounded-t-[1.5rem] sm:rounded-t-[2rem] lg:rounded-none -mt-6 sm:-mt-8 lg:mt-0 z-20 flex flex-col px-5 sm:px-6 py-8 sm:py-10 lg:p-16 overflow-y-auto"
      >
        <div className="w-full max-w-sm mx-auto my-auto">
          {/* Mobile signup/login switch */}
          <div className="flex lg:hidden justify-end mb-6 sm:mb-8 text-[10px] text-[#8d9479] font-mono tracking-wide">
            {isLogin ? "NEW? " : "MEMBER? "}

            <Link
              to={isLogin ? "/register" : "/login"}
              className="text-white font-bold ml-1 hover:text-[#b8f600]"
            >
              {isLogin ? "SIGN UP" : "SIGN IN"}
            </Link>
          </div>

          {/* Form Heading */}
          <div className="mb-8 sm:mb-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              {title}
            </h2>

            <p className="text-[#8d9479] text-sm font-medium">{subtitle}</p>
          </div>

          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;