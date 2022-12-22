import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function Mouse() {
  return (
    <Grid align="center" marginTop={30}>
      <Card sx={{ width: 375, background: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Mouse Tracking
          </Typography>

          <Typography variant="h5" component="div">
            <div>
              le coordinate sono:
              <br />
              X:
              <br />
              Y:
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
