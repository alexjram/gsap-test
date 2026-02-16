import type React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
interface Props {
  children: string;
  loading: boolean;
  onClick: () => void;
}

export default function AnimatedButton({ children, loading, onClick }: Props) {
  const [prevLoading, setPrevLoading] = useState(loading);
  const ref = useRef(null);
  useEffect(() => {});

  const handleClick = () => {
    gsap.to(ref.current, {
      borderColor: "green",
      borderBottomColor: "transparent",
      padding: "16px",
      background: "transparent",
      rotate: "+=360",
      borderRadius: "100%",
      repeat: 5,
      duration: 2000,
    });
    onClick();

    setTimeout(() => {
      gsap.to(ref.current, {
        border: "solid 2px deepskyblue",
        background: "deepskyblue",
        padding: "8px 16px",
        color: "white",
      });
    });
  };
  return (
    <button
      style={{
        border: "solid 2px deepskyblue",
        background: "deepskyblue",
        padding: "8px 16px",
        color: "white",
      }}
      onClick={handleClick}
    >
      {!loading ? children : ""}
    </button>
  );
}
