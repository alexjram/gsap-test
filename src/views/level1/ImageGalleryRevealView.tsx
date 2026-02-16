import image1 from "@/assets/image-1.jpg";
import image2 from "@/assets/image-2.jpg";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/image-5.jpg";
import image6 from "@/assets/image-6.jpg";
import image7 from "@/assets/image-7.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export function ImageGalleryRevealView() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  useGSAP(() => {
    gsap.to(".curtain-left", {
      width: 0,
      stagger: 0.2,
      ease: "circ",
    });
    gsap.to(".curtain-right", {
      width: 0,
      stagger: 0.2,
      ease: "circ",
    });
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 1: Image Gallery Reveal</h1>
      <p className="text-muted-foreground">
        Build a simple gallery where images slide into view with a "curtain"
        effect (a colored div that slides across the image and reveals it
        underneath).
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((im, i) => (
          <div key={i} className="gallery-image relative">
            <div className="bg-linear-to-l from-red-700 to-red-500 absolute top-0 right-0 w-1/2 h-full curtain-right" />
            <div className="bg-linear-to-r from-red-700 to-red-500 absolute top-0 left-0 w-1/2 h-full curtain-left" />
            <img src={im} className="h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
