export function BouncingBallView() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 5: Bouncing Ball</h1>
      <p className="text-muted-foreground">Make a ball bounce off the canvas edges by detecting collision with canvas width/height and reversing direction.</p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <p className="text-center text-muted-foreground">Your implementation goes here</p>
      </div>
    </div>
  );
}
