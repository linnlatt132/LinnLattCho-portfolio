import AboutMe from "../components/AboutMe";
import CertificateSection from "../components/CerfificateSection";
import Footer from "../components/Footer";
import MyProjects from "../components/MyProjects";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import SkillsList from "../components/SkillsLists";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Home = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorImage, setCursorImage] = useState<string | null>(null);

  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };

      if (!cursorRef.current) return;

      gsap.to(cursorRef.current, {
        x: e.clientX + 10,
        y: e.clientY - 50,
        duration: 0.1,
        ease: "power3.out",
      });
    };
    if (showCursor) {
      // 1. Set the initial position and ensure opacity is ready to animate
      if (cursorRef.current) {
        // Set to the *last known* mouse position before starting the animation
        gsap.set(cursorRef.current, {
          x: lastMousePos.current.x + 10,
          y: lastMousePos.current.y - 50,
          opacity: 0, // Ensure it's hidden before the ease-in
        });

        // 2. Animate the opacity to make it appear with an ease-in effect
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0.3, // Ease-in duration
          ease: "power2.in",
        });
      }

      window.addEventListener("mousemove", moveCursor);
    } else {
      // Animate the opacity to 0 to make it disappear with an ease-out effect
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.3, // Ease-out duration
          ease: "power2.out",
        });
      }
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      // Clean up any ongoing GSAP animation when the component unmounts or dependency changes
      if (cursorRef.current) {
        gsap.killTweensOf(cursorRef.current);
      }
    };
  }, [showCursor]);

  // Add an initial setup useEffect to capture the first mouse move before showCursor is true
  useEffect(() => {
    const captureInitialPosition = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    // We only need to listen if showCursor is *not* yet true
    if (!showCursor) {
      window.addEventListener("mousemove", captureInitialPosition);
    }

    return () => {
      window.removeEventListener("mousemove", captureInitialPosition);
    };
  }, [showCursor]);

  return (
    <>
      {/* ✅ Global Cursor */}
      {showCursor && (
        <div
          ref={cursorRef}
          // Change classes to be a square container with no background, using flex to center the image
          className="fixed top-0 left-0 h-40 w-60 z-[999] pointer-events-none flex items-center justify-center overflow-hidden rounded-lg shadow-xl"
          style={{ opacity: 0 }} // Explicitly set initial opacity to 0
        >
          {/* RENDER THE IMAGE */}
          {cursorImage && (
            <img
              src={cursorImage}
              alt="Certificate preview"
              // Tailwind classes for the image: full size, cover, slightly smaller h/w for effect
              className="h-full w-full object-cover p-1 bg-white/20 backdrop-blur-sm rounded-lg"
            />
          )}
        </div>
      )}
      <div className="transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 w-full min-h-screen dark:text-white">
        <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-[700px] lg:max-w-[800px] sm:pt-30 sm:pb-10 pb-4 pt-25 flex flex-col space-y-10 sm:space-y-12 lg:space-y-20">
          {/* Profile */}
          <ProfileBar />
          {/* About Me */}
          <AboutMe />
          {/* Skills */}
          <SkillsList />
          {/* Certificates */}
          <CertificateSection
            setShowCursor={setShowCursor}
            setCursorImage={setCursorImage}
          />
          {/* Projects */}
          <MyProjects />

          {/* Contant Me */}
          <div id="contant"></div>

          {/* Footer */}
          <Footer />
          {/* Nav bar on bottom */}
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Home;
