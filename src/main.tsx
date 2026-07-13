import "flowbite";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/react";
import { Toaster } from "sonner";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            borderRadius: "12px",
            fontFamily: "inherit",
          },
        }}
      />
    </ClerkProvider>
  </StrictMode>,
);
