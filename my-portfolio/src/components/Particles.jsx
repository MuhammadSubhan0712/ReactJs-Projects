import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "connect",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              connect: {
                distance: 100,
                links: {
                  opacity: 0.3,
                },
                radius: 200,
              },
              push: {
                quantity: 3,
              },
            },
          },
          particles: {
            color: {
              value: ["#1C00A8", "#FFCF36", "#BD0000"],
              opacity: { value: 0.7, random: true },
              move: { enable: true, speed: 2 },
              blur: { value: 2 },
            },
            links: {
              color: "#64748b",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: {
                default: "out",
              },
              trail: {
                enable: true,
                length: 10,
                fillColor: "#000000",
              },
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: {
                enable: true,
                speed: 1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
            wobble: {
              enable: true,
              distance: 5,
              speed: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
