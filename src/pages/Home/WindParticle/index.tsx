import { useEffect, useState } from "react";

interface IParticle { id: number; bottom: number; size: number; duration: number; delay: number; }

const WindParticle = () => {
  const [particles, SetParticles] = useState<Array<IParticle>>([]);

  useEffect(() => {
    const generateParticle = () => {
      const numParticles = 40;
      const newParticle = Array.from({ length: numParticles }).map((_, i) => ({
        id: i,
        bottom: Math.random() * 400,
        size: Math.random() * 4 + 3,
        duration: 8, // Animation duration 5s
        delay: Math.random() * 18,
      }));

      SetParticles(newParticle);
    }

    generateParticle();
  }, []);

  return (
    <div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="position-absolute"
          style={{
            bottom: `${particle.bottom + 30}px`,
            left: `-10px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "rgba(255,255,255, .5)",
            borderRadius: "50%",
            boxShadow: "0 0 10px #fff, 0 0 20px #eee",
            filter: "blur(2px)",
            animation: `windParticle ${particle.duration}s linear ${particle.delay + (particle.id * .1)}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default WindParticle;