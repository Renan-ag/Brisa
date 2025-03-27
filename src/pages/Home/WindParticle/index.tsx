import { useEffect, useState } from "react";

interface IParticle { id: number; bottom: number; size: number; duration: number; delay: number; }

const WindParticle = () => {
  const [particles, SetParticles] = useState<Array<IParticle>>([]);

  useEffect(() => {
    const generateParticle = () => {
      const numParticles = 90;
      const newParticle = Array.from({ length: numParticles }).map((_, i) => ({
        id: i,
        bottom: Math.random() * 900,
        size: Math.random() * 4 + 3,
        duration: 12, // Animation duration 5s
        delay: Math.random() * 20,
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
            bottom: `${particle.bottom - 40}px`,
            left: `-70px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "rgba(255,255,255, .2)",            
            borderRadius: "50%",
            boxShadow: "0 0 5px #A6A6A6, 0 0 10px #A6A6A6",
            filter: "blur(1px)",
            animation: `windParticle ${particle.duration}s linear ${particle.delay + (particle.id * .04)}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default WindParticle;