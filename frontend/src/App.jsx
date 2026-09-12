import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Logout from "./auth/pages/Logout";
import Home from "./Home/pages/Home";
import { checkAuth } from "./auth/store/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative min-h-screen overflow-x-hidden bg-base font-body text-text selection:bg-lime selection:text-black">
              <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-lime/[0.035] blur-[160px]" />

                <div className="absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-lime/[0.025] blur-[180px]" />

                <div className="absolute bottom-20 left-1/3 h-[400px] w-[700px] rounded-full bg-lime/[0.02] blur-[170px]" />

                <div className="absolute inset-0 bg-[radial-gradient(#BFFF0006_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

                <div className="absolute inset-0 scanline-overlay opacity-30" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <Home />
              </div>
            </div>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
