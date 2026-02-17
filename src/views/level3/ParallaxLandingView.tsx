import grass from "@/assets/grass.png";
import mountains from "@/assets/mountain.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export function ParallaxLandingView() {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const mount = document.querySelector("#mountains") as HTMLImageElement;
    const grassElement = document.querySelector("#grass") as HTMLImageElement;
    if (!containerRef.current) return;

    const tweenTrigger = {
      trigger: containerRef.current,
      start: 50,
      end: containerRef.current.clientHeight * 2,
      scrub: true,
    };

    gsap.to(grassElement, {
      x: -grassElement.clientWidth / 2,
      ease: "none",
      scrollTrigger: { ...tweenTrigger, pin: true },
    });
    gsap.to(mount, {
      x: -mount.clientWidth / 4,
      ease: "none",
      scrollTrigger: tweenTrigger,
    });
  });
  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      <h1 className="text-3xl font-bold">Level 3: Parallax Landing Page</h1>
      <p className="text-muted-foreground">
        Build a site where background elements move at different speeds than
        foreground elements, creating a sense of 3D depth.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1 overflow-auto">
        <section
          ref={containerRef}
          className="relative bg-linear-to-bl from-blue-200 to-white overflow-hidden h-full"
        >
          <img
            src={mountains}
            className="absolute -bottom-10 left-0 w-[150%] block max-w-[500%]"
            id="mountains"
          />
          <img
            src={grass}
            className="absolute bottom-0 left-0 w-[300%] block max-w-[500%]"
            id="grass"
          />
        </section>
      </div>
    </div>
  );
}
