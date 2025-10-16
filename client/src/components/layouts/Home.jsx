import StarBackground from "./Effects Components/StarBackground";
import ThemeToggle from "./Effects Components/ThemeToggle";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

function Home(){
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </main>
    </div>
}

export default Home;