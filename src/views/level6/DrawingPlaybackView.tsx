export function DrawingPlaybackView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 6: Interactive Drawing Playback</h1>
      <p className="text-muted-foreground">Users draw on canvas, then GSAP animates the strokes with replay, morph, or dissolve effects.</p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <p className="text-center text-muted-foreground">Your implementation goes here</p>
      </div>
    </div>
  );
}
