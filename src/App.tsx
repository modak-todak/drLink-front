import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountProvider } from "./contexts/AccountContext";

import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import {
  COMPONENTS_ROUTER_CONFIGS,
  CONSULTATION_ROUTER_CONFIGS,
  RECORDS_ROUTER_CONFIGS,
  ROUTER_CONFIGS,
} from "./router";

function App() {
  return (
    <AccountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {ROUTER_CONFIGS.map((configs) => (
              <Route {...configs} />
            ))}
            <Route path="/consultation">
              {CONSULTATION_ROUTER_CONFIGS.map((configs) => (
                <Route {...configs} />
              ))}
            </Route>
            <Route path="/components">
              {COMPONENTS_ROUTER_CONFIGS.map((configs) => (
                <Route {...configs} />
              ))}
            </Route>

            <Route path="/records">
              {RECORDS_ROUTER_CONFIGS.map((configs) => (
                <Route {...configs} />
              ))}
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AccountProvider>
  );
}

export default App;
