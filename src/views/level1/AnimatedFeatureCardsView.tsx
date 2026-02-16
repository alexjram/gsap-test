import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export function AnimatedFeatureCardsView() {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useGSAP(() => {
    const cards = [card1, card2, card3, card4];

    gsap.fromTo(
      cards.map((c) => c.current),
      { y: "+=100%", opacity: 0 },
      { y: "=0", stagger: 0.2, opacity: 1 },
    );
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 1: Animated Feature Cards</h1>
      <p className="text-muted-foreground">
        Create a grid of 3 or 4 cards. When the page loads, make them "pop" into
        view using a staggered effect.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Card
          className="h-100 bg-linear-to-br from-blue-400 via-sky-400 to-indigo-400"
          ref={card1}
        >
          <CardHeader>
            <CardTitle>Title 1</CardTitle>
          </CardHeader>
        </Card>
        <Card
          className="h-100 bg-linear-to-tr from-orange-400 to-rose-400"
          ref={card2}
        >
          <CardHeader>
            <CardTitle>Title 2</CardTitle>
          </CardHeader>
        </Card>
        <Card
          className="h-100 bg-linear-to-b from-slate-400 to-teal-400"
          ref={card3}
        >
          <CardHeader>
            <CardTitle>Title 3</CardTitle>
          </CardHeader>
        </Card>
        <Card
          className="h-100 bg-linear-to-tr from-green-400 to-yellow-400"
          ref={card4}
        >
          <CardHeader>
            <CardTitle>Title 4</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
