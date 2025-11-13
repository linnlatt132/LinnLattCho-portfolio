import { Github, Linkedin, Mail, Phone } from "lucide-react";
import GlassCard from "../components/GlassCard";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <Phone size={22} />,
      text: "+959 793 550 664",
      link: "tel:+959793550664",
    },
    {
      icon: <Mail size={22} />,
      text: "clinnlatt@gmail.com",
      link: "mailto:clinnlatt@gmail.com",
    },
    {
      icon: <Github size={22} />,
      text: "github.com/linnlatt132",
      link: "https://github.com/linnlatt132",
    },
    {
      icon: <Linkedin size={22} />,
      text: "linkedin.com/in/linn-latt-cho",
      link: "https://www.linkedin.com/in/linnlatt-cho-543745238/",
    },
  ];

  return (
    <section className="flex justify-center items-center">
      <GlassCard className="w-full max-w-4xl p-10 rounded-2xl shadow-xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left text */}
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold ">
              Let’s Work Together!
            </h2>
            <p className="text-black/70 dark:text-zinc-300/90 text-sm leading-relaxed font-mono">
              I’m open to collaborations, freelance opportunities, or full-time
              roles. Feel free to reach out — I’d love to hear from you!
            </p>
          </div>

          {/* Contact info list */}
          <div className="flex flex-col space-y-4 md:w-1/2 font-mono">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 hover:translate-x-1"
              >
                <span className=" text-blue-600 dark:text-blue-400">
                  {item.icon}
                </span>
                <span className="text-black/70 dark:text-zinc-300/90 hover:text-blue-600 dark:hover:text-blue-300  text-sm font-medium">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default ContactInfo;
