export function CanvasClearRedrawView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 5: Canvas Clear & Redraw</h1>
      <p className="text-muted-foreground">Draw a shape, then clear the canvas (clearRect), then draw it in a new position. Understand that canvas is "immediate mode" - it doesn't remember what you drew.</p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <p className="text-center text-muted-foreground">Your implementation goes here</p>
      </div>
    </div>
  );
}
