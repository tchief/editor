import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setCoordinates = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setCoordinates);

    return () => {
      window.removeEventListener("mousemove", setCoordinates);
    };
  }, []);

  return position;
};
