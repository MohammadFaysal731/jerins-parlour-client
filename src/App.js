import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import MainLayout from "./layout/MainLayout";
import Book from "./pages/Dashboard/Book";
import BookingList from "./pages/Dashboard/BookingList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Review from "./pages/Dashboard/Review";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";
import { ToastContainer } from "react-toastify";

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
          <Route path="book" element={<Book />}></Route>
          <Route path="booking-list" element={<BookingList />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
