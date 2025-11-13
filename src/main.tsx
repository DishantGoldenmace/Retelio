import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ShopContextProvider from "./components/Context/ShopContext.tsx";
import { AuthProvider } from "./components/Context/AuthContext.tsx";
import { GenderProvider } from "./components/Context/GenderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GenderProvider>
      <AuthProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </AuthProvider>
    </GenderProvider>
  </StrictMode>
);
