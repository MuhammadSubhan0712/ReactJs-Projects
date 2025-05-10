import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log('Initializing particles engine...');
    try {
      await loadFull(engine);
      console.log('Particles engine loaded successfully!');
    } catch (error) {
      console.error('Error loading particles engine:', error);
    }
  }, []);
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">

        <Particles
          id="cyber-particles"
          init={particlesInit}
          className="absolute inset-0 z-0 opacity-40"
          options={{
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            background: {
              color: "transparent",
            },
            fpsLimit: 144,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "emitter",
                },
                onHover: {
                  enable: true,
                  mode: "trail",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                emitter: {
                  quantity: 10,
                  life: {
                    count: 1,
                    duration: 0.1,
                    delay: 0.4,
                  },
                  rate: {
                    delay: 0.1,
                    quantity: 5,
                  },
                  size: {
                    width: 0,
                    height: 0,
                  },
                },
                trail: {
                  delay: 0.005,
                  quantity: 5,
                  pauseOnStop: true,
                  particles: {
                    color: {
                      value: "#00f2ff",
                    },
                    collisions: {
                      enable: false,
                    },
                    links: {
                      enable: false,
                    },
                    move: {
                      outModes: {
                        default: "destroy",
                      },
                      speed: 3,
                      straight: true,
                    },
                    size: {
                      value: 1,
                    },
                    opacity: {
                      value: 0.7,
                    },
                    shape: {
                      type: "circle",
                    },
                  },
                },
              },
            },
            particles: {
              color: {
                value: [
                  "#00f2ff", // Cyan
                  "#ff00e6", // Pink
                  "#00ff9d", // Green
                  "#7700ff", // Purple
                ],
              },
              links: {
                color: {
                  value: "#00f2ff",
                },
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1.5,
                warp: true,
              },
              move: {
                attract: {
                  enable: true,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1.5,
                straight: false,
                trail: {
                  enable: true,
                  length: 10,
                  fillColor: "#000000",
                },
                warp: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 120,
              },
              opacity: {
                value: 0.7,
                animation: {
                  enable: true,
                  speed: 0.5,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: ["circle", "triangle", "star"],
                options: {
                  star: {
                    sides: 5,
                  },
                },
              },
              size: {
                value: { min: 1, max: 5 },
                animation: {
                  enable: true,
                  speed: 3,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              twinkle: {
                lines: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                enable: true,
                distance: 5,
                speed: 1,
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
          }}
        />
</div>
    </>
  );
};

export default ParticlesBackground;
