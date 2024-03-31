/* eslint-disable @typescript-eslint/no-explicit-any */
// Import libraries
import { v4 } from "uuid";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Import MUI Components
import { Box } from "@mui/material";

// Import Higher-Order Component
const Private = lazy(() => import(`./routes/private`));

// Import Pages and Components
const Loader = lazy(() => import(`./components/loader`));
const SignIn = lazy(() => import(`./pages/auth/sign-in`));
const SignUp = lazy(() => import(`./pages/auth/sign-up`));
const Error404 = lazy(() => import(`./pages/errors/error404`));
const Error500 = lazy(() => import(`./pages/errors/error500`));

// Import Statics
import { routes } from "./routes/routes";

function App() {
  return (
    <Suspense
      fallback={
        <Box className="w-full h-screen flex items-center justify-center">
          <Loader />
        </Box>
      }
    >
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="/*" element={<Error404 />} />

        {/* All private routes */}
        {routes?.map(({ path, roles, component }: any) => (
          <Route
            key={v4()}
            path={path}
            element={<Private roles={roles} component={component} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
