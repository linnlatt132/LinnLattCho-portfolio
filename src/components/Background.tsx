import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Background = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const rand = gsap.utils.random;

      bubblesRef.current.forEach((bubble, index) => {
        if (!bubble) return;

        gsap.set(bubble, { transformOrigin: "50% 50%" });

        gsap
          .timeline({
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          })
          .fromTo(
            bubble,
            { scale: rand(0.95, 1.05), opacity: rand(0.5, 0.7) },
            {
              x: rand(-120, 120),
              y: rand(-120, 120),
              rotate: rand(-20, 20),
              scale: rand(1.05, 1.15),
              opacity: rand(0.5, 0.8),
              duration: rand(12, 20),
              ease: "sine.inOut",
            }
          );
      });
    },
    { scope: wrapperRef }
  );

  const gradients = [
    "from-pink-200 to-purple-400 dark:from-purple-950 dark:to-indigo-800",
    "from-blue-200 to-indigo-400 dark:from-indigo-800 dark:to-blue-900",
    "from-yellow-100 to-pink-400 dark:from-yellow-800 dark:to-pink-900",
    "from-green-200 to-teal-400 dark:from-emerald-900 dark:to-teal-800",
    "from-red-200 to-orange-400 dark:from-red-900 dark:to-amber-800",
    "from-sky-200 to-emerald-400 dark:from-sky-800 dark:to-emerald-800",
  ];

  return (
    <div ref={wrapperRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 transition-colors bg- duration-500  dark:bg-[#160f1e]" />

      {gradients.map((gradient, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) bubblesRef.current[i] = el;
          }}
          className={`absolute rounded-full mix-blend-lighten opacity-60
            blur-[160px] w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]
            bg-gradient-to-br ${gradient}`}
          style={{
            top: `${(i * 12 + 5) % 90}%`,
            left: `${(i * 18 + 10) % 90}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
