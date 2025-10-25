import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useGSAP(
    () => {
      const btn = buttonRef.current;
      if (!btn) return;

       if (visible) {
         // Appearing (anticlockwise, smooth, scale in)
         gsap.fromTo(
           btn,
           { autoAlpha: 0, y: 60, rotate: -180, scale: 0.9 },
           {
             autoAlpha: 1,
             y: 0,
             rotate: -360,
             scale: 1,
             duration: 0.9,
             ease: "power4.out",
           }
         );
       } else {
         gsap.to(btn, {
           autoAlpha: 0,
           y: 60,
           rotate: 360,
           scale: 0.9,
           duration: 0.9,
           ease: "power4.inOut",
         });
       }
    },
    { dependencies: [visible] }
  );
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-25 right-5 z-50 w-10 h-10 md:w-12 md:h-12 md:right-30
                 bg-zinc-500/20 border-[1px] border-zinc-800/10 dark:bg-zinc-300/10 dark:border-zinc-300/10 hover:cursor-pointer text-black dark:text-white rounded-full shadow-lg 
                 flex items-center justify-center hover:scale-110 
                 transition-transform"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollTopButton;
