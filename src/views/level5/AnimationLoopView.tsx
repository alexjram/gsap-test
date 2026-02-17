export function AnimationLoopView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 5: Animation Loop</h1>
      <p className="text-muted-foreground">Use requestAnimationFrame to animate a circle moving across the screen. Learn the pattern: clear, update position, draw, request next frame.</p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <p className="text-center text-muted-foreground">Your implementation goes here</p>
      </div>
    </div>
  );
}
