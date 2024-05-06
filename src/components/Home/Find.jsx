import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function Find() {
  return (
    <>
      {/* Contenedor de la sección del formulario */}
      <div
        style={{
          minHeight: "91vh", // Ajusta la altura vertical del contenedor principal
          position: "relative", // Asegura que la superposición esté dentro del contenedor
          overflow: "hidden", // Evita que la superposición sobresalga del contenedor
          background: `url("https://cdn-3.expansion.mx/dims4/default/82048d0/2147483647/strip/true/crop/2107x1423+0+0/resize/1200x810!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F34%2F11ce48a3419c8f0f7f8ccc772ef0%2Fistock-880471902.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
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
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Color oscuro con opacidad
            zIndex: -1, // Asegura que esté detrás de los elementos del formulario
          }}
        />

        {/* Contenido del formulario */}
        <Container component="main" maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            style={{ color: "#fff", zIndex: 1 }}
          >
            Explora tu ciudad, Muévete por{" "}
            <span style={{ fontWeight: "bold" }}>Tijuana</span>
          </Typography>
          <div
            style={{
              background: "rgba(255, 255, 255, 255)", // Fondo blanco semi-transparente
              borderRadius: "13px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              padding: "30px",
              width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
              maxWidth: "800px", // Limita el ancho máximo para pantallas más grandes
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
            <form noValidate style={{ width: "100%" }}>
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
                    autoFocus
                    sx={{
                      borderColor: "#ec8090",
                    }}
                    placeholder="Ingresa el punto de inicio"
                    InputProps={{
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
                      background: "#e0536c",
                      "&:hover": {
                        backgroundColor: "#cc3255",
                      },
                      "&:active": {
                        backgroundColor: "#9f2241",
                      },
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
