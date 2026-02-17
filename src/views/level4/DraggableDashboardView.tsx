import { images } from "@/contants/images";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/dist/Draggable";
export function DraggableDashboardView() {
  useGSAP(() => {
    Draggable.create(".movable", {
      bounds: ".container",
      inertia: true,
    });
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">
        Level 4: Interactive Draggable Dashboard
      </h1>
      <p className="text-muted-foreground">
        Create a set of "widgets" or windows that the user can click and drag
        around the screen. Add Inertia so they have a bit of weight and "slide"
        to a stop when thrown.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex flex-wrap gap-4 justify-center container flex-1">
        {images.map((im, i) => (
          <img src={im} key={i} className="w-50 h-50 object-cover movable" />
        ))}
      </div>
    </div>
  );
}
