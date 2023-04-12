import AddReview from "../pages/Dashboard/AddReview";
import AddService from "../pages/Dashboard/AddService";
import AllOrderList from "../pages/Dashboard/AllOrderList";
import AllUsers from "../pages/Dashboard/AllUsers";
import ManageServices from "../pages/Dashboard/ManageServices";
import MyBooking from "../pages/Dashboard/MyBooking";
import MyBookingList from "../pages/Dashboard/MyBookingListStatus";

export const dashboardRoute =[
  {path:"/dashboard/my-booking",name:"My Booking",Comment:MyBooking},
  {path:"/dashboard/my-booking-status",name:"My Booking Status",Comment:MyBookingList},
  {path:"/dashboard/add-review",name:"Add Review",Comment:AddReview },
  {path:"/dashboard/all-order-list",name:"All Order List",Comment:AllOrderList},
  {path:"/dashboard/add-service",name:"Add Service",Comment:AddService},
  {path:"/dashboard/all-users",name:"All Users",Comment:AllUsers},
  {path:"/dashboard/manage-service",name:"Manage Services",Comment:ManageServices},
]