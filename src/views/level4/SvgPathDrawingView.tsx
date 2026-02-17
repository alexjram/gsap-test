import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
export function SvgPathDrawingView() {
  const svg1Ref = useRef<SVGSVGElement>(null);
  const svg2Ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const signatureTween = gsap.from("#signature", {
      duration: 1,
      drawSVG: 0,
    });
    const tl = gsap
      .timeline()
      .from("#saucer", {
        duration: 1,
        drawSVG: 0,
      })
      .from("#cup", {
        duration: 1,
        drawSVG: 0,
      })
      .from("#handle", {
        duration: 0.5,
        drawSVG: 0,
      })
      .from("#steam-left, #steam-mid, #steam-right", {
        drawSVG: 0,
        duration: 1,
      });
    return () => {
      signatureTween.revert();
      tl.revert();
    };
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 4: SVG Path Drawing</h1>
      <p className="text-muted-foreground">
        Take a handwritten signature or a line-art illustration and use DrawSVG
        to make it look like it's being "drawn" onto the screen in real-time.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <div>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 300, display: "block", margin: "0 auto" }}
            ref={svg1Ref}
          >
            <g
              fill="none"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path id="saucer" d="M30 150 Q100 180 170 150" />

              <path
                id="cup"
                d="M50 150 L50 80 Q50 50 100 50 T150 80 L150 150"
              />

              <path id="handle" d="M150 70 Q180 60 180 90 T150 110" />

              <path id="steam-left" d="M70 40 Q60 20 80 10" />
              <path id="steam-mid" d="M100 40 Q90 20 110 5" />
              <path id="steam-right" d="M130 40 Q120 20 140 10" />
            </g>
          </svg>
        </div>
        <div>
          <svg
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 400, display: "block", margin: "0 auto" }}
            ref={svg2Ref}
          >
            <path
              id="signature"
              d="M20 50 
           C 20 20, 50 20, 50 50 
           C 50 80, 20 80, 20 50 
           C 20 50, 60 50, 80 40 
           C 100 30, 110 80, 90 80 
           C 70 80, 80 20, 110 30 
           C 130 40, 140 60, 160 60 
           C 180 60, 180 40, 200 40 
           C 220 40, 240 80, 240 60 
           C 240 40, 280 40, 280 60"
              fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <circle
              id="dot"
              cx="290"
              cy="60"
              r="4"
              fill="#2563eb"
              opacity="0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
