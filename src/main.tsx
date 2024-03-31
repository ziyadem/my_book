// Import Libraries
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Import Styles
import "./style/index.css";

// Import App
import App from "./App.tsx";

// Import Store
import { store } from "./store/index.ts";

// Import Notistack
import { SnackbarProvider } from "notistack";

// Import MUI
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(
  document.getElementById("my_book") as HTMLDivElement
).render(
  <BrowserRouter>
    <StyledEngineProvider>
      <Provider store={store}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </Provider>
    </StyledEngineProvider>
  </BrowserRouter>
);
