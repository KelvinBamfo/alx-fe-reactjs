import { useState, useEffect } from "react";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Simulated check: look at localStorage
    const authStatus = localStorage.getItem("auth") === "true";
    setAuthenticated(authStatus);
  }, []);

  return { authenticated };
};
