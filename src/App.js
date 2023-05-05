import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RequireAdmin from "./components/RequireAdmin";
import RequireAuth from "./components/RequireAuth";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { dashboardAdminRoutes } from "./routes/dashboardAdminRoutes";
import { dashboardPublicRoutes } from "./routes/dashboardPublicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <div className="select-none">
      <Routes>
        {/* ManLayout Start */}
        <Route path="/" element={<MainLayout />}>
          {/* public routes */}
          {publicRoutes?.map(({path,Comment},index) => (
            <Route
              path={path}
              element={<Comment />}
              key={index}
            />
          ))}
          {/* private routes */}
          {privateRoutes?.map(({path,Comment},index) => (
            <Route
              path={path}
              element={
                <RequireAuth>
                  <Comment />
                </RequireAuth>
              }
              key={index}
            />
          ))}
        </Route>
        {/* MainLayout End  */}
        {/* Dashboard  Start*/}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* dashboard public rotes */}
          {dashboardPublicRoutes?.map(({path,Comment},index) => (
            <Route
              path={path}
              element={
                <RequireAuth>
                  <Comment />
                </RequireAuth>
              }
              key={index}
            />
          ))}
          {/* dashboard admin routes */}
          {dashboardAdminRoutes?.map(({path,Comment},index) => (
            <Route
              path={path}
              element={
                <RequireAdmin>
                  <Comment />
                </RequireAdmin>
              }
              key={index}
            />
          ))}
        </Route>
        {/* Dashboard  end*/}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
