import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Typography,
  CssBaseline,
  Container,
  Button,
  Grid,
} from "@material-ui/core";
import UseStyles from "./UseStyles.js";

const Home = ({ gtrPlayers }) => {
  const classes = UseStyles();
  const [showing, SetShowing] = useState(true);
  //function is going to pass in the flipped boolean
  //going to set showing to whatever showing in not
  const toggleState = () => {;
    SetShowing(!showing);
  };

  return (
    <div className="top">
      <main>
        <CssBaseline />
        <Button
          className={classes.button}
          variant="contained"
          onClick={toggleState}
        >
          Hide Guitars
        </Button>
        <Container className={classes.container} maxWidth="sm">
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to Guitar Wars!
          </Typography>
        </Container>

        {showing && (
          <div className="showing">
            <Container className={classes.container1} maxWidth="md">
              <Grid
                className={classes.grid1}
                container
                spacing={4}
                justifyContent="center"
              >
                {gtrPlayers.map((gtrPlayer) => (
                  <div className="gtrDiv" key={gtrPlayer.id}>
                    <Link to={`/guitarist-page/${gtrPlayer.id}`}>
                      <h5> {gtrPlayer?.fields.names}</h5>
                    </Link>
                    <img
                      alt={gtrPlayer?.fields.names}
                      src={gtrPlayer?.fields.small}
                    />
                    <h5>Rank: {gtrPlayer?.fields.rank}</h5>
                  </div>
                ))}
              </Grid>
            </Container>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
