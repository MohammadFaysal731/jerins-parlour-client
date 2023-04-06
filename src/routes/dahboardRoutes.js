import AddReview from "../pages/Dashboard/AddReview";
import AddService from "../pages/Dashboard/AddService";
import MakeAdmin from "../pages/Dashboard/MakeAdmin";
import ManageServices from "../pages/Dashboard/ManageServices";
import MyBooking from "../pages/Dashboard/MyBooking";
import MyBookingList from "../pages/Dashboard/MyBookingListStatus";
import OrderList from "../pages/Dashboard/OrderList";

export const dashboardRoute =[
  {path:"/dashboard/my-booking",name:"My Booking",Comment:MyBooking},
  {path:"/dashboard/my-booking-status",name:"My Booking Status",Comment:MyBookingList},
  {path:"/dashboard/add-review",name:"Add Review",Comment:AddReview },
  {path:"/dashboard/order-list",name:"Order List",Comment:OrderList},
  {path:"/dashboard/add-service",name:"Add Service",Comment:AddService},
  {path:"/dashboard/make-admin",name:"Make Admin",Comment:MakeAdmin},
  {path:"/dashboard/manage-service",name:"Manage Services",Comment:ManageServices},
]