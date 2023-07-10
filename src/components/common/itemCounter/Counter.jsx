import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function BasicButtons(counter, setCounter) {
  return (
    <Stack spacing={10} direction="row">
      <IconButton onClick={() => setCounter(counter - 1)} aria-label="restar">
        <RemoveIcon />
      </IconButton>
      <h2>{counter}</h2>
      <IconButton onClick={() => setCounter(counter + 1)} aria-label="sumar">
        <AddIcon />
      </IconButton>
      <Button variant="contained">Agregar al Carrito</Button>
    </Stack>
  );
}
