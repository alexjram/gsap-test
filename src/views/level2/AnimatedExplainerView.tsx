import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export function AnimatedExplainerView() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    tl.fromTo("#sun-group", { scale: 0, opacity: 0 }, { opacity: 1, scale: 1 })
      .to("#sun-rays > line", {
        stagger: 0.2,
        scale: 1.5,
        yoyo: true,
      })
      .to(
        "#panel-glint",
        {
          fill: "red",
          opacity: 0.5,
          duration: 2,
        },
        "<",
      )
      .to("#energy-pulse", {
        opacity: 1,
      })
      .to("#energy-pulse", {
        translateY: 40,
        ease: "none",
      })
      .to("#energy-pulse", {
        translateX: 100,
        ease: "none",
      })
      .to("#battery-charge", {
        height: 52,
      })
      .to("#battery-text", {
        opacity: 1,
      });
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">
        Level 2: Animated Explainer Infographic
      </h1>
      <p className="text-muted-foreground">
        Create an SVG of a process. Use a timeline to highlight different parts
        of the SVG in order, adding text descriptions that appear and disappear
        as the "story" progresses.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <div>
          <svg
            viewBox="0 0 400 300"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: "#f0f9ff",
              borderRadius: 12,
              maxWidth: "100%",
              height: "auto",
            }}
          >
            <g id="sun-group" transform="translate(50, 50)">
              <circle id="sun-core" cx="0" cy="0" r="25" fill="#FDB813" />
              <g id="sun-rays" stroke="#FDB813" stroke-width="2">
                <line x1="0" y1="-35" x2="0" y2="-45" />
                <line x1="25" y1="-25" x2="32" y2="-32" />
                <line x1="35" y1="0" x2="45" y2="0" />
                <line x1="25" y1="25" x2="32" y2="32" />
                <line x1="0" y1="35" x2="0" y2="45" />
                <line x1="-25" y1="25" x2="-32" y2="32" />
                <line x1="-35" y1="0" x2="-45" y2="0" />
                <line x1="-25" y1="-25" x2="-32" y2="-32" />
              </g>
            </g>

            <g id="panel-group" transform="translate(100, 150)">
              <rect
                id="panel-stand"
                x="45"
                y="50"
                width="10"
                height="50"
                fill="#555"
              />
              <rect
                id="solar-panel"
                x="0"
                y="0"
                width="100"
                height="60"
                rx="5"
                fill="#2c3e50"
                stroke="#34495e"
                stroke-width="2"
              />
              <path
                id="panel-glint"
                d="M10 10 L90 10 L90 50 L10 50 Z"
                fill="white"
                opacity="0.1"
              />
            </g>

            <path
              id="energy-wire"
              d="M150 210 L150 250 L250 250"
              fill="none"
              stroke="#ddd"
              strokeDasharray="4 1"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              id="energy-pulse"
              cx="150"
              cy="210"
              r="4"
              fill="#FDB813"
              style={{ opacity: 0 }}
            />

            <g id="battery-group" transform="translate(260, 220)">
              <rect
                x="0"
                y="10"
                width="40"
                height="60"
                rx="4"
                fill="#ecf0f1"
                stroke="#bdc3c7"
                stroke-width="2"
              />
              <rect x="10" y="0" width="20" height="10" fill="#bdc3c7" />
              <rect
                id="battery-charge"
                x="4"
                y="4"
                width="32"
                height="0"
                fill="#2ecc71"
                rx="2"
                transform="rotate(180 20 35)"
              />
              <text
                id="battery-text"
                x="50"
                y="45"
                font-family="sans-serif"
                font-size="12"
                fill="#7f8c8d"
                opacity="0"
              >
                CHARGED
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
