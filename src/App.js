import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/RequireAuth";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { dashboardRoute } from "./routes/dahboardRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {

  return (
    <div className="select-none">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* public routes */}
          {publicRoutes?.map(({ path, Comment }, index) => (
            <Route path={path} element={<Comment />} key={index} />
          ))}
          {/* private routes */}
          <Route element={<RequireAuth />}>
            {privateRoutes?.map(({ path, Comment }, index) => (
              <Route path={path} element={<Comment />} key={index} />
            ))}
          </Route>
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          {/* dashboard rotes */}
          {dashboardRoute?.map(({ path, Comment }, index) => (
            <Route path={path} element={<Comment />} key={index}/>
          ))}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
