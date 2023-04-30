import AddService from "../pages/Dashboard/AdminPages/AddService";
import AllBookingList from "../pages/Dashboard/AdminPages/AllBookingList/AllBookingList";
import AllUsers from "../pages/Dashboard/AdminPages/AllUser/AllUsers";
import ManageServices from "../pages/Dashboard/AdminPages/ManageService/ManageServices";

export const dashboardAdminRoutes = [
  {
    path: "/dashboard/all-booking-list",
    name: "All Booking List",
    Comment: AllBookingList,
  },
  {
    path: "/dashboard/add-service",
    name: "Add Service",
    Comment: AddService,
  },
  {
    path: "/dashboard/all-users",
    name: "All Users",
    Comment: AllUsers,
  },
  {
    path: "/dashboard/manage-service",
    name: "Manage Services",
    Comment: ManageServices,
  },
];
