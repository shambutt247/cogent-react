import MainPage from "../views/Components/MainPage.jsx";
import LP from "../views/LoginPage/LP";

var indexRoutes = [
  { path: "/main-page", name: "MainPage", component: MainPage },
  { path: "/", name: "LP", component: LP }
];

export default indexRoutes;
