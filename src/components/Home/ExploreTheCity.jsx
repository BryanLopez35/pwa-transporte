import React from "react";
import { Grid, Typography, Container } from "@mui/material";

export default function ExploreTheCity() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#161b22",
      }}
    >
      <Container
        component="main"
        maxWidth="lg"
        style={{ margin: "122px auto" }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{
            color: "#fff",
            width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            marginBottom: "26px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Explora tu Ciudad</span>
        </Typography>
        <div
          style={{
            width: "70%", // Asegura que el ancho sea del 100% para dispositivos pequeños
            textAlign: "center", // Centrar el texto horizontalmente
            margin: "auto", // Centrar el componente verticalmente
            marginBottom: "65px",
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            style={{
              color: "#fff",
              width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
              textAlign: "center", // Centrar el texto horizontalmente
              margin: "auto", // Centrar el componente verticalmente
              position: "relative",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            orci suscipit sapien elementum sollicitudin.
          </Typography>
        </div>
        <Grid container spacing={2} justifyContent="center" maxWidth="lg">
        </Grid>
      </Container>
    </div>
  );
}
