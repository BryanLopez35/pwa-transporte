import React from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";
import ExploreCityCard from "../Cards/ExplorerTheCityCards";

export default function ExploreTheCity() {
  return (
    <div
      style={{
        backgroundColor: "#F3F4",
        width: "100%",
        minHeight: "50vh", // Cambiando height por minHeight
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container component="main" maxWidth="lg" style={{ margin: "45px auto" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{
            color: "#000",
            width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
          }}
        >
          <span style={{ fontWeight: "bold" }}>Explora la Ciudad</span>
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <ExploreCityCard />
        </Grid>
      </Container>
    </div>
  );
}
