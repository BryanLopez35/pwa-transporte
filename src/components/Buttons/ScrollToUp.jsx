import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

export default function ScrollToTop() {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);

  // Estilos para el botón
  const buttonStyle = {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
    borderRadius: "50%", // Hace que el botón sea redondo
    width: theme.spacing(7), // Establece el ancho del botón
    height: theme.spacing(7), // Establece la altura del botón
    minWidth: 0, // Evita que el ancho mínimo afecte el tamaño del botón
    padding: 0, // Elimina el relleno interno del botón
    visibility: showButton ? "visible" : "hidden", // Controla la visibilidad del botón
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Función para controlar la visibilidad del botón
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Tooltip title="Ir arriba" arrow>
      <Button
        style={buttonStyle}
        variant="contained"
        sx={{
          background: "#e0536c",
          "&:hover": {
            backgroundColor: "#cc3255",
          },
          "&:active": {
            backgroundColor: "#9f2241",
          },
          height: "40px",
        }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Tooltip>
  );
}
