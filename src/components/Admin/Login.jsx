import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario ya está autenticado
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && new Date().getTime() < auth.expirationTime) {
      console.log("User is already authenticated, redirecting...");
      navigate("/dashboard"); // Redirigir a la página principal si ya está autenticado
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting to login..."); // Depuración: Intento de inicio de sesión
      const response = await axios.post("https://api-transporte-tijuana.onrender.com/api/login", {
        username,
        password,
      });

      console.log("Response received:", response); // Depuración: Respuesta recibida

      if (response.status === 200) {
        console.log("Login successful!"); // Depuración: Inicio de sesión exitoso

        // Almacenar el estado de autenticación en localStorage con un tiempo de expiración
        const expirationTime = new Date().getTime() + 60 * 60 * 1000; // Expira en 1 hora
        localStorage.setItem("auth", JSON.stringify({ username, expirationTime }));

        navigate("/dashboard"); // Redirigir a la página principal después del login exitoso
      } else {
        console.log("Login failed, status code:", response.status); // Depuración: Fallo en el inicio de sesión
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error during login:", err); // Depuración: Error durante el inicio de sesión
      setError("Credenciales incorrectas");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={8}
        p={4}
        bgcolor="#161b22"
        borderRadius="10px"
      >
        <Typography variant="h4" color="white" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            variant="outlined"
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            InputLabelProps={{
              style: { color: '#ffffff99' },
            }}
            InputProps={{
              style: { color: '#ffffff' },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            InputLabelProps={{
              style: { color: '#ffffff99' },
            }}
            InputProps={{
              style: { color: '#ffffff' },
            }}
          />
          {error && (
            <Typography color="error" variant="body2" mt={2}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Box>
    </Container>
  );
}
