import AddReview from "../pages/Dashboard/PublicePages/AddReview";
import MyBooking from "../pages/Dashboard/PublicePages/MyBooking";
import MyBookingList from "../pages/Dashboard/PublicePages/MyBookingListStatus";
import Payment from "../pages/Dashboard/PublicePages/Payment";

export const dashboardPublicRoutes =[
  {path:"/dashboard/my-booking",name:"My Booking",Comment:MyBooking},
  {path:"/dashboard/my-booking-status",name:"My Booking Status",Comment:MyBookingList},
  {path:"/dashboard/add-review",name:"Add Review",Comment:AddReview },
  {path:"/dashboard/payment/:id",name:"Payment",Comment:Payment },
]