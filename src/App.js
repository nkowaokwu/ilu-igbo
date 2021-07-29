import { useEffect, useState } from "react";
import { ThemeProvider, Fab } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Proverbs } from "./pages/proverbs/Proverbs";
import { Header, Footer, ProverbAddFormDialog } from "./components";
import { theme } from "./theme";
import * as api from "./services/db-service";

function App() {
  const [isSearching, setSearching] = useState(true);
  const [query, setQuery] = useState();
  const [proverbs, setProverbs] = useState([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [isCreating, setCreating] = useState(false);

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

  function handleProverbCreateEnd(res) {
    setCreating(false);
    console.log("response from proverb create:", res);
  }

  function handleAddProverb(prov) {
    console.log("tried adding proverb", prov);
    api.createProverb(prov, handleProverbCreateEnd);
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
          <ProverbAddFormDialog
            handleSubmit={handleAddProverb}
            handleClose={handleDialogClose}
            isOpen={addDialogOpen}
          ></ProverbAddFormDialog>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
