import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
export function TextRevealView() {
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!title1Ref.current || !title2Ref.current) return;

      SplitText.create(title1Ref.current, {
        type: "chars,words",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.words, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05,
          });
        },
      });
      const split2 = SplitText.create(title2Ref.current, {
        type: "chars",
        mask: "chars",
        autoSplit: true,
      });
      const mouseOverListener = () => {
        gsap.to(split2.chars, {
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.1,
        });
      };
      const mouseLeaveListener = () => {
        gsap.to(split2.chars, {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
        });
      };
      title2Ref.current.addEventListener("mouseover", mouseOverListener);
      title2Ref.current.addEventListener("mouseleave", mouseLeaveListener);

      return () => {
        title2Ref.current?.removeEventListener("mouseover", mouseOverListener);
        title2Ref.current?.removeEventListener(
          "mouseleave",
          mouseLeaveListener,
        );
        split2.revert();
      };
    },
    {
      scope: containerRef,
    },
  );
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 4: Text Reveal</h1>
      <p className="text-muted-foreground">
        Use the SplitText plugin to make a large heading shatter into individual
        letters that fly away when hovered over, or "type" themselves in
        word-by-word.
      </p>
      <div
        className="mt-8 rounded-lg border-2 border-dashed border-muted p-12"
        ref={containerRef}
      >
        <div className="bg-linear-to-tr from-violet-200 to-blue-200 h-200 px-20 flex items-center">
          <h2 className="text-8xl font-bold" ref={title1Ref}>
            This text will appear when the page loads
          </h2>
        </div>
        <div className="bg-linear-to-br from-pink-200 to-orange-200 h-200 px-20 flex items-center">
          <h2 className="text-8xl/36 font-bold" ref={title2Ref}>
            This text will change its appearance on hover
          </h2>
        </div>
      </div>
    </div>
  );
}
