import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchRoutes({ stops, routes, onSearch }) {
  const handleRouteChange = (event, newValue) => {
    onSearch(newValue, newValue);
  };

  return (
    <Autocomplete
      style={{ marginBottom: "26px" }}
      id="search-route-input"
      freeSolo
      options={stops}
      onChange={handleRouteChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar por puntos de ruta"
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
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
  );
}
