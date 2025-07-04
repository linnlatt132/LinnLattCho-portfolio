import Profile from "../assets/images/profileLogo.svg?react";
import Email from "../assets/icons/Email.svg?react";
import Linkedin from "../assets/icons/Linkedin.svg?react";
import Github from "../assets/icons/Github.svg?react";

const ProfileBar = () => {
  return (
    <div className="bg-transparent flex my-5 px-0 justify-between">
      <div className=" flex">
        <Profile className="rounded-full w-[70px] h-[70px] border-2 border-purple-500" />

        <div className="flex flex-col justify-center items-start px-4">
          <h1 className="text-2xl font-semibold">
            <span className="tracking-tight">Hello! I'm</span> Linn Latt Cho
          </h1>
          <div className="items-center justify-center space-x-2 px-2 flex border-dashed border rounded-full border-black/10 text-black/60">
            <div className="w-[8px] h-[8px] rounded-full bg-green-500"></div>
            <p className="text-[16px] font-extralight tracking-tight ">
              Available for work!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <a href="https://github.com/linnlatt132">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/linnlatt-cho-543745238/">
          <Linkedin />
        </a>
        <a href="mailto:clinnlatt@gmail.com">
          <Email />
        </a>
      </div>
    </div>
  );
};
export default ProfileBar;
