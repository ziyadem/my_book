// Import Libraries
import { Navigate } from "react-router-dom";

// Import Layout
import Layout from "../layout";

interface CustomProps {
  roles: string[];
  component: () => JSX.Element;
}

const Private = ({ component, roles }: CustomProps) => {
  const ac = localStorage.getItem("ac");
  const re = localStorage.getItem("re");
  const role = localStorage.getItem("role");

  if (ac && re && role) {
    return roles?.includes(role.toString().toLocaleUpperCase()) ? (
      <Layout component={component} />
    ) : null;
  }
  return <Navigate to="/sign-in" replace />;
};

export default Private;
