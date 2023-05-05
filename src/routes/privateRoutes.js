import About from "../pages/About";
import ServiceDetail from "../pages/Home/Services/ServiceDetail";

export const privateRoutes = [

  {path: "/services/:id", name: "ServiceDetail", Comment: ServiceDetail },
  {path: "/about", name: "About", Comment: About },
  
];
