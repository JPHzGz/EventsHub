import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventForm from "../../features/events/form/EventForm";
import EventDetailsPage from "../../features/events/details/EventDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventDashboard />,
      },
      {
        path: "events/:id",
        element: <EventDetailsPage />,
      },
      {
        path: "createEvent",
        element: <EventForm key="create" />,
      },
      {
        path: "manage/:id",
        element: <EventForm key="manage" />,
      },
    ],
  },
]);
