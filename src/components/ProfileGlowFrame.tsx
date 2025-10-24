import Profile from "../assets/images/profileLogo.svg?react";

const ProfileGlowFrame = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* glowing ring behind the image */}
      <div className="absolute w-[72px] h-[72px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-lg opacity-70 animate-pulse" />

      {/* profile image */}
      <Profile className="relative z-10 w-[70px] h-[70px] rounded-full border-2 border-pink-300/45 dark:border-purple-400 shadow-lg" />
    </div>
  );
};

export default ProfileGlowFrame;
