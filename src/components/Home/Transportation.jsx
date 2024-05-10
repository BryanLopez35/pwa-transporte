import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import TransportCard from "../Card/TransportCard";

export default function TransportationOptions() {
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
          <span style={{ fontWeight: "bold" }}>Opciones de Transporte</span>
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
          <Grid item xs={12} sm={6} md={4}>
            <TransportCard
              frontContent="Bus"
              descText="Explore la extensa red de autobuses que cubre la ciudad"
              backgroundImage="https://aeropuertodetijuana.com/wp-content/uploads/2021/08/Transporte-Publico-al-Aeropuerto-de-Tijuana.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TransportCard
              frontContent="Taxis"
              descText="Viaja en las multiples opciones de taxis que hay para ti"
              backgroundImage="https://www.elsoldetijuana.com.mx/local/tytpk3-taxis-rojos/ALTERNATES/LANDSCAPE_1140/TAXIS%20ROJOS"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TransportCard
              frontContent="Tren"
              descText="Viaja en el eficiente sistema de trenes para llegar a tu destino"
              backgroundImage="https://lasillarota.com/u/fotografias/m/2023/12/27/f960x540-531856_605931_5050.jpeg"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
