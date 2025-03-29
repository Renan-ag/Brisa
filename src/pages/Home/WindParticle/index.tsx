import {useMemo } from "react";

const PARTICLE_COUNT = 50;
const ANIMATION_DURATION = 14;
const MAX_DELAY = 20;
const MAX_SIZE = 7; // 3-7 range
const MIN_SIZE = 3;
const MAX_HEIGHT = 700;
const HEIGHT_OFFSET = 80;

const WindParticle = () => {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      bottom: Math.random() * MAX_HEIGHT,
      size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
      duration: ANIMATION_DURATION,
      delay: Math.random() * MAX_DELAY      
    }));
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="position-absolute"
          style={{
            bottom: `${particle.bottom - HEIGHT_OFFSET}px`,
            left: `0`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            opacity: 0,
            boxShadow: "0 0 5px #A6A6A6, 0 0 10px #A6A6A6",
            filter: "blur(1px)",
            animation: `windParticle ${particle.duration}s linear ${particle.delay + (particle.id * 0.04)}s infinite`,
            willChange: "transform, opacity", // Optimize for animations
          }}
        />
      ))}
    </>
  );
};

export default WindParticle;