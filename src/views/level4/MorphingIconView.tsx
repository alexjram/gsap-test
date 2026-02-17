import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export function MorphingIconView() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to("#main-icon", {
      duration: 1,
      morphSVG: "#target-pause",
      delay: 0.5,
    }).to("#main-icon", {
      duration: 1,
      morphSVG: "#target-stop",
      delay: 0.5,
    });
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 4: Morphing Icon Toggle</h1>
      <p className="text-muted-foreground">
        Create a "Play" button icon that smoothly morphs its shape into a
        "Pause" or "Stop" square using MorphSVG.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <div className="flex justify-center bg-linear-to-br from-sky-200 to-purple-200 p-12">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: 200,
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              fill: "seagreen",
            }}
          >
            <path
              id="main-icon"
              d="M60,50 L160,100 L60,150 Z"
              fill="seagreen"
            />

            <path
              id="target-stop"
              style={{ visibility: "hidden" }}
              d="M50,50 L150,50 L150,150 L50,150 Z"
            />

            <path
              id="target-pause"
              style={{ visibility: "hidden" }}
              d="M60,50 L90,50 L90,150 L60,150 Z M110,50 L140,50 L140,150 L110,150 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
