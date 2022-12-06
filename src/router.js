import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ContactsIndex from './pages/contacts';
import ContactForm from './pages/contacts/form';
import MetricsIndex from './pages/metrics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/metrics",
        element: <MetricsIndex />
      },
      {
        path: "/contacts",
        element: <ContactsIndex />
      },
      {
        path: "/contacts/:contactId",
        element: <ContactForm />
      }
    ]
  }
]);

export default router;
