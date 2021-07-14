import { useEffect, useState } from "react";
import { Fab, Input } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import { Proverbs } from "./pages/proverbs/Proverbs";
import { Header, Footer } from "./components";
import { theme } from "./theme";
import * as api from "./services/db-service";

function App() {
  const [isSearching, setSearching] = useState(true);
  const [query, setQuery] = useState();
  const [proverbs, setProverbs] = useState([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  useEffect(() => {
    api.initializeFirebase();
    api.fetchProverbs(() => setProverbs(api.queryProverbs()));
  }, []);

  useEffect(() => {
    setProverbs(api.queryProverbs(query));
    setSearching(false);
  }, [query]);

  function handleDialogOpen() {
    setAddDialogOpen(true);
  }

  function handleDialogClose() {
    setAddDialogOpen(false);
  }

  function handleAddProverb() {
    console.log("tried adding proverb");
    handleDialogClose();
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="d-flex flex-column min-vh-100">
          <Header
            onSearch={(q) => setQuery(q)}
            searching={isSearching}
            count={proverbs?.length}
          />
          <Proverbs proverbs={proverbs} className="flex-grow-1" />
          <Fab onClick={handleDialogOpen} color="primary" className="fab">
            <FontAwesomeIcon icon={faPlus} />
          </Fab>
          <Footer />

          {/* add-new-proverb form dialog */}
          <Dialog
            open={addDialogOpen}
            onClose={handleDialogClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="add-form-dialog-title">
              Add New Proverb
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                fields marked * are required
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="text"
                label="proverb in igbo"
                type="text"
                fullWidth
                required
              />
              <TextField
                margin="dense"
                id="literalTranslation"
                label="literal translation"
                type="text"
                fullWidth
                required
              />
              <TextField
                margin="dense"
                id="meaning"
                label="actual meaning"
                type="text"
                fullWidth
                required
              />
              <TextField
                margin="dense"
                id="moreInfo"
                label="more information: examples, background etc..."
                type="text"
                fullWidth
              />
              {/* TODO accept only audio files */}
              <Input
                margin="dense"
                id="audio"
                label="audio file"
                type="file"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleAddProverb}>Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
