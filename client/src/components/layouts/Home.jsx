import StarBackground from "./Effects Components/StarBackground";
import ThemeToggle from "./Effects Components/ThemeToggle";
import Navbar from "./NavBar";

function Home(){
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
    </div>
}

export default Home;