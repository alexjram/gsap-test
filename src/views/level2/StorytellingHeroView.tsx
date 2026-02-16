import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function StorytellingHeroView() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.to(titleRef.current, {
      y: 0,
      duration: 0.5,
    })
      .to(textRef.current, {
        opacity: 1,
        duration: 0.5,
      })
      .to(buttonRef.current, {
        bottom: "50px",
        repeat: -1,
        duration: 0.5,
        yoyo: true,
        ease: "power1.inOut",
      });
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 2: Storytelling Hero Section</h1>
      <p className="text-muted-foreground">
        Create a sequence: the logo fades in, then the main heading slides down,
        then the subtext fades in, and finally, a "Scroll Down" arrow starts
        bouncing.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <div className="bg-teal-900 py-52 px-16 flex justify-center items-start flex-col relative">
          <h2
            ref={titleRef}
            className="text-8xl text-white font-bold -translate-y-full"
          >
            HERO SECTION
          </h2>
          <p ref={textRef} className="text-white mt-5 lg:w-1/3 opacity-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            lobortis ex pharetra, accumsan elit ut, auctor neque. Praesent
            tristique finibus ante, eu pellentesque lectus posuere quis. Sed sed
            molestie nisl, sit amet porta nulla. Curabitur euismod, est sit amet
            pellentesque ultricies, ipsum orci egestas nisl, eget ultricies
            justo ex vitae turpis. Duis erat urna, ultrices quis ligula in,
            posuere suscipit quam. Maecenas sit amet est finibus, vehicula
            sapien a, finibus nunc. Suspendisse in urna efficitur, porta erat
            in, convallis neque. Vestibulum ultricies erat ac est porttitor
            lobortis. Nam sagittis convallis neque non viverra. Duis sed dui
            tellus.
          </p>
          <button
            ref={buttonRef}
            className="text-white text-3xl border border-white rounded-full p-1 absolute bottom-10 left-1/2 -translate-x-full"
          >
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}
