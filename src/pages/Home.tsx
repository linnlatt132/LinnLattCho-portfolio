import AboutMe from "../components/AboutMe";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";

const Home = () => {
  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="w-[700px]">
        {/* Profile */}
        <ProfileBar />

        {/* Nav bar on bottom */}
        <NavBar />

        {/* About Me */}
        <AboutMe />
        
      </div>
    </div>
  );
};
export default Home;
