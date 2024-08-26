import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  console.log("test", userId);

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return <Outlet />;
}
export default PrivateLayout;
