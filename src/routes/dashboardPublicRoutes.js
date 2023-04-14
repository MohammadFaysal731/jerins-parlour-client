import AddReview from "../pages/Dashboard/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking";
import MyBookingList from "../pages/Dashboard/MyBookingListStatus";

export const dashboardPublicRoutes =[
  {path:"/dashboard/my-booking",name:"My Booking",Comment:MyBooking},
  {path:"/dashboard/my-booking-status",name:"My Booking Status",Comment:MyBookingList},
  {path:"/dashboard/add-review",name:"Add Review",Comment:AddReview },
]