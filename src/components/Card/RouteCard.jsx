import * as React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function RouteCard({
  routeNumber,
  type,
  concession,
  origin,
  destination,
  stops,
  schedule,
  mapRoute,
  img,
  normalPrice,
  preferredPrice,
}) {
  return (
    <Card style={{ backgroundColor: "#303b4a", color: "#f5f7fa" }}>
      <div className="relative">
        <img
          alt="Transporte público"
          className="rounded-t-lg object-cover w-full aspect-[3/2]"
          height={150}
          src={img}
          width={"100%"}
        />
      </div>
      <CardContent>
        <div style={{ marginBottom: "20px" }}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Typography variant="h5" component="h2">
                Ruta {routeNumber}
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Typography variant="h5" component="h2" className="font-bold">
                ${normalPrice}
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Typography variant="body2" color="#f5f7fa">
                Origen
              </Typography>
              <Typography variant="body1">{origin}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="#f5f7fa">
                Destino
              </Typography>
              <Typography variant="body1">{destination}</Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Typography variant="body2" color="#f5f7fa">
                Horario
              </Typography>
              <Typography variant="body1">{schedule}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="#f5f7fa">
                Precio Preferencial
              </Typography>
              <Typography variant="body1" className="font-bold">
                ${preferredPrice}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
}
