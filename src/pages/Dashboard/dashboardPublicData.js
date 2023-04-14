import { BiMessage } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
export const dashboardPublicData = [
  {
    id: 1,
    name: "My booking",
    icons: <FiShoppingCart />,
    link: "/dashboard/my-booking",
  },
  {
    id: 2,
    name: "My booking status",
    icons: <BsCreditCard2Back />,
    link: "/dashboard/my-booking-status",
  },
  {
    id: 3,
    name: "Add review",
    icons: <BiMessage />,
    link: "/dashboard/add-review",
  },
];
