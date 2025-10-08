// components/AnimatedParagraph.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Paragraph = () => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    splitRef.current = new SplitText(textRef.current, { type: "lines" });

    // Animate each line
    gsap.fromTo(
      splitRef.current.lines,
      {
        opacity: 0,
        y: 50,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <p
      ref={textRef}
 className="text-lg text-black leading-8  text-center w-full max-w-4xl z-50
  max-lg:text-sm max-sm:text-[3vw]">
    We are more than distributors, we are Curators of remarkable wines.Our portfolio is delibertely selective, built on exclusive partnerships with world-class estates and family-owned producers.every bottle we share carries not just prrestige and provence, but a story worth telling at the finest tables.
  </p>
  )
};

export default Paragraph;
