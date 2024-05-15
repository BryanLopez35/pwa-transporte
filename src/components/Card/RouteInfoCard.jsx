import * as React from "react";
import "./RouteInfoCard.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function RouteInfoCard({ routeDetails, totalDistance }) {
  const [value, setValue] = React.useState(2);

  return (
    <article class="job-card">
      <div class="tittle-container">
        <p class="text-title">{routeDetails.origin}</p>
        <p class="text-title">
          <ArrowForwardIcon sx={{ fontSize: 45 }} />
        </p>
        <p class="text-title">{routeDetails.destination}</p>
      </div>

      <div class="budget-exp">
        <div>
          <p class="value">${routeDetails.normalPrice}</p>
          <p class="label">Precio Normal</p>
        </div>
        <div>
          <p class="value">${routeDetails.preferredPrice}</p>
          <p class="label">Precio Preferencial</p>
        </div>
        <div>
          <p class="value">{totalDistance} KM</p>
          <p class="label">Distancia</p>
        </div>
      </div>

      <p class="text-body">Horario: {routeDetails.schedule}</p>

      <div class="tags">
        <article>
          <Typography component="legend">Califica esta Ruta</Typography>
          <Rating
            name="route-rating"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="large"
          />
        </article>
      </div>
    </article>
  );
}
