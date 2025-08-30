import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  tag = "p",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(
    () => {
      if (!ref.current || !text) return;
      
      const el = ref.current;
      const chars = el.querySelectorAll('.split-char');
      
      if (chars.length === 0) {
        console.warn("No characters found for split text");
        return;
      }

      // Set initial state for all characters
      gsap.set(chars, from);

      // Create the animation
      const tl = gsap.to(chars, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          once: true,
          onEnter: () => {
            setIsVisible(true);
          },
        },
        onComplete: () => {
          onLetterAnimationComplete?.();
        },
      });

      return () => {
        if (tl) tl.kill();
      };
    },
    {
      dependencies: [text],
      scope: ref,
    }
  );

  // Split text into characters
  const splitText = (text) => {
    if (splitType === "chars") {
      return text.split('').map((char, index) => (
        <span key={index} className="split-char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-word inline-block mr-2">
          {word}
        </span>
      ));
    }
    return text;
  };

  const renderTag = () => {
    const style = {
      wordWrap: "break-word",
    };
    
    const classes = `split-parent ${className}`;
    
    switch (tag) {
      case "h1":
        return (
          <h1 ref={ref} style={style} className={classes}>
            {splitText(text)}
          </h1>
        );
      case "h2":
        return (
          <h2 ref={ref} style={style} className={classes}>
            {splitText(text)}
          </h2>
        );
      case "h3":
        return (
          <h3 ref={ref} style={style} className={classes}>
            {splitText(text)}
          </h3>
        );
      case "h4":
        return (
          <h4 ref={ref} style={style} className={classes}>
            {splitText(text)}
          </h4>
        );
      case "h5":
        return (
          <h5 ref={ref} style={style} className={classes}>
            {splitText(text)}
          </h5>
        );
      case "h6":
        return (
          <h6 ref={ref} style={style} className={classes}>
            {splitText(text)}
          </h6>
        );
      case "span":
        return (
          <span ref={ref} style={style} className={classes}>
            {splitText(text)}
          </span>
        );
      default:
        return (
          <p ref={ref} style={style} className={classes}>
            {splitText(text)}
          </p>
        );
    }
  };

  return renderTag();
};

export default SplitText;
