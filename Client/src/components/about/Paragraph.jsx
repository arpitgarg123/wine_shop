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
 className="text-lg text-black leading-8 text-center w-full max-w-4xl z-50
  max-lg:text-sm max-sm:text-[3vw]"    >
     Winestitute is an authorized wine distributor in Nigeria and the Exclusive distributors of the Noble Hill Wines in Nigeria.

At <strong>Winestitute</strong> , wine is more than a drink—it’s an experience, a culture, and a way of life. We’re here to help you discover wines you’ll love and moments you’ll always remember. Founded with a love for fine wines and a vision to make quality accessible, we specialize in sourcing, curating, and delivering wines from renowned vineyards and hidden gems across the world. Whether you’re a casual wine lover, a collector, or a business looking to impress clients, we ensure that each sip brings delight and sophistication.
    </p>
  );
};

export default Paragraph;
