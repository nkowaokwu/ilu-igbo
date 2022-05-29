import { useEffect, useState } from "react";
import { ThemeProvider, Fab } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import { Proverbs } from "./pages/proverbs/Proverbs";
import { Header, Footer, ProverbAddFormDialog } from "./components";
import { theme } from "./theme";
import * as api from "./services/db-service";
import ProverbsJson from "./pages/proverbs-json/proverbs-json";

function App() {
  const [isSearching, setSearching] = useState(true);
  const [query, setQuery] = useState();
  const [proverbs, setProverbs] = useState([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    api.initializeFirebase();
    api.fetchProverbs(() => {
      const proverbs = api.queryProverbs()
      setProverbs(proverbs);
      setTotalCount(proverbs.length);
    });
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

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <div className="d-flex flex-column min-vh-100">
            <Header
              onSearch={(q) => setQuery(q)}
              searching={isSearching}
              count={proverbs?.length}
              totalCount={totalCount}
              setQuery={setQuery}
              query={query}
            />

            <main className="flex-grow-1">
              <Switch>
                <Route path="/batch-upload">
                  <ProverbsJson />
                </Route>
                <Route path="/">
                  <Proverbs proverbs={proverbs} />
                </Route>
              </Switch>
              <Fab onClick={handleDialogOpen} color="primary" className="fab">
                <FontAwesomeIcon icon={faPlus} />
              </Fab>
            </main>

            <Footer />

            {/* add-new-proverb form dialog */}
            {addDialogOpen && <ProverbAddFormDialog handleClose={handleDialogClose}></ProverbAddFormDialog>}
          </div>
        </ThemeProvider>
      </Router>{" "}
    </div>
  );
}

export default App;
