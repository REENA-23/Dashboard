import { FaHome, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#eef3f7] flex items-center justify-center p-6">
      {/* Outer container */}
      <div className="w-full max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT CARD */}
        <div className="relative bg-[#E9E3D9] rounded-[20px] flex items-center justify-center overflow-hidden min-h-[600px] md:min-h-[962px]">
          
          {/* Top-left leaf */}
          <img
            src="/image-logo/leave.png"
            alt="leaf"
            className="absolute top-0 left-0 w-[160px] pointer-events-none select-none"
          />

          {/* Main illustration */}
          <img
            src="/image-logo/shopping.png"
            alt="shopping"
            className="w-[300px] sm:w-[420px] md:w-[520px] lg:w-[551px] object-contain z-10"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-white rounded-[20px] flex items-center justify-center px-6 sm:px-10 lg:px-16 py-10 min-h-[600px] md:min-h-[962px]">
          <div className="w-full max-w-md flex flex-col items-center h-full">
            
            {/* Go to Home */}
            <button
              onClick={() => navigate("/dashboard")}
              className="mt-4 mb-8 font-switzer flex items-center gap-2 text-[16px] bg-gray-100 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition"
            >
              <FaHome className="text-xl" />
              Go to Home
            </button>

            {/* TWB Badge */}
            <div className="bg-black font-ivymode text-white w-[67px] h-[30px] flex items-center justify-center rounded-md font-semibold tracking-widest mb-8 text-xs">
              TWB
            </div>

            {/* Title */}
            <h1 className="font-inter text-[20px] sm:text-[22px] font-bold text-gray-800 mb-2 text-center">
              Please log in to your account
            </h1>

            {/* Subtitle */}
            <p className="font-switzer text-gray-500 text-[12px] sm:text-[13px] mb-10 text-center">
              Welcome back! Please sign in using your credentials.
            </p>

            {/* FORM */}
            <div className="w-full">
              {/* Email */}
              <div className="mb-5">
                <label className="font-inter block text-[16px] text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="font-switzer w-full h-10 border border-gray-200 rounded-md px-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-orange-400 hover:border-orange-500"
                />
              </div>

              {/* Password */}
              <div className="mb-8">
                <label className="font-inter block text-[16px] text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="name@123"
                  className="font-switzer w-full h-10 border border-gray-200 rounded-md px-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-orange-400 hover:border-orange-500"
                />
              </div>

              {/* Sign In */}
              <button
                onClick={() => navigate("/dashboard")}
                className="font-switzer w-full h-[42px] bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition mb-4 text-[13px]"
              >
                Sign in
              </button>

              {/* Google */}
              <button className="font-switzer w-full h-[42px] bg-gray-100 text-gray-700 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition text-[13px]">
                <FaGoogle />
                Sign in with Google
              </button>
            </div>

            {/* Push bottom text down */}
            <div className="flex-1" />

            {/* Bottom Text */}
            <p className="font-switzer text-center text-[12px] text-gray-500 mb-4">
              Don&apos;t have an account?{" "}
              <span className="text-orange-500 cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </div>

          {/* Bottom-right leaf */}
          <img
            src="/image-logo/leave1.png"
            alt="leaf"
            className="absolute bottom-0 right-0 w-[160px] rotate-180 pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
