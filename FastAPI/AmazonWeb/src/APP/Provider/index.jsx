import { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  // Logged-in user
  const [user, setUser] = useState(null);

  // JWT authentication token
  const [token, setToken] = useState(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;