import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton
} from "@mui/material";
import { Close } from "@mui/icons-material";

const AddRouteModal = ({ open, handleClose, handleAdd }) => {
  const [newRoute, setNewRoute] = useState({
    routeNumber: "",
    type: "",
    concession: "",
    origin: "",
    destination: "",
    stops: "",
    mapRoute: "",
    schedule: "",
    normalPrice: "",
    preferredPrice: "",
    img: "",
  });

  const handleChange = (e) => {
    setNewRoute({ ...newRoute, [e.target.name]: e.target.value });
  };

  const handleStopsChange = (e) => {
    setNewRoute({ ...newRoute, stops: e.target.value.split(",") });
  };

  const handleMapRouteChange = (e) => {
    setNewRoute({ ...newRoute, mapRoute: JSON.parse(e.target.value) });
  };

  const handleSubmit = () => {
    handleAdd(newRoute);
    setNewRoute({
      routeNumber: "",
      type: "",
      concession: "",
      origin: "",
      destination: "",
      stops: "",
      mapRoute: "",
      schedule: "",
      normalPrice: "",
      preferredPrice: "",
      img: "",
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        bgcolor="background.paper"
        p={4}
        mx="auto"
        my={4}
        maxWidth="md"
        borderRadius="10px"
        boxShadow={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <IconButton
          style={{ position: 'absolute', top: 10, right: 10 }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          Agregar Nueva Ruta
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Número de Ruta"
              name="routeNumber"
              value={newRoute.routeNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Tipo"
              name="type"
              value={newRoute.type}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Concesión"
              name="concession"
              value={newRoute.concession}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Origen"
              name="origin"
              value={newRoute.origin}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Destino"
              name="destination"
              value={newRoute.destination}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Paradas (separadas por coma)"
              name="stops"
              value={newRoute.stops}
              onChange={handleStopsChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ruta en Mapa (JSON)"
              name="mapRoute"
              value={newRoute.mapRoute}
              onChange={handleMapRouteChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Horario"
              name="schedule"
              value={newRoute.schedule}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio Normal"
              name="normalPrice"
              value={newRoute.normalPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio Preferencial"
              name="preferredPrice"
              value={newRoute.preferredPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Imagen URL"
              name="img"
              value={newRoute.img}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Crear Ruta
        </Button>
      </Box>
    </Modal>
  );
};

export default AddRouteModal;
