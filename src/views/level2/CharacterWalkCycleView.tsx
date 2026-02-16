import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export function CharacterWalkCycleView() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo(
      "#arm-left",
      { rotate: -30, transformOrigin: "8px 0", translate: "0 -5px" },
      {
        rotation: 30,
        ease: "none",
      },
    )
      .fromTo(
        "#arm-right",
        { rotate: 30, transformOrigin: "8px 0", translate: "0 -5px" },
        {
          rotate: -30,
          ease: "none",
        },
        "<",
      )
      .fromTo(
        "#leg-left",
        { rotate: 30, transformOrigin: "8px 0" },
        {
          rotate: -30,
          ease: "none",
        },
        "<",
      )
      .fromTo(
        "#leg-right",
        {
          rotate: -30,
          transformOrigin: "8px 0",
        },
        {
          rotate: 30,
          ease: "none",
        },
        "<",
      );
    gsap.to("#floor", {
      strokeDashoffset: 7,
      repeat: -1,
    });
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 2: Character "Walk" Cycle</h1>
      <p className="text-muted-foreground">
        Use a simple SVG character and animate its limbs in a loop. Use a
        timeline to coordinate the legs and arms so they move in sync.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        {/*<div>
          <svg id="walker" viewBox="0 0 200 300" width="200" height="300">
            <circle cx="100" cy="50" r="30" fill="#f4c095" />

            <rect x="85" y="80" width="30" height="80" rx="10" fill="#3a86ff" />

            <g id="leftArm" transform-origin="100px 90px">
              <rect
                x="70"
                y="85"
                width="15"
                height="80"
                rx="8"
                fill="#3a86ff"
              />
            </g>

            <g id="rightArm" transform-origin="100px 90px">
              <rect
                x="115"
                y="85"
                width="15"
                height="80"
                rx="8"
                fill="#3a86ff"
              />
            </g>

            <g id="leftLeg" transform-origin="100px 160px">
              <rect x="85" y="160" width="15" height="90" rx="8" fill="#222" />
            </g>

            <g id="rightLeg" transform-origin="100px 160px">
              <rect x="100" y="160" width="15" height="90" rx="8" fill="#222" />
            </g>
          </svg>
        </div>*/}
        <div>
          <svg
            viewBox="0 0 200 300"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: "#f3f4f6",
              borderRadius: 12,
              height: 400,
              display: "block",
              margin: "0 auto",
            }}
          >
            <line
              x1="20"
              y1="260"
              x2="180"
              y2="260"
              stroke="#ccc"
              stroke-width="2"
              stroke-linecap="round"
              strokeDasharray="5px 3px"
              id="floor"
            />

            <g id="robot" transform="translate(100, 180)">
              <g id="arm-left" transform="translate(0, -35)">
                <rect
                  x="-6"
                  y="0"
                  width="12"
                  height="50"
                  rx="6"
                  fill="#95a5a6"
                />
                <circle cx="0" cy="50" r="8" fill="#7f8c8d" />
              </g>

              <g id="leg-left" transform="translate(0, 10)">
                <rect
                  x="-8"
                  y="0"
                  width="16"
                  height="60"
                  rx="8"
                  fill="#95a5a6"
                />
                <rect
                  x="-10"
                  y="60"
                  width="24"
                  height="10"
                  rx="2"
                  fill="#7f8c8d"
                />
              </g>

              <rect
                id="torso"
                x="-25"
                y="-50"
                width="50"
                height="70"
                rx="10"
                fill="#3498db"
              />

              <g id="head" transform="translate(0, -60)">
                <rect
                  x="-20"
                  y="-30"
                  width="40"
                  height="30"
                  rx="5"
                  fill="#ecf0f1"
                />
                <circle cx="-10" cy="-15" r="4" fill="#333" />
                <circle cx="10" cy="-15" r="4" fill="#333" />
                <rect
                  id="antenna"
                  x="-1"
                  y="-45"
                  width="2"
                  height="15"
                  fill="#7f8c8d"
                />
                <circle
                  id="antenna-ball"
                  cx="0"
                  cy="-45"
                  r="3"
                  fill="#e74c3c"
                />
              </g>

              <g id="leg-right" transform="translate(0, 10)">
                <rect
                  x="-8"
                  y="0"
                  width="16"
                  height="60"
                  rx="8"
                  fill="#bdc3c7"
                />
                <rect
                  x="-10"
                  y="60"
                  width="24"
                  height="10"
                  rx="2"
                  fill="#2c3e50"
                />
              </g>

              <g id="arm-right" transform="translate(0, -35)">
                <rect
                  x="-6"
                  y="0"
                  width="12"
                  height="50"
                  rx="6"
                  fill="#ecf0f1"
                />
                <circle cx="0" cy="50" r="8" fill="#2c3e50" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
