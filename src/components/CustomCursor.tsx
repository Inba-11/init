import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseDown = () => {
      ring.style.width = "28px";
      ring.style.height = "28px";
      ring.style.borderWidth = "2.5px";
    };

    const onMouseUp = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderWidth = "2px";
    };

    // Hide on touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Small dot — follows cursor exactly */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "hsl(16 90% 58%)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "background 0.2s",
          mixBlendMode: "difference" as const,
        }}
      />
      {/* Outer ring — trails behind with lerp */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "2px solid hsl(16 90% 58% / 0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.25s ease, height 0.25s ease, border-width 0.25s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
