import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";

const Dino: React.FC = () => {
  const dinoRef = useRef<HTMLDivElement | null>(null);
  const cactusRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<HTMLDivElement | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isGameActive, setIsGameActive] = useState<boolean>(false);

  // Jump method
  const jump = () => {
    if (!!dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        dinoRef.current?.classList.remove("jump");
      }, 300);
    }
  };

  // Check for collision when game is active
  useEffect(() => {
    if (!isGameActive) return;

    const isAlive = setInterval(() => {
      if (!dinoRef.current || !cactusRef.current) return;

      const dinoTop = parseInt(
        getComputedStyle(dinoRef.current).getPropertyValue("top")
      );
      const cactusLeft = parseInt(
        getComputedStyle(cactusRef.current).getPropertyValue("left")
      );

      if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        
        setScore(0);
      } else {
        setScore((prevScore) => prevScore + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  }, [isGameActive]);

  // Listen for keypress when game is active
  useEffect(() => {
    if (!isGameActive) return;

    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, [isGameActive]);

  // Detect when the game container is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsGameActive(entry.isIntersecting);
      },
      { threshold: 0.5 } // Activate when 50% of the game area is visible
    );

    if (gameRef.current) observer.observe(gameRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gameRef} className="game">
      Score: {score}
      <div id="dino" ref={dinoRef}></div>
      <div id="cactus" ref={cactusRef}></div>
    </div>
  );
};

export default Dino;
