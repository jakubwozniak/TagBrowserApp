import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeManager from "./themeManager";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeManager>
      <App />
    </ThemeManager>
  </Provider>
);

//reportWebVitals(console.log);
