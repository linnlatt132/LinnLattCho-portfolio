import { Home, Mail, PanelsTopLeft } from "lucide-react";

// define navbar items
const navItems = [
  {
    id: 1,
    icon: Home,
    label: "Home",
  },
  {
    id: 2,
    icon: Mail,
    label: "Email",
  },
  {
    id: 3,
    icon: PanelsTopLeft,
    label: "Projects",
  },
];

const NavBar = () => {
  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-5 justify-between px-3 py-2 bg-gray-100 border-1 border-gray-400 shadow-lg rounded-[15px] z-30">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-0.5 hover:cursor-pointer hover:opacity-50"
        >
          <item.icon size={32} strokeWidth={1} />
          <p className="text-[18px] font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
export default NavBar;
