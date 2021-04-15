import "./App.css";
import { Proverbs } from "./pages/proverbs/Proverbs";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState();

  return (
    <div className="App">
      <Header onSearch={(q) => setQuery(q)} />
      <Proverbs searchQuery={query} />
      <Footer />
    </div>
  );
}

export default App;
