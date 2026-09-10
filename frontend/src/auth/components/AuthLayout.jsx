import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0d0f0c] text-[#e2e3de] relative overflow-x-hidden">
      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Cyber Grid */}
        <div
          className="
            absolute inset-0 opacity-40
            bg-[linear-gradient(to_right,rgba(67,73,51,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(67,73,51,0.12)_1px,transparent_1px)]
            bg-[size:32px_32px]
          "
        />

        {/* Ambient Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_45%,rgba(184,246,0,0.07),transparent_60%)]
          "
        />

        {/* Scan Laser */}
        <div
          className="
            absolute left-0 right-0 top-0 h-px
            bg-gradient-to-r
            from-transparent
            via-[#b8f600]/70
            to-transparent
            shadow-[0_0_12px_1px_rgba(184,246,0,0.5)]
            animate-[scan_6s_ease-in-out_infinite]
          "
        />
      </div>

      {/* ================= HEADER ================= */}

      <header
        className="
          relative z-20
          w-full
          border-b border-[#434933]/30
          bg-[#0d0f0c]/80
          backdrop-blur-md
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            h-16
            flex items-center justify-between
          "
        >
          {/* Brand */}

          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="
                  w-8 h-8
                  bg-[#121412]
                  border border-[#434933]/50
                  flex items-center justify-center
                  group-hover:border-[#b8f600]
                  transition-colors
                "
              >
                <span className="material-symbols-outlined text-[#b8f600]">
                  terminal
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    text-lg
                    font-bold
                    tracking-wider
                    uppercase
                    leading-none
                    text-[#b8f600]
                  "
                >
                  Arcade.AI
                </span>

                <span
                  className="
                    text-[9px]
                    tracking-[0.2em]
                    uppercase
                    text-[#8d9479]
                    font-mono
                  "
                >
                  KERNEL v2.5-PROD
                </span>
              </div>
            </Link>
          </div>

          {/* Right */}

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
 
            </div>

            <Link
              to="/"
              className="
                flex items-center gap-1.5
                px-3 py-2
                border border-[#434933]/40
                bg-[#121412]
                text-[#e2e3de]
                hover:text-[#b8f600]
                hover:border-[#b8f600]
                transition-all
                text-[10px]
                uppercase
                font-mono
              "
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>

              <span className="hidden sm:inline">RETURN TO PORTAL</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main
        className="
          relative z-10
          min-h-[calc(100vh-64px)]
          flex flex-col
          items-center justify-center
          px-4 py-8
          sm:px-6 sm:py-12
        "
      >
        {/* Terminal Wrapper */}

        <div className="w-full max-w-xl">
          {/* Metadata */}

          <div
            className="
              flex items-center justify-between
              px-2 pb-1
              text-[9px]
              text-[#8d9479]
              uppercase
              font-mono
            "
          >
          </div>

          {/* ================= TERMINAL ================= */}

          <div
            className="
              relative
              bg-[#0d0f0c]/90
              border border-[#434933]/50
              backdrop-blur-xl
              shadow-[0_0_30px_-5px_rgba(0,0,0,0.8)]
              before:absolute
              before:-top-px
              before:-left-px
              before:w-2
              before:h-2
              before:border-t-2
              before:border-l-2
              before:border-[#b8f600]
              after:absolute
              after:-bottom-px
              after:-right-px
              after:w-2
              after:h-2
              after:border-b-2
              after:border-r-2
              after:border-[#b8f600]
            "
          >
            {/* Top light */}

            <div
              className="
                h-px w-full
                bg-gradient-to-r
                from-transparent
                via-[#b8f600]/40
                to-transparent
              "
            />

            {/* Terminal Header */}

            <div
              className="
                p-5 sm:p-6
                border-b border-[#434933]/30
                bg-[#121412]/40
                flex flex-col gap-1.5
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b8f600]">
                    fingerprint
                  </span>

                  <h1
                    className="
                      text-lg sm:text-xl
                      font-semibold
                      uppercase
                      tracking-tight
                      text-[#e2e3de]
                    "
                  >
                    OPERATOR IDENTITY ACCESS
                  </h1>
                </div>

                <span
                  className="
                    hidden sm:block
                    px-2 py-1
                    bg-[#282a28]
                    border border-[#434933]/40
                    text-[9px]
                    text-[#b8f600]
                    uppercase
                    font-mono
                  "
                >
                  PROT 802.11AE
                </span>
              </div>

              <p
                className="
                  text-xs sm:text-sm
                  text-[#c3caac]
                  leading-5
                "
              >
                Initialize spatial tracking context and synchronize local
                neural-biometric coefficients.
              </p>
            </div>

            {/* PAGE CONTENT */}

            {children}

            {/* ================= SECURITY ================= */}

            <div
              className="
                px-5 sm:px-6
                py-3
                border-t border-[#434933]/30
                bg-[#121412]/60
                flex flex-col sm:flex-row
                items-center justify-between
                gap-2
                text-[9px]
                text-[#8d9479]
                uppercase
                font-mono
              "
            >
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#b8f600] text-sm">
                  shield
                </span>

                <span>AES-256 WEBGPU ENCLAVE ISOLATION</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#c3caac]">
                <span
                  className="
                    w-1.5 h-1.5
                    bg-[#b8f600]
                    rounded-full
                  "
                />

                <span>AIR-GAP: NO RAW BIOMETRIC VIDEO LOGGED</span>
              </div>
            </div>
          </div>

          {/* ================= TELEMETRY ================= */}

          <div
            className="
              mt-3
              flex items-center justify-between
              px-2
              text-[9px]
              text-[#8d9479]
              uppercase
              font-mono
            "
          >
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}

      <footer
        className="
          w-full
          bg-[#0d0f0c]
          border-t border-[#434933]/20
          relative z-20
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            py-6
            flex flex-col md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <div
            className="
              text-[9px]
              text-[#c3caac]
              tracking-wider
              uppercase
              font-mono
              text-center md:text-left
            "
          >
            SYSTEMS OPERATIONAL // ARCADE.AI PROTOCOL 2025 // ALL RIGHTS
            RESERVED
          </div>

          <div
            className="
              flex flex-wrap
              justify-center
              items-center
              gap-5
            "
          >
            <a
              href="#"
              className="text-[9px] text-[#c3caac] hover:text-[#b8f600] uppercase font-mono transition-colors"
            >
              Privacy Protocol
            </a>

            <a
              href="#"
              className="text-[9px] text-[#c3caac] hover:text-[#b8f600] uppercase font-mono transition-colors"
            >
              Security Kernel
            </a>

            <a
              href="#"
              className="text-[9px] text-[#c3caac] hover:text-[#b8f600] uppercase font-mono transition-colors"
            >
              Terminal API
            </a>

            <a
              href="#"
              className="text-[9px] text-[#c3caac] hover:text-[#b8f600] uppercase font-mono transition-colors"
            >
              <span className="text-[#b8f600]">●</span> Node Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;