import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeManager from "./themeManager";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./App";
import ErrorBoundary from "./utils/ErrorBoundary";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeManager>
      <ErrorBoundary fallback="Something went wrong.">
        <App />
      </ErrorBoundary>
    </ThemeManager>
  </Provider>
);

//reportWebVitals(console.log);
