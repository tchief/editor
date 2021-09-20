import { useEffect, useRef, useState } from "react";

export const useDrag = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseUp = () => {
      setIsPressed(false);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseDown = () => {
      setIsPressed(true);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    };
    
    const onMouseMove = (e: MouseEvent) => {
      position.x += e.movementX;
      position.y += e.movementY;
      if (ref.current) ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      setPosition({x: position.x, y: position.y});
    };

    const current = ref.current;
    current?.addEventListener("mousedown", onMouseDown);
    return () => {
      current?.removeEventListener("mousedown", onMouseDown);
    };
  }, [ref, position]);

  return { ref, position, isPressed };
};
