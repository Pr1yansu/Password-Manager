"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  duration?: number;
  delayMultiplier?: number;
  id?: string;
  className?: string;
};

const TextRevealAnimation: React.FC<Props> = ({
  text,
  duration = 0.5,
  delayMultiplier = 0.003,
  id,
  className,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span.letter");
    const tl = gsap.timeline();

    letters.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration,
          delay: index * delayMultiplier,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <span id={id} ref={containerRef} className={cn("inline-flex", className)}>
      {text.split("").map((char, index) => (
        <span key={index} className="letter inline-block whitespace-pre">
          {char}
        </span>
      ))}
    </span>
  );
};

export default TextRevealAnimation;
