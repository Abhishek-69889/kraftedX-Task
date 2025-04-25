"use client";

import { useState, useEffect } from "react";

export default function InteractiveBackground() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCoords({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const xPercent = (coords.x / window.innerWidth) * 100;
  const yPercent = (coords.y / window.innerHeight) * 100;

  const style = {
    background: `radial-gradient(circle at ${xPercent}%  ${yPercent}%, #7F00FF 5%,black 40%)`,
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    transition: "background 0.1s",
  };

  return (
    <div>
      <div style={style}></div>

      <div className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">
          Interactive Background
        </h1>
      </div>
    </div>
  );
}
