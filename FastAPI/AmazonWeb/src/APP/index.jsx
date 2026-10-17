import { Toaster } from "react-hot-toast";

import AppProvider from "./Provider";
import AppRoutes from "./Routes";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      <Toaster position="top-right" />
    </AppProvider>
  );
}

export default App;