import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Prova() {
  const [provaState, setProvaState] = useState({ text: "Benventuo" });

  const navigate = useNavigate();

  function handleChange(event) {
    setProvaState({ text: event.target.value });
  }

  function navigazione() {
    navigate("/mouse");
  }
  return (
    <Grid align="center" marginTop={30}>
      <TextField
        label="scrivi qui per cambiare lo stato"
        onChange={handleChange}
      />
      <Typography>{provaState.text} </Typography>

      <Button variant="contained" onClick={navigazione}>
        Click for change to next exercise
      </Button>
    </Grid>
  );
}
