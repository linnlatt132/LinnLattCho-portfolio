import AboutMe from "../components/AboutMe";
import CertificateSection from "../components/CerfificateSection";
import Footer from "../components/Footer";
import MyProjects from "../components/MyProjects";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import SkillsList from "../components/SkillsLists";

const Home = () => {
  return (
    <div className="transition-colors duration-300 flex justify-center px-4 sm:px-6 md:px-8 w-full min-h-screen dark:text-white">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-[700px] lg:max-w-[800px] sm:pt-30 sm:pb-10 pb-4 pt-25 flex flex-col space-y-10 sm:space-y-12 lg:space-y-20">
        {/* Profile */}
        <ProfileBar />
        {/* About Me */}
        <AboutMe />
        {/* Skills */}
        <SkillsList />
        {/* Certificates */}
        <CertificateSection />
        {/* Projects */}
        <MyProjects />
        {/* <div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi
            soluta corrupti inventore suscipit facilis sequi ea neque voluptate
            ipsa consequuntur iste enim, fugit excepturi! Voluptas magni itaque
            temporibus necessitatibus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas ipsum exercitationem quae ad cum. Officiis
            odio dolor sequi itaque iure corporis minus. Accusamus quae odit
            quibusdam eos cum, corrupti ex. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Minus ea illo enim quod, dicta, dolore
            voluptates, quaerat repudiandae molestiae odit corrupti. Blanditiis
            alias ad voluptatem laudantium repudiandae incidunt. A, eveniet!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi
            soluta corrupti inventore suscipit facilis sequi ea neque voluptate
            ipsa consequuntur iste enim, fugit excepturi! Voluptas magni itaque
            temporibus necessitatibus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas ipsum exercitationem quae ad cum. Officiis
            odio dolor sequi itaque iure corporis minus. Accusamus quae odit
            quibusdam eos cum, corrupti ex. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Minus ea illo enim quod, dicta, dolore
            voluptates, quaerat repudiandae molestiae odit corrupti. Blanditiis
            alias ad voluptatem laudantium repudiandae incidunt. A, eveniet!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi
            soluta corrupti inventore suscipit facilis sequi ea neque voluptate
            ipsa consequuntur iste enim, fugit excepturi! Voluptas magni itaque
            temporibus necessitatibus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas ipsum exercitationem quae ad cum. Officiis
            odio dolor sequi itaque iure corporis minus. Accusamus quae odit
            quibusdam eos cum, corrupti ex. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Minus ea illo enim quod, dicta, dolore
            voluptates, quaerat repudiandae molestiae odit corrupti. Blanditiis
            alias ad voluptatem laudantium repudiandae incidunt. A, eveniet!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi
            soluta corrupti inventore suscipit facilis sequi ea neque voluptate
            ipsa consequuntur iste enim, fugit excepturi! Voluptas magni itaque
            temporibus necessitatibus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas ipsum exercitationem quae ad cum. Officiis
            odio dolor sequi itaque iure corporis minus. Accusamus quae odit
            quibusdam eos cum, corrupti ex. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Minus ea illo enim quod, dicta, dolore
            voluptates, quaerat repudiandae molestiae odit corrupti. Blanditiis
            alias ad voluptatem laudantium repudiandae incidunt. A, eveniet!
          </p>
        </div> */}

        {/* Contant Me */}
        <div id="contant"></div>

        {/* Footer */}
        <Footer />
        {/* Nav bar on bottom */}
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
