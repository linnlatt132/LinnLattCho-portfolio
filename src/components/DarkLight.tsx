import { Moon, Sun } from "lucide-react";

const DarkLight = () => {
  return (
    <div className="flex space-x-1 bg-gray-200 h-fit rounded-full border-1">
      <div className="bg-amber-50 rounded-full p-[5px] hover:cursor-pointer">
        <Sun size={25} strokeWidth={1} />
      </div>
      <div className="bg-purple-200 rounded-full p-[5px] hover:cursor-pointer">
        <Moon size={25} strokeWidth={1} />
      </div>
    </div>
  );
};
export default DarkLight;
