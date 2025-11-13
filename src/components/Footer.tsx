import GlassCard from "./GlassCard";

const Footer = () => {
  const lastUpdated = new Date("2025-11-11T22:00:00"); // change to your real update time
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="w-full mb-28 transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 dark:text-white">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-[600px] lg:max-w-[700px] ">
        <GlassCard>
          <div className="flex text-[8px] sm:text-[13px] lg:text-[18px] items-center align-middle justify-between h-full">
            <p className=" font-semibold flex items-center h-full">
              © {new Date().getFullYear()} Linn Latt Cho. All rights reserved.
            </p>

            <p className=" text-zinc-500  dark:text-zinc-300 flex gap-2 items-center h-full">
              <span> Last updated:</span>{" "}
              <span className="italic text-[7px] sm:text-[12px] lg:text-[17px]">
                {formattedDate}
              </span>
            </p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;
