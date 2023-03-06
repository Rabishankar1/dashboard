import { createBrowserRouter } from "react-router-dom";
import Boilerplate from "./pages/boilerplate/boilerplate";
import Dashboard from "./pages/dashboard/dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        // loader: rootLoader,
        // children: [
        //   {
        //     path: "boilerplate",
        //     element: <Boilerplate />,
        //     // loader: teamLoader,
        //   },
        // ],
    },
    {
        path: "boilerplate",
        element: <Boilerplate />,
        // loader: teamLoader,
    }
]);