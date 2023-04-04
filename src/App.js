import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Book from "./pages/Dashboard/Book";
import BookingList from "./pages/Dashboard/BookingList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Review from "./pages/Dashboard/Review";
import { publicRoutes } from "./routes/publicRoutes";
function App() {
  return (
    <div className="select-none">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {publicRoutes?.map(({path,Comment},index)=>(
            <Route path={path} element={<Comment />} key={index}/>
          ))}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="book" element={<Book />}></Route>
          <Route path="booking-list" element={<BookingList />}></Route>
          <Route path="review" element={<Review />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
