import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeGA4 } from "./lib/analytics";

// Initialize Google Analytics 4 if measurement ID is available
const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
if (measurementId) {
  initializeGA4(measurementId);
}

createRoot(document.getElementById("root")!).render(<App />);
