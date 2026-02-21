import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

/*
 * PARTICLE SYSTEM REQUIREMENTS
 *
 * ============================================
 * BUBBLES
 * ============================================
 * Visual:
 *   - Semi-transparent circles (varying opacity: 0.3-0.7)
 *   - Varying sizes (small, medium, large)
 *   - Light blue/white gradient or solid color
 *
 * Movement:
 *   - Float UPWARD from bottom of screen
 *   - Slow base speed (ease: "none" or "power1.out")
 *   - Wobble side-to-side as they rise (use x oscillation)
 *   - Slight horizontal drift for natural feel
 *
 * Lifecycle:
 *   - Spawn at bottom, random x position
 *   - Despawn when they exit top of screen
 *   - Continuous spawning (every 200-500ms)
 *
 * GSAP Properties to animate:
 *   - y: from canvas.height to -particleSize
 *   - x: slight random oscillation
 *   - opacity: can fade in on spawn
 *
 * ============================================
 * FIREFLIES
 * ============================================
 * Visual:
 *   - Small glowing dots (3-8px radius)
 *   - Warm colors: yellow, amber, soft green
 *   - Glow effect (use shadowBlur or radial gradient)
 *
 * Movement:
 *   - Slow, wandering paths (random direction changes)
 *   - No gravity - float in any direction
 *   - Organic, unpredictable motion
 *   - Use multiple tweens or timeline for complex paths
 *
 * Lifecycle:
 *   - Spawn anywhere on screen
 *   - PULSE: fade in/out repeatedly (opacity: 0 -> 1 -> 0)
 *   - Limited lifespan (3-8 seconds then fade out)
 *   - Respawn after death
 *
 * GSAP Properties to animate:
 *   - x: random wandering
 *   - y: random wandering
 *   - opacity: pulsing effect (repeat: -1, yoyo: true)
 *   - scale: slight size pulse (optional)
 *
 * ============================================
 * CONFETTI
 * ============================================
 * Visual:
 *   - Small rectangles (5-15px x 8-20px)
 *   - Multiple bright colors (red, blue, yellow, green, pink, etc.)
 *   - Random color per particle
 *
 * Movement:
 *   - Fall DOWNWARD with gravity simulation
 *   - Start with initial burst/spread outward
 *   - Horizontal drift (simulating air resistance)
 *   - SPIN/ROTATE as they fall
 *
 * Lifecycle:
 *   - Burst spawn (many particles at once)
 *   - Spawn from top center or on click
 *   - Despawn when they exit bottom
 *   - Continuous bursts or user-triggered
 *
 * GSAP Properties to animate:
 *   - y: from 0 to canvas.height (with gravity ease)
 *   - x: initial spread, then drift
 *   - rotation: 0 to 360+ (multiple rotations)
 *   - opacity: fade out near bottom (optional)
 *
 * ============================================
 * IMPLEMENTATION TIPS
 * ============================================
 * 1. Create a Particle class/object with properties:
 *    - x, y, size, color, opacity, velocity, etc.
 *
 * 2. Particle pool or array to track active particles
 *
 * 3. Animation loop using GSAP:
 *    - gsap.ticker.add() for frame updates
 *    - OR animate each particle with gsap.to()
 *
 * 4. Render loop:
 *    - Clear canvas each frame
 *    - Loop through particles and draw each
 *    - Use ctx.arc() for circles, ctx.fillRect() for confetti
 *
 * 5. Cleanup removed particles to prevent memory leaks
 */

export function ParticleSystemView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [type, setType] = useState<"bubbles" | "fireflies" | "confetti">(
    "bubbles",
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const resizeListener = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [type]);
  return (
    <div className="flex flex-col gap-4 p-4 h-screen">
      <h1 className="text-3xl font-bold">Level 6: Particle System</h1>
      <p className="text-muted-foreground">
        Create a canvas particle system (confetti, fireflies, or bubbles) where
        GSAP controls each particle's movement, opacity, and scale properties.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1 relative">
        <div className="absolute left-12 top-12">
          <Button
            className="rounded-none"
            variant={type === "bubbles" ? "secondary" : "default"}
            onClick={() => setType("bubbles")}
          >
            Bubbles
          </Button>
          <Button
            className="rounded-none"
            variant={type === "fireflies" ? "secondary" : "default"}
            onClick={() => setType("fireflies")}
          >
            Fireflies
          </Button>
          <Button
            className="rounded-none"
            variant={type === "confetti" ? "secondary" : "default"}
            onClick={() => setType("confetti")}
          >
            Confetti
          </Button>
        </div>
        <canvas ref={canvasRef} className="bg-neutral-800 h-full w-full" />
      </div>
    </div>
  );
}
