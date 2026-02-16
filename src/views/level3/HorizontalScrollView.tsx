import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import image1 from "@/assets/image-1.jpg";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { Input } from "@/components/ui/input";

export function HorizontalScrollView() {
  const horizontalRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const horizontal = horizontalRef.current;
    const wrapper = horizontal?.childNodes[0] as HTMLDivElement;
    if (!horizontal || !wrapper) return;

    const scrollableWidth = wrapper.scrollWidth - wrapper.clientWidth;
    gsap.to(wrapper, {
      x: -scrollableWidth,
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        pin: true,
        scrub: 1,
        end: `+=${scrollableWidth}`,
        anticipatePin: 1,
      },
    });
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 3: Horizontal Scroll Section</h1>
      <p className="text-muted-foreground">
        Create a long webpage where one specific section scrolls horizontally
        instead of vertically as the user continues to scroll down.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12 flex-1">
        <section className="bg-linear-60 from-blue-800 to-green-800 h-200 flex items-center px-20">
          <h2 className="text-4xl text-white font-bold">HERO TEXT</h2>
        </section>
        <section
          ref={horizontalRef}
          className="bg-black py-10 px-10 overflow-hidden h-screen flex items-center"
        >
          <div className="gap-4 flex flex-nowrap justify-start">
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
            <Card className="w-1/3 shrink-0">
              <CardHeader>
                <CardTitle>Title 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sid amet </p>
                <img src={image1} />
              </CardContent>
              <CardFooter>
                <Button>Go</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="bg-linear-to-r from-pink-800 to-purple-800 h-200 flex justify-center py-20 px-20 items-center">
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input placeholder="email" />
              </div>
              <div>
                <Input placeholder="name" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Contact</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
