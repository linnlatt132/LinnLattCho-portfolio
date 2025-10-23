import { type Dispatch, type SetStateAction } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MoveUpRight } from "lucide-react";
import GlassCard from "./GlassCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const certificates = [
  {
    title: "SheCodes React Certificate",
    img: "https://img.freepik.com/free-vector/aesthetic-winter-certificate_742173-9966.jpg?t=st=1752837480~exp=1752841080~hmac=cbc9d9511a8a822be5ea0e89f1301ad22aef41bd13baa1cd5d884e4fdfd1c472&w=740",
  },
  {
    title: "Fundamental ITPEC Certificate",
    img: "https://www.shutterstock.com/image-vector/cute-pig-illustration-kawaii-chibi-600nw-2291790391.jpg",
  },
  {
    title: "Backend Internship Certificate",
    img: "https://cdn.vectorstock.com/i/1000v/58/32/cute-cat-kawaii-chibi-drawing-style-vector-45305832.jpg",
  },
  {
    title: "SheCodes React Certificate",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20240911/pngtree-img-item-white-background-2023-jpg-isolated-wallpaper-texture-photo-image_16153995.jpg",
  },
];
interface Props {
  setShowCursor: Dispatch<SetStateAction<boolean>>;
  setCursorImage: Dispatch<SetStateAction<string | null>>;
}

const CertificateSection = ({ setShowCursor, setCursorImage }: Props) => {
  return (
    <GlassCard>
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
        Certificates
      </h2>

      {/* List */}
      <div className="relative">
        <ul className="flex flex-col gap-3">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="flex items-center align-middle flex-row justify-between cursor-pointer px-2 py-2 rounded-md transition-colors duration-200 hover:bg-white/20 dark:hover:bg-zinc-700/30 border border-transparent hover:border-zinc-400 dark:hover:border-zinc-500 text-sm md:text-[16px] lg:text-lg"
              onMouseEnter={() => {
                setShowCursor(true);
                // Set the cursor image to the certificate image
                setCursorImage(cert.img);
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                // Clear the cursor image
                setCursorImage(null);
              }}
            >
              <a target="_blank" href="https:/www.w3schools.com">
                {cert.title}
              </a>
              <MoveUpRight size={15} />
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
};

export default CertificateSection;
