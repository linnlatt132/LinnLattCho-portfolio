import GlassCard from "./GlassCard";

const Footer = () => {
  const lastUpdated = new Date("2025-07-22T12:00:00"); // change to your real update time
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="w-full">
      <GlassCard>
        <div className="flex sm:text-[14px] md:text-[18px] lg:text-[20px] flex-col space-y-5 sm:flex-row sm:space-y-0 items-center justify-center sm:justify-between h-full">
          <p className="font-semibold flex items-center h-full">
            © {new Date().getFullYear()} Linn Latt Cho.
          </p>

          <p className=" text-zinc-500 dark:text-zinc-300 flex gap-2 items-center h-full">
            <span> Last updated:</span>{" "}
            <span className="italic">{formattedDate}</span>
          </p>
        </div>
      </GlassCard>
    </footer>
  );
};

export default Footer;
