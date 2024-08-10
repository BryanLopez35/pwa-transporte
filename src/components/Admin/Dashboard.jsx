import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import AddRouteModal from "./AddRouteModal";
import EditRouteModal from "./EditRouteModal";

export default function Dashboard() {
  const [routes, setRoutes] = useState([]);
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
  const [editingRoute, setEditingRoute] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get("https://api-transporte-tijuana.onrender.com/api/routes");
        setRoutes(response.data);
      } catch (err) {
        setError("Error fetching routes");
      }
    };
    fetchRoutes();
  }, []);

  const handleCreate = async (route) => {
    try {
      const response = await axios.post("https://api-transporte-tijuana.onrender.com/api/routes", route);
      setRoutes([...routes, response.data]);
      setOpenAddModal(false);
    } catch (err) {
      setError("Error creating route");
    }
  };

  const handleUpdate = async (route) => {
    try {
      const response = await axios.put(`https://api-transporte-tijuana.onrender.com/api/routes/${route.routeNumber}`, route);
      setRoutes(routes.map(r => (r.routeNumber === route.routeNumber ? response.data : r)));
      setEditingRoute(null);
      setOpenEditModal(false);
    } catch (err) {
      setError("Error updating route");
    }
  };

  const handleDelete = async (routeNumber) => {
    try {
      await axios.delete(`https://api-transporte-tijuana.onrender.com/api/routes/${routeNumber}`);
      setRoutes(routes.filter(route => route.routeNumber !== routeNumber));
    } catch (err) {
      setError("Error deleting route");
    }
  };

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8} p={4} bgcolor="#161b22" borderRadius="10px">
        <Typography variant="h4" color="white" gutterBottom>
          Dashboard de Rutas
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setOpenAddModal(true)}
        >
          Agregar Ruta
        </Button>

        {error && (
          <Typography color="error" variant="body2" mt={2}>
            {error}
          </Typography>
        )}

        <TableContainer component={Paper} mt={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Número de Ruta</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Origen</TableCell>
                <TableCell>Destino</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {routes.map(route => (
                <TableRow key={route.routeNumber}>
                  <TableCell>{route.routeNumber}</TableCell>
                  <TableCell>{route.type}</TableCell>
                  <TableCell>{route.origin}</TableCell>
                  <TableCell>{route.destination}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => { setEditingRoute(route); setOpenEditModal(true); }}>
                      <Edit color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(route.routeNumber)}>
                      <Delete color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Modal para agregar ruta */}
        <AddRouteModal
          open={openAddModal}
          handleClose={() => setOpenAddModal(false)}
          handleAdd={handleCreate}
        />

        {/* Modal para editar ruta */}
        {editingRoute && (
          <EditRouteModal
            open={openEditModal}
            handleClose={() => setOpenEditModal(false)}
            handleUpdate={handleUpdate}
            route={editingRoute}
          />
        )}
      </Box>
    </Container>
  );
}
