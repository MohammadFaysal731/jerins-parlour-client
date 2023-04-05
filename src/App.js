import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/RequireAuth";
import MainLayout from "./layout/MainLayout";
import BookingList from "./pages/Dashboard/BookingListStatus";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyBooking from "./pages/Dashboard/MyBooking";
import Review from "./pages/Dashboard/AddReview";
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
          <Route path="book" element={<MyBooking />}></Route>
          <Route path="booking-list" element={<BookingList />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
