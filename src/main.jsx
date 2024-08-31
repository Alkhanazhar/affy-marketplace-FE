import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <div className="z-[100]">
      <Toaster />
    </div>
  </Provider>
);
