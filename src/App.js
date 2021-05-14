import "./App.css";
import { Proverbs } from "./pages/proverbs/Proverbs";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useEffect, useState } from "react";
import * as api from "./services/db-service";

function App() {
  const [isSearching, setSearching] = useState(true);
  const [query, setQuery] = useState();
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    api.initializeFirebase();
    api.fetchProverbs(() => setProverbs(api.queryProverbs()));
  }, []);

  useEffect(() => {
    setProverbs(api.queryProverbs(query));
    setSearching(false);
  }, [query]);

  return (
    <div className="App">
      <Header onSearch={(q) => setQuery(q)} searching={isSearching} />
      <Proverbs proverbs={proverbs} />
      <Footer />
    </div>
  );
}

export default App;
