import { useRef } from "react";

export function ParticleSystemView() {
  const canvasRef = useRef(null);
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 6: Particle System</h1>
      <p className="text-muted-foreground">
        Create a canvas particle system (confetti, fireflies, or bubbles) where
        GSAP controls each particle's movement, opacity, and scale properties.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <p className="text-center text-muted-foreground">
          Your implementation goes here
        </p>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
