import { AiOutlinePlus, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
export const dashboardData = [
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
  {
    id: 4,
    name: "All order list",
    icons: <BsCreditCard2Back />,
    link: "/dashboard/all-order-list",
  },
  {
    id: 5,
    name: "Add service",
    icons: <AiOutlinePlus />,
    link: "/dashboard/add-service",
  },
  {
    id: 6,
    name: "All users",
    icons: <AiOutlineUsergroupAdd />,
    link: "/dashboard/all-users",
  },
  {
    id: 7,
    name: "Manage service",
    icons: <CgMenuGridR />,
    link: "/dashboard/manage-service",
  },
];
