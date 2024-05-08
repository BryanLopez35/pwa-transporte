import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "@react-spring/web";

import styles from "./Header.css";

const items = [
  "Explora tu ciudad",
  "Descubre nuevas rutas",
  "Descubre a Tijuana",
];
const interval = 3000; // Cambiar la velocidad de cambio aquí (en milisegundos)

const Trail = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (index + 1) % items.length;
      setIndex(nextIndex);
    }, interval);
    return () => clearTimeout(timer);
  }, [index]);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
  });

  return (
    <a.div style={props}>
      <span className={styles.trailsText}>{items[index]}</span>
    </a.div>
  );
};

export default function Header() {
  return (
    <div className={styles.container}>
      <Trail
        style={{
          color: "#fff",
          zIndex: 1,
          width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
        }}
      />
    </div>
  );
}
