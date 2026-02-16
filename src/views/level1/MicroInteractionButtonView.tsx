import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { sleep } from "@/lib/utils";
import { gsap } from "gsap";
import { useRef } from "react";

export function MicroInteractionButtonView() {
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  const handleSubmit = async () => {
    if (!buttonRef.current) return;
    const text = buttonRef.current.innerText;
    buttonRef.current.innerText = "";
    await gsap.to(buttonRef.current, {
      borderRadius: "100%",
      backgroundColor: "transparent",
      borderTopColor: "gray",
      borderLeftColor: "gray",
      borderRightColor: "gray",
      borderStyle: "solid",
      borderWidth: "3px",
      borderBottom: "solid 3px transparent",
      width: 40,
      height: 40,
    });
    await gsap.fromTo(
      buttonRef.current,
      { rotate: 0 },
      {
        rotate: 360 * 5,
        duration: 3,
        ease: "none",
        clearProps: "scale",
      },
    );
    buttonRef.current.innerText = "Done!";
    await gsap.to(buttonRef.current, {
      borderRadius: "8px",
      backgroundColor: "#00c950",
      color: "white",
      borderStyle: "none",
      width: "auto",
      height: "unset",
    });

    await sleep(500);
    buttonRef.current.innerText = text;
    await gsap.to(buttonRef.current, {
      backgroundColor: "black",
      clearProps: "scale",
    });
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Level 1: Micro-Interaction Button</h1>
      <p className="text-muted-foreground">
        Design a "Submit" button that, when clicked transforms into a loading
        spinner and then into a "Success" checkmark.
      </p>
      <div className="mt-8 rounded-lg border-2 border-dashed border-muted p-12">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage the settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Display Name</label>
              <Input placeholder="your name" defaultValue="User" />
            </div>
            <Button ref={buttonRef} onClick={handleSubmit}>
              Save changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
