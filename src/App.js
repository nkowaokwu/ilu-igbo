import "./App.css";
import { Proverbs } from "./pages/proverbs/Proverbs";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

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
