import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import NotFound from "../pages/NotFound";
import OurTeam from "../pages/OurTeam";
import SingIn from "../pages/SingIn";

export const publicRoutes = [
  { path: "/", name: "Home", Comment: Home },
  { path: "/services", name: "Services", Comment: Services },
  { path: "/dashboard", name: "Dashboard", Comment: Dashboard },
  { path: "/about", name: "About", Comment: About },
  { path: "our-team", name: "OurTeam", Comment: OurTeam },
  { path: "contact-us", name: "ContactUs", Comment: ContactUs },
  { path: "sign-in", name: "SignIn", Comment: SingIn },
  { path: "*", name: "NotFound", Comment: NotFound },
];