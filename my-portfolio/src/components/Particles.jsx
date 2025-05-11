import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log('⚡ Initializing CYBER-ENGINE...');
    try {
      await loadFull(engine);
      console.log('✅ Particle Matrix Activated!');
    } catch (error) {
      console.error('‼️ Neural Link Failure:', error);
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen">
      <Particles
        id="cyberverse"
        init={particlesInit}
        // className="absolute inset-0 opacity-100"
        options={{
          fullScreen: { enable: false, zIndex: -1 },
          background: { color: "transparent" },
          fpsLimit: 144,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: true,
                  force: 120,
                  smooth: 15,
                },
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 1,
                speed: 5,
              },
              bubble: {
                distance: 200,
                size: 20,
                duration: 2,
                opacity: 0.8,
                color: "#00f2ff",
              },
              trail: {
                delay: 0.001,
                quantity: 10,
                particles: {
                  color: {
                    value: ["#ff00e6", "#00ff9d", "#7700ff"],
                  },
                  move: {
                    speed: 5,
                  },
                },
              },
            },
          },
          particles: {
            color: {
              value: [
                "#00f2ff", // Cyber Cyan
                "#ff00e6", // Neon Pink
                "#00ff9d", // Matrix Green
                "#7700ff", // Hologram Purple
                "#ff5100", // Blaze Orange
              ],
            },
            links: {
              color: "random",
              distance: 100,
              enable: true,
              opacity: 0.8,
              width: 2,
              warp: true,
              blink: true,
              consent: true,
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  x: 2000,
                  y: 2000,
                },
              },
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce-horizontal",
              },
              random: true,
              speed: 3,
              straight: false,
              trail: {
                enable: true,
                length: 20,
                fillColor: "#000000",
              },
              warp: true,
              vibrate: true,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 200,
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "triangle", "star", "polygon"],
              options: {
                star: {
                  sides: 5,
                },
                polygon: {
                  sides: Math.floor(Math.random() * 6) + 3,
                },
              },
            },
            size: {
              value: { min: 1, max: 8 },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
                sync: false,
              },
            },
            twinkle: {
              lines: {
                enable: true,
                frequency: 0.1,
                opacity: 1,
                color: "#00f2ff",
              },
              particles: {
                enable: true,
                frequency: 0.1,
                opacity: 1,
                color: "#ff00e6",
              },
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 2,
            },
            life: {
              count: 1,
              duration: {
                value: 3,
              },
            },
          },
          detectRetina: true,
          motion: {
            disable: false,
            reduce: {
              factor: 1,
              value: true,
            },
          },
          emitters: {
            direction: "none",
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.4,
            },
            rate: {
              delay: 0.1,
              quantity: 0,
            },
            size: {
              width: 0,
              height: 0,
            },
          },
          preset: "fireworks",
        }}
      />
      
      {/* Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at center, 
          transparent 0%, 
          rgba(0, 242, 255, 0.05) 40%, 
          rgba(255, 0, 230, 0.03) 70%, 
          transparent 100%)`
      }}></div>
    </div>
  );
};

export default ParticlesBackground;