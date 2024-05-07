import React from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";

const gridStyles = {
  maxWidth: "100%",
  margin: "0 auto", // Centra la tarjeta horizontalmente
  borderRadius: "13px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
  height: "250px",
};

export default function TransportationOptions() {
  return (
    <div
      style={{
        backgroundColor: "#F3F4F6",
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
          <span style={{ fontWeight: "bold" }}>Opciones de Transporte</span>
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card style={gridStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Card Content goes here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={gridStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Card Content goes here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={gridStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Card Content goes here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
