import { AiOutlinePlus, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
export const dashboardAdminData = [
  {
    id: 1,
    name: "All booking list",
    icons: <BsCreditCard2Back />,
    link: "/dashboard/all-booking-list",
  },
  {
    id: 2,
    name: "Add service",
    icons: <AiOutlinePlus />,
    link: "/dashboard/add-service",
  },
  {
    id: 3,
    name: "All users",
    icons: <AiOutlineUsergroupAdd />,
    link: "/dashboard/all-users",
  },
  {
    id: 4,
    name: "Manage service",
    icons: <CgMenuGridR />,
    link: "/dashboard/manage-service",
  },
];
