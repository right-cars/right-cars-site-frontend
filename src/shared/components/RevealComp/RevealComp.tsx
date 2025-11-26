"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

import cls from "./styles.module.scss";

interface RevealCompProps {
  children: ReactNode;
  threshold: number | number[];
  duration: string;
  x?: number;
  y?: number;
}

export default function RevealComp({
  children,
  threshold,
  duration,
  x = 0,
  y = 0,
}: RevealCompProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [intersecting, setIntersecting] = useState(false);
  console.log("🚀 ~ intersecting:", intersecting);

useEffect(() => {
  const currentRef = ref.current;
  if (!currentRef) return;
  
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      setIntersecting(entries[0].isIntersecting);
    },
    { threshold }
  );

  intersectionObserver.observe(currentRef);

  return () => intersectionObserver.unobserve(currentRef);
}, [threshold]);


  return (
    <div 
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : "translate(0px, 0px)",
      }}
      className={`${cls.transition} ${intersecting ? cls.visible : cls.hidden}`}
    >
      {children}
    </div>
  );
}
