// Import Pages
import Home from "../pages/home";

// Import 
import { SUPER_ADMIN } from "../utils/constants";

export const routes = [
  {
    path: "/",
    component: Home,
    roles: [SUPER_ADMIN],
  },
];
