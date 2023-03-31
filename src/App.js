import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header.js/Header";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <div className="select-none">
    <Header />
     <Routes>
      {publicRoutes?.map(({path, Comment},index)=>(
        <Route path={path}element={<Comment/>}></Route>
      ))}
     </Routes>
      <Footer/>
    </div>
  );
}

export default App;
