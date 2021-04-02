import "./App.css";
import { Proverbs } from "./pages/proverbs/proverbs";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Proverbs />
      <Footer />
    </div>
  );
}

export default App;
