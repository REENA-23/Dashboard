import { FaHome, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#eef3f7] flex items-center justify-center p-4 sm:p-6 md:h-screen md:overflow-hidden">
      {/* Outer container */}
      <div className="w-full max-w-[1500px] h-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* LEFT CARD */}
        <div className="relative bg-[#E9E3D9] rounded-[20px] flex items-center justify-center overflow-hidden min-h-[480px] sm:min-h-[520px] md:h-full">
          <img
            src="/image-logo/leave.png"
            alt="leaf"
            className="absolute top-0 left-0 w-[60px] sm:w-[80px] md:w-[70px] lg:w-[140px] pointer-events-none select-none"
          />

          <img
            src="/image-logo/shopping.png"
            alt="shopping"
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[520px] object-contain z-10"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-white rounded-[20px] flex items-center justify-center min-h-[480px] sm:min-h-[520px] md:h-full overflow-hidden">
          
          {/* Content */}
          <div
            className="
              w-full max-w-md h-full
              px-4 sm:px-6 md:px-6 lg:px-16
              py-4 md:py-6 lg:py-10
              pb-12 md:pb-12 lg:pb-28
              flex flex-col items-center justify-center
              z-10
            "
          >
            {/* Go to Home */}
            <button
              onClick={() => navigate("/dashboard")}
              className="mb-4 lg:mb-8 font-switzer flex items-center gap-2 text-[12px] md:text-[13px] lg:text-[16px] bg-gray-100 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition"
            >
              <FaHome className="text-base lg:text-xl" />
              Go to Home
            </button>

            {/* TWB Badge */}
            <div className="bg-black font-ivymode text-white w-[56px] h-[26px] lg:w-[67px] lg:h-[30px] flex items-center justify-center rounded-md font-semibold tracking-widest mb-3 lg:mb-6 text-[10px] lg:text-xs">
              TWB
            </div>

            {/* Title */}
            <h1 className="font-inter text-[15px] md:text-[16px] lg:text-[22px] font-bold text-gray-800 mb-1 text-center">
              Please log in to your account
            </h1>

            {/* Subtitle */}
            <p className="font-switzer text-gray-500 text-[10px] md:text-[11px] lg:text-[13px] mb-4 lg:mb-8 text-center">
              Welcome back! Please sign in using your credentials.
            </p>

            {/* FORM */}
            <div className="w-full">
              <div className="mb-3 lg:mb-5">
                <label className="font-inter block text-[12px] lg:text-[16px] text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="font-switzer w-full h-8 lg:h-10 border border-gray-200 rounded-md px-4 text-[11px] lg:text-[13px] focus:outline-none focus:ring-2 focus:ring-orange-400 hover:border-orange-500"
                />
              </div>

              <div className="mb-4 lg:mb-8">
                <label className="font-inter block text-[12px] lg:text-[16px] text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="name@123"
                  className="font-switzer w-full h-8 lg:h-10 border border-gray-200 rounded-md px-4 text-[11px] lg:text-[13px] focus:outline-none focus:ring-2 focus:ring-orange-400 hover:border-orange-500"
                />
              </div>

              <button
                onClick={() => navigate("/dashboard")}
                className="font-switzer w-full h-[34px] lg:h-[42px] bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition mb-3 lg:mb-4 text-[12px] lg:text-[14px]"
              >
                Sign in
              </button>

              <button className="font-switzer w-full h-[34px] lg:h-[42px] bg-gray-100 text-gray-700 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition text-[11px] lg:text-[13px]">
                <FaGoogle />
                Sign in with Google
              </button>
            </div>

            {/* Bottom Text */}
            <p className="font-switzer text-center text-[10px] lg:text-[12px] text-gray-500 mt-4 lg:mt-8">
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
            className="absolute bottom-0 right-0 w-[50px] md:w-[60px] lg:w-[140px] rotate-180 pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
}
