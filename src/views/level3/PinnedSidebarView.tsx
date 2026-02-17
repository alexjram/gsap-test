import { Card, CardContent } from "@/components/ui/card";
import { images } from "@/contants/images";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PinnedSidebarView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fixedRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!containerRef.current || !fixedRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: fixedRef.current,
        scrub: 1,
      });
    },
    { scope: containerRef },
  );
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 3: The "Pinned" Sidebar</h1>
      <p className="text-muted-foreground">
        Design a layout where a piece of content stays "stuck" (pinned) on the
        left side of the screen while the text on the right side continues to
        scroll past it.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <div
          className="flex items-start bg-linear-to-br from-lime-100 to-green-100"
          ref={containerRef}
        >
          <div
            className="grow-0 shrink-0 px-8 w-1/5 bg-gray-800 text-white py-8 rounded-2xl mt-8 ml-8"
            ref={fixedRef}
          >
            <ul>
              <li className="text-lg hover:bg-white/30 mb-4 p-2 rounded-sm">
                item 1
              </li>
              <li className="text-lg hover:bg-white/30 mb-4 p-2 rounded-sm">
                item 2
              </li>
              <li className="text-lg hover:bg-white/30 mb-4 p-2 rounded-sm">
                item 3
              </li>
              <li className="text-lg hover:bg-white/30 mb-4 p-2 rounded-sm">
                item 4
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4 p-8">
            {images.map((im, i) => (
              <Card key={i}>
                <CardContent className="h-full">
                  <img src={im} className="object-cover h-full rounded-md" />
                </CardContent>
              </Card>
            ))}
            {images.map((im, i) => (
              <Card key={i}>
                <CardContent className="h-full">
                  <img src={im} className="object-cover h-full rounded-md" />
                </CardContent>
              </Card>
            ))}
            {images.map((im, i) => (
              <Card key={i}>
                <CardContent className="h-full">
                  <img src={im} className="object-cover h-full rounded-md" />
                </CardContent>
              </Card>
            ))}
            {images.map((im, i) => (
              <Card key={i}>
                <CardContent className="h-full">
                  <img src={im} className="object-cover h-full rounded-md" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
