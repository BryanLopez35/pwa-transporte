import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useTransition } from "@react-spring/web";
import IconButton from "@mui/material/IconButton";
import { Room } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const images = [
  "https://cdn-3.expansion.mx/dims4/default/82048d0/2147483647/strip/true/crop/2107x1423+0+0/resize/1200x810!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F34%2F11ce48a3419c8f0f7f8ccc772ef0%2Fistock-880471902.jpg",
  "https://www.tripsavvy.com/thmb/nOLfxryJsaBbNYMozBiUpb7nERA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TijuanaPlazaSantaCecilia-2-81bb03affd0b48659296e14fa50b5a8e.jpg",
  "https://aecomercializadora.com.mx/wp-content/uploads/2023/04/tijuana-2.jpg",
  // Agrega más URLs de imágenes aquí
];
export default function Find() {
  const [fetchingLocation, setFetchingLocation] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [originCoordinates, setOriginCoordinates] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [destinationSearchOptions, setDestinationSearchOptions] = useState([]);

  let searchTimeout;
  const handleAddressSearch = async (inputValue, field) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
      const provider = new OpenStreetMapProvider({
        params: {
          "accept-language": "es",
          countrycodes: "mx",
          addressdetails: 1,
          viewbox: "-117.18,32.38,-116.70,32.58",
        },
      });
      const results = await provider.search({ query: inputValue });
      const filteredResults = results.filter((result) =>
        ["Tijuana", "Playas de Tijuana", "Rosarito", "Tecate"].some((area) =>
          result.label.includes(area)
        )
      );
      if (field === "origin") {
        setSearchOptions(filteredResults.map((result) => result.label));
        if (filteredResults.length > 0) {
          setOriginCoordinates({
            lat: filteredResults[0].y,
            lng: filteredResults[0].x,
          });
        } else {
          setOriginCoordinates(null);
        }
      } else if (field === "destination") {
        setDestinationSearchOptions(
          filteredResults.map((result) => result.label)
        );
        if (filteredResults.length > 0) {
          setDestinationCoordinates({
            lat: filteredResults[0].y,
            lng: filteredResults[0].x,
          });
        } else {
          setDestinationCoordinates(null);
        }
      }
    }, 300);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      setFetchingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          // Almacenar coordenadas de origen
          setOriginCoordinates({ lat: latitude, lng: longitude });
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            );
            const data = await response.json();
            const { display_name } = data;
            setUserAddress(display_name);
          } catch (error) {
            console.error("Error fetching user address:", error);
          } finally {
            setFetchingLocation(false);
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert(
              "Para usar esta función, por favor habilita los permisos de ubicación en tu navegador."
            );
          } else {
            alert("Ocurrió un error al obtener la ubicación.");
          }
          setFetchingLocation(false);
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
  };

  const handleAddressSelect = (selectedAddress) => {
    setSelectedAddress(selectedAddress);
    // Obtener coordenadas de la dirección seleccionada
    const provider = new OpenStreetMapProvider({
      params: {
        "accept-language": "es",
        countrycodes: "mx",
        addressdetails: 1,
        viewbox: "-117.18,32.38,-116.70,32.58", // Coordenadas del área de Tijuana, Playas de Tijuana, Rosarito y Tecate
      },
    });
    provider.search({ query: selectedAddress }).then((results) => {
      if (results.length > 0) {
        // Actualizar las coordenadas y la dirección del origen al seleccionar una dirección
        setOriginCoordinates({
          lat: results[0].y,
          lng: results[0].x,
        });
        setUserAddress(selectedAddress); // Actualizar la dirección del usuario
      } else {
        setOriginCoordinates(null); // No se encontraron resultados válidos
        setUserAddress(""); // Reiniciar la dirección del usuario
      }
    });
  };

  const [index, set] = useState(0);

  useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % images.length);
      }
    },
    exitBeforeEnter: true,
  });

  const handleSubmit = () => {
    // Verificar si se han obtenido las coordenadas de origen y destino
    if (originCoordinates && destinationCoordinates) {
      // Crear una cadena de texto con las coordenadas
      const coordinatesMessage = `Coordenadas de origen: ${JSON.stringify(
        originCoordinates
      )}, Coordenadas de destino: ${JSON.stringify(destinationCoordinates)}`;
      // Mostrar las coordenadas en un alert
      alert(coordinatesMessage);
    } else {
      alert(
        "Por favor selecciona direcciones válidas antes de encontrar rutas."
      );
    }
  };
  // Función para manejar la búsqueda de direcciones en el campo de destino
  const handleDestinationSearch = async (inputValue) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
      const provider = new OpenStreetMapProvider({
        params: {
          "accept-language": "es",
          countrycodes: "mx",
          addressdetails: 1,
          viewbox: "-117.18,32.38,-116.70,32.58",
        },
      });
      const results = await provider.search({ query: inputValue });
      const filteredResults = results.filter((result) =>
        ["Tijuana", "Playas de Tijuana", "Rosarito", "Tecate"].some((area) =>
          result.label.includes(area)
        )
      );
      setDestinationSearchOptions(
        filteredResults.map((result) => result.label)
      );
      if (filteredResults.length > 0) {
        setDestinationCoordinates({
          lat: filteredResults[0].y,
          lng: filteredResults[0].x,
        });
      } else {
        setDestinationCoordinates(null);
      }
    }, 300);
  };

  return (
    <>
      {/* Contenedor de la sección del formulario */}
      <div
        style={{
          minHeight: "92vh", // Ajusta la altura vertical del contenedor principal
          position: "relative", // Asegura que la superposición esté dentro del contenedor
          overflow: "hidden", // Evita que la superposición sobresalga del contenedor
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          willChange: "opacity",
          zIndex: 0,
        }}
      >
        {/* Superposición para oscurecer la imagen */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Color oscuro con opacidad
            zIndex: -1, // Asegura que esté detrás de los elementos del formulario
          }}
        />

        {/* Contenido del formulario */}
        <Container component="main" maxWidth="md">
          <div
            style={{
              padding: "5px",
              width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
              maxWidth: "700px", // Limita el ancho máximo para pantallas más grandes
              margin: "auto", // Centra el contenido horizontalmente
              height: "auto", // Establece la altura automática para el formulario
              display: "flex", // Permite que los elementos se distribuyan verticalmente
              flexDirection: "column", // Coloca los elementos en una columna
              justifyContent: "space-between", // Distribuye los elementos de manera uniforme
              alignItems: "center", // Centra los elementos horizontalmente
              position: "relative", // Ajusta el z-index para que esté por encima del fondo
              zIndex: 1, // Asegura que esté por encima del fondo
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              style={{
                color: "#f5f7fa",
                zIndex: 1,
                width: "100%", // Asegura que el ancho sea del 100% para dispositivos pequeños
              }}
            >
              Explora tu ciudad, Muévete por{" "}
              <span style={{ fontWeight: "bold", color: "#d3dbe4" }}>
                Tijuana
              </span>
            </Typography>
          </div>

          <div
            style={{
              background: "#161b22",
              borderRadius: "13px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.9)",
              padding: "35px",
              width: "auto", // Asegura que el ancho sea del 100% para dispositivos pequeños
              maxWidth: "650px", // Limita el ancho máximo para pantallas más grandes
              margin: "auto", // Centra el contenido horizontalmente
              height: "auto", // Establece la altura automática para el formulario
              display: "flex", // Permite que los elementos se distribuyan verticalmente
              flexDirection: "column", // Coloca los elementos en una columna
              justifyContent: "space-between", // Distribuye los elementos de manera uniforme
              alignItems: "center", // Centra los elementos horizontalmente
              position: "relative", // Ajusta el z-index para que esté por encima del fondo
              zIndex: 1, // Asegura que esté por encima del fondo
            }}
          >
            <form
              noValidate
              style={{
                width: "100%",
                color: "#fff",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    id="origin-address-input"
                    freeSolo
                    options={searchOptions}
                    value={userAddress}
                    onChange={(event, newValue) =>
                      handleAddressSelect(newValue)
                    }
                    onInputChange={(event, newInputValue) =>
                      handleAddressSearch(newInputValue, "origin")
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Origen"
                        margin="normal"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Obtener ubicación"
                                edge="end"
                                onClick={getUserLocation}
                                disabled={fetchingLocation}
                              >
                                {fetchingLocation ? (
                                  <CircularProgress size={24} />
                                ) : (
                                  <Room style={{ color: "white" }} />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                          startAdornment: (
                            <InputAdornment position="start"></InputAdornment>
                          ),
                        }}
                        sx={{
                          input: { color: "white" },
                          "& .MuiInputLabel-root": {
                            color: "#354557",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fff",
                          },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#354557",
                            },
                            "&:hover fieldset": {
                              borderColor: "#4a637f",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#4a637f",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    id="search-address-input"
                    freeSolo
                    options={destinationSearchOptions}
                    value={selectedAddress}
                    onChange={(event, newValue) => setSelectedAddress(newValue)}
                    onInputChange={(event, newInputValue) =>
                      handleDestinationSearch(newInputValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Buscar dirección"
                        margin="normal"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                        sx={{
                          input: { color: "white" },
                          "& .MuiInputLabel-root": {
                            color: "#354557", // Cambia el color de la etiqueta
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fff", // Cambia el color de la etiqueta cuando está enfocada
                          },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#354557", // Cambia el color del borde del TextField
                            },
                            "&:hover fieldset": {
                              borderColor: "#4a637f", // Cambia el color del borde al pasar el cursor
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#4a637f", // Cambia el color del borde cuando está enfocado
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "#5e7c99",
                      "&:hover": {
                        backgroundColor: "#4a637f",
                      },
                      "&:active": {
                        backgroundColor: "#3d5067",
                      },
                      height: "40px",
                    }}
                    onClick={handleSubmit} // Llama a la función handleSubmit al hacer clic
                  >
                    Encontrar Rutas
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
