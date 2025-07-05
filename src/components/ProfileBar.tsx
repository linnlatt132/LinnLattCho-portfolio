import Profile from "../assets/images/profileLogo.svg?react";
import DarkLight from "./DarkLight";

const ProfileBar = () => {
  return (
    <div className="bg-transparent flex flex-col sm:flex-row my-5 px-4 sm:px-0 justify-between items-center gap-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <Profile className="rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] border-2 border-purple-500" />

        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold leading-tight">
            <span className="tracking-tight">Hello! I'm</span> Linn Latt Cho
          </h1>

          <div className="mt-2 flex items-center space-x-2 border-dashed border rounded-full border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 px-3 py-1 text-sm sm:text-base">
            <div className="w-[8px] h-[8px] rounded-full bg-green-500 animate-pulse"></div>
            <p className="font-extralight text-[15px] tracking-tight  ">
              Available for work!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <DarkLight />
      </div>
    </div>
  );
};

export default ProfileBar;
