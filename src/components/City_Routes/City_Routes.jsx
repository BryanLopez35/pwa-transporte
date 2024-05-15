import React, { useState, useEffect } from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import RouteCard from "../Card/RouteCard";
import SearchRoutes from "./SearchRoutes";
import { Link } from "react-router-dom";

export default function CityRoutes() {
  const [routes, setRoutes] = useState([]);
  const [stops, setStops] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    fetch("https://api-transporte-tijuana.onrender.com/api/routes")
      .then((res) => res.json())
      .then((data) => {
        const allStops = data.reduce(
          (acc, route) => [...acc, ...route.stops],
          []
        );
        const uniqueStops = Array.from(new Set(allStops));
        setStops(uniqueStops);
        setRoutes(data);
      })
      .catch((error) => console.error("Error fetching routes:", error));
  }, []);

  const handleSearch = (selectedStops, selectedRoute) => {
    setSelectedStops(selectedStops);
    setSelectedRoute(selectedRoute);
  };

  const filteredRoutes = routes.filter((route) => {
    if (!selectedRoute) return true;
    const stopsArray = Array.isArray(selectedStops) ? selectedStops : [];
    return (
      route.stops.includes(selectedRoute) &&
      stopsArray.every((stop) => route.stops.includes(stop))
    );
  });

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
      <Container component="main" maxWidth="lg">
        {/* Sección de Rutas */}
        <Box py={4} sx={{ color: "#fff" }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    bgcolor: "#303b4a",
                    py: 1,
                    px: 3,
                    borderRadius: "10px",
                  }}
                >
                  Rutas
                </Typography>

                <SearchRoutes
                  stops={stops}
                  routes={routes}
                  onSearch={handleSearch}
                />
                <Box
                  mt={6}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                    },
                    gap: 4,
                    color: "#ff",
                  }}
                >
                  {filteredRoutes.map((route, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Link to={`/mapa/${route.routeNumber}`}>
                        <RouteCard
                          routeNumber={route.routeNumber}
                          type={route.type}
                          concession={route.concession}
                          origin={route.origin}
                          destination={route.destination}
                          schedule={route.schedule}
                          img={route.img}
                          normalPrice={route.normalPrice}
                          preferredPrice={route.preferredPrice}
                        />
                      </Link>
                    </Grid>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </div>
  );
}
