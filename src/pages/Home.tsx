import AboutMe from "../components/AboutMe";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import SkillsList from "../components/Skills";

const Home = () => {
  return (
    <div className="transition-colors duration-300 flex justify-center w-full min-h-screen
     dark:bg-[#210635] dark:text-white">
      <div className="w-[700px]">
        {/* Profile */}
        <ProfileBar />

        {/* Nav bar on bottom */}
        <NavBar />

        {/* About Me */}
        <AboutMe />

        {/* Skills */}
        <SkillsList />

        {/* Projects */}

        {/* Certificates */}
      </div>
    </div>
  );
};
export default Home;
