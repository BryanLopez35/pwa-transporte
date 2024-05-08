import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useTransition } from "@react-spring/web";
import IconButton from "@mui/material/IconButton";
import { Room } from "@mui/icons-material";
import { CircularProgress } from '@mui/material';

const images = [
  "https://cdn-3.expansion.mx/dims4/default/82048d0/2147483647/strip/true/crop/2107x1423+0+0/resize/1200x810!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F34%2F11ce48a3419c8f0f7f8ccc772ef0%2Fistock-880471902.jpg",
  "https://www.tripsavvy.com/thmb/nOLfxryJsaBbNYMozBiUpb7nERA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TijuanaPlazaSantaCecilia-2-81bb03affd0b48659296e14fa50b5a8e.jpg",
  "https://aecomercializadora.com.mx/wp-content/uploads/2023/04/tijuana-2.jpg",
  // Agrega más URLs de imágenes aquí
];
export default function Find() {
  const [fetchingLocation, setFetchingLocation] = useState(false);

  const [userAddress, setUserAddress] = useState("");
  const getUserLocation = () => {
    if (navigator.geolocation) {
      setFetchingLocation(true); // Indicar que se está obteniendo la ubicación
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
          );
          const data = await response.json();
          const { display_name } = data;
          setUserAddress(display_name);
        } catch (error) {
          console.error("Error fetching user address:", error);
        } finally {
          setFetchingLocation(false); // Indicar que se ha obtenido la ubicación
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const [index, set] = useState(0);
  useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % images.length);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <>
      {/* Contenedor de la sección del formulario */}
      <div
        style={{
          minHeight: "90vh", // Ajusta la altura vertical del contenedor principal
          position: "relative", // Asegura que la superposición esté dentro del contenedor
          overflow: "hidden", // Evita que la superposición sobresalga del contenedor
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          willChange: "opacity",
          zIndex: 0,
        }}
      >
        {/* Superposición para oscurecer la imagen */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Color oscuro con opacidad
            zIndex: -1, // Asegura que esté detrás de los elementos del formulario
          }}
        />

        {/* Contenido del formulario */}
        <Container component="main" maxWidth="md">
          <div
            style={{
              padding: "5px",
              width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
              maxWidth: "700px", // Limita el ancho máximo para pantallas más grandes
              margin: "auto", // Centra el contenido horizontalmente
              height: "auto", // Establece la altura automática para el formulario
              display: "flex", // Permite que los elementos se distribuyan verticalmente
              flexDirection: "column", // Coloca los elementos en una columna
              justifyContent: "space-between", // Distribuye los elementos de manera uniforme
              alignItems: "center", // Centra los elementos horizontalmente
              position: "relative", // Ajusta el z-index para que esté por encima del fondo
              zIndex: 1, // Asegura que esté por encima del fondo
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              style={{
                color: "#fff",
                zIndex: 1,
                width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
              }}
            >
              Explora tu ciudad, Muévete por{" "}
              <span style={{ fontWeight: "bold" }}>Tijuana</span>
            </Typography>
          </div>

          <div
            style={{
              background: "#161b22",
              borderRadius: "13px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.9)",
              padding: "35px",
              width: "auto", // Asegura que el ancho sea del 100% para dispositivos pequeños
              maxWidth: "650px", // Limita el ancho máximo para pantallas más grandes
              margin: "auto", // Centra el contenido horizontalmente
              height: "auto", // Establece la altura automática para el formulario
              display: "flex", // Permite que los elementos se distribuyan verticalmente
              flexDirection: "column", // Coloca los elementos en una columna
              justifyContent: "space-between", // Distribuye los elementos de manera uniforme
              alignItems: "center", // Centra los elementos horizontalmente
              position: "relative", // Ajusta el z-index para que esté por encima del fondo
              zIndex: 1, // Asegura que esté por encima del fondo
            }}
          >
            <form
              noValidate
              style={{
                width: "100%",
                color: "#fff",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="origin"
                    label="Origen"
                    name="origin"
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                    sx={{
                      input: { color: "white" },
                      "& .MuiInputLabel-root": {
                        color: "#354557", // Cambia el color de la etiqueta
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#fff", // Cambia el color de la etiqueta cuando está enfocada
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#354557", // Cambia el color del borde del TextField
                        },
                        "&:hover fieldset": {
                          borderColor: "#4a637f", // Cambia el color del borde al pasar el cursor
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#4a637f", // Cambia el color del borde cuando está enfocado
                        },
                      },
                    }}
                    placeholder="Ingresa el punto de inicio"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Obtener ubicación"
                            edge="end"
                            onClick={getUserLocation}
                            disabled={fetchingLocation} // Deshabilitar el botón mientras se obtiene la ubicación
                          >
                            {fetchingLocation ? (
                              <CircularProgress size={24} />
                            ) : (
                              <Room style={{ color: "white" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="destination"
                    label="Destino"
                    name="destination"
                    placeholder="Ingresa tu destino"
                    sx={{
                      input: { color: "white" },
                      "& .MuiInputLabel-root": {
                        color: "#354557", // Cambia el color de la etiqueta
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#fff", // Cambia el color de la etiqueta cuando está enfocada
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#354557", // Cambia el color del borde del TextField
                        },
                        "&:hover fieldset": {
                          borderColor: "#4a637f", // Cambia el color del borde al pasar el cursor
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#4a637f", // Cambia el color del borde cuando está enfocado
                        },
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "#5e7c99",
                      "&:hover": {
                        backgroundColor: "#4a637f",
                      },
                      "&:active": {
                        backgroundColor: "#3d5067",
                      },
                      height: "40px",
                    }}
                    onClick={() => alert("Botón presionado")}
                  >
                    Encontrar Rutas
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
