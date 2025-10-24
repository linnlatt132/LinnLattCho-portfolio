import DarkLight from "./DarkLight";
// import ProfileGlowFrame from "./ProfileGlowFrame";
import Profile from "../assets/images/profileLogo.svg?react";
import { SpotlightCircle } from "./SportlightCircle";

const ProfileBar = () => {
  return (
    <div className="bg-transparent flex flex-col sm:flex-row mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0 justify-between items-center gap-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <SpotlightCircle size={75} className="cursor-pointer">
          <Profile className="rounded-full w-[70px] h-[70px]" />
        </SpotlightCircle>
        {/* <ProfileGlowFrame /> */}
        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold leading-tight">
            <span className="tracking-tight">Hello! I'm</span> Linn Latt Cho
          </h1>

          <div className="mt-2 flex items-center space-x-2 border-dashed border rounded-full border-black/50 dark:border-white/10 text-black/70 dark:text-white/60 px-3 py-1 text-sm sm:text-base">
            <div className="w-[8px] h-[8px] rounded-full bg-green-800 dark:bg-green-500 animate-ping"></div>
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
