import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styles from "./style";
export default () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const classes = styles();
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleClearTextClick = (event) => {
    setSearchText("");
  };
  const handleSearchTextClick = (event) => {
    history.push(`/result?movieName=${searchText}`);
  };
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <label>icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          className={classes.textFieldSearch}
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleClearTextClick}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
