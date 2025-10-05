import { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    createStar();
    // Recreate stars when the window is resized
    const onResize = () => createStar();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  // log stars when they update (keep this out of JSX)
  useEffect(() => {
    console.log("stars", stars);
  }, [stars]);
  function createStar() {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );
    console.log(numberOfStars);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 2,
      });
    }
    setStars(newStars);
  }

  return (
    <>
  {/* debug: stars are logged to the console via useEffect */}
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pusle-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default StarBackground;
