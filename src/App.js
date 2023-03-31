import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header.js/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="select-none">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
