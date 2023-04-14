import AddService from "../pages/Dashboard/AddService";
import AllOrderList from "../pages/Dashboard/AllOrderList";
import AllUsers from "../pages/Dashboard/AllUsers";
import ManageServices from "../pages/Dashboard/ManageServices";

export const dashboardAdminRoutes = [
  {
    path: "/dashboard/all-order-list",
    name: "All Order List",
    Comment: AllOrderList,
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
