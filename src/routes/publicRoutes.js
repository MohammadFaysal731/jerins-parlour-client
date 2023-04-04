import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import NotFound from "../pages/NotFound";
import OurTeam from "../pages/OurTeam";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

export const publicRoutes = [
  { path: "/", name: "Home", Comment: Home },
  { path: "/services", name: "Services", Comment: Services },
  { path: "/our-team", name: "OurTeam", Comment: OurTeam },
  { path: "/contact-us", name: "ContactUs", Comment: ContactUs },
  { path: "/sign-in", name: "SignIn", Comment: SingIn },
  { path: "/sing-up", name: "Signup", Comment: SingUp },
  { path: "*", name: "NotFound", Comment: NotFound },
];