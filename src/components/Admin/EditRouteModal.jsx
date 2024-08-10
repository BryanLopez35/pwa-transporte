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

const EditRouteModal = ({ open, handleClose, handleUpdate, route }) => {
  const [editedRoute, setEditedRoute] = useState(route);

  const handleChange = (e) => {
    setEditedRoute({ ...editedRoute, [e.target.name]: e.target.value });
  };

  const handleStopsChange = (e) => {
    setEditedRoute({ ...editedRoute, stops: e.target.value.split(",") });
  };

  const handleMapRouteChange = (e) => {
    setEditedRoute({ ...editedRoute, mapRoute: JSON.parse(e.target.value) });
  };

  const handleSubmit = () => {
    handleUpdate(editedRoute);
    setEditedRoute(route);
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
          Editar Ruta
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Número de Ruta"
              name="routeNumber"
              value={editedRoute.routeNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Tipo"
              name="type"
              value={editedRoute.type}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Concesión"
              name="concession"
              value={editedRoute.concession}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Origen"
              name="origin"
              value={editedRoute.origin}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Destino"
              name="destination"
              value={editedRoute.destination}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Paradas (separadas por coma)"
              name="stops"
              value={editedRoute.stops.join(",")}
              onChange={handleStopsChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ruta en Mapa (JSON)"
              name="mapRoute"
              value={JSON.stringify(editedRoute.mapRoute)}
              onChange={handleMapRouteChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Horario"
              name="schedule"
              value={editedRoute.schedule}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio Normal"
              name="normalPrice"
              value={editedRoute.normalPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio Preferencial"
              name="preferredPrice"
              value={editedRoute.preferredPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Imagen URL"
              name="img"
              value={editedRoute.img}
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
          Actualizar Ruta
        </Button>
      </Box>
    </Modal>
  );
};

export default EditRouteModal;
