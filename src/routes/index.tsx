import Home from "../pages/home";
import About from "../pages/about-us";
import Services from "../pages/services";
import Contact from "../pages/contact";
import Soccer from "../pages/365-soccer-program";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/soccer", element: <Soccer /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
