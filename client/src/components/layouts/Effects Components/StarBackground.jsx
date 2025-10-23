import { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    createStar();
    createMeteors();
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
    // compute number of stars from viewport area, but ensure at least 1
    const numberOfStars = Math.max(
      1,
      Math.floor((window.innerWidth * window.innerHeight) / 8000)
    );
    console.log("createStar -> numberOfStars", numberOfStars);
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

  function createMeteors() {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * +1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random(),
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
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

        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: `${meteor.size * 50}px`,
              height: `${meteor.size * 2}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              // ensure CSS delay has units (seconds)
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default StarBackground;
