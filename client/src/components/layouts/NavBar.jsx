import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";
const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }}, [])
    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
    )}>
        <div className="container flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">
                        Mohamed Mahmoud 
                    </span> Portfolio
                </span>
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a href={item.href} key={key} className="text-foreground hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    </nav>
}

export default Navbar;