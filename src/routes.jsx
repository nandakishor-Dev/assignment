import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Signin } from "./pages/Signin/Signin";

export const appRoutes = [{ path: "/", element: <Signin /> },
{ path: "/dashboard", element: <Dashboard /> }];
