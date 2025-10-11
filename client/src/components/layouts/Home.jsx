import StarBackground from "./Effects Components/StarBackground";
import ThemeToggle from "./Effects Components/ThemeToggle";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

function Home(){
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
        </main>
    </div>
}

export default Home;