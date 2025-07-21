import { useRef, useState, type MouseEvent, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "./GlassCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const certificates = [
  {
    title: "SheCodes React Certificate",
    img: "https://img.freepik.com/free-vector/aesthetic-winter-certificate_742173-9966.jpg?t=st=1752837480~exp=1752841080~hmac=cbc9d9511a8a822be5ea0e89f1301ad22aef41bd13baa1cd5d884e4fdfd1c472&w=740",
  },
  {
    title: "Fundamental ITPEC Certificate",
    img: "https://img.freepik.com/free-vector/aesthetic-winter-certificate_742173-9966.jpg?t=st=1752837480~exp=1752841080~hmac=cbc9d9511a8a822be5ea0e89f1301ad22aef41bd13baa1cd5d884e4fdfd1c472&w=740",
  },
  {
    title: "Backend Internship Certificate",
    img: "https://img.freepik.com/free-vector/aesthetic-winter-certificate_742173-9966.jpg?t=st=1752837480~exp=1752841080~hmac=cbc9d9511a8a822be5ea0e89f1301ad22aef41bd13baa1cd5d884e4fdfd1c472&w=740",
  },
  {
    title: "SheCodes React Certificate",
    img: "https://img.freepik.com/free-vector/aesthetic-winter-certificate_742173-9966.jpg?t=st=1752837480~exp=1752841080~hmac=cbc9d9511a8a822be5ea0e89f1301ad22aef41bd13baa1cd5d884e4fdfd1c472&w=740",
  },
];

const CertificateSection = () => {
  const containerRef = useRef(null);
  const floatingImgRef = useRef<HTMLDivElement>(null);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [hoveredCert, setHoveredCert] = useState<{ img: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Section entry animation
  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Floating image animation
  useEffect(() => {
    if (hoveredCert && floatingImgRef.current) {
      gsap.fromTo(
        floatingImgRef.current,
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.25, ease: "power2.out" }
      );
      setIsVisible(true);
    } else if (!hoveredCert && floatingImgRef.current) {
      gsap.to(floatingImgRef.current, {
        autoAlpha: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setIsVisible(false),
      });
    }
  }, [hoveredCert]);

  // Float image above cursor, slightly offset
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (floatingImgRef.current && hoveredCert) {
      const imgBox = floatingImgRef.current.getBoundingClientRect();
      const offsetY = imgBox.height + 1; //1px above from cursor
      gsap.to(floatingImgRef.current, {
        left: e.clientX - 1,
        top: e.clientY - offsetY,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  // Scroll animation for each list item
  useGSAP(() => {
    listItemRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <GlassCard ref={containerRef}>
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>
      <div
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredCert(null)}
      >
        <ul className="flex flex-col gap-3">
          {certificates.map((cert, index) => (
            <li
              key={index}
              ref={(el) => {
                listItemRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredCert(cert)}
              onMouseLeave={() => setHoveredCert(null)}
              className="cursor-pointer px-3 py-2 rounded-md transition-colors duration-200 hover:bg-white/20 dark:hover:bg-zinc-700/30 border border-transparent hover:border-zinc-400 dark:hover:border-zinc-500"
            >
              <a target="-blank" href="https:/www.w3schools.com">
                {cert.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Floating Image */}
        {hoveredCert && (
          <div
            ref={floatingImgRef}
            className={`fixed pointer-events-none z-50`}
            style={{
              left: 0,
              top: 0,
              position: "fixed",
              width: "250px",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <img
              src={hoveredCert.img}
              alt="Certificate"
              className="rounded-md shadow-lg border border-gray-300 dark:border-zinc-600"
            />
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default CertificateSection;
