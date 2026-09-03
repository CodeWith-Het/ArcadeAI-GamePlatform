import { useRef } from "react";

/**
 * Wraps children in a card whose background radial-gradient follows the
 * cursor, matching the .spotlight-card behavior from the reference build.
 */
const SpotlightCard = ({ className = "", children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
