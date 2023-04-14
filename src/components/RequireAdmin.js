import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";
import useAdmin from "../hooks/useAdmin";
import Loading from "./Loading";

const RequireAdmin = ({children}) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [signOut, signOutLoading] = useSignOut(auth);
  const location = useLocation();
  if (loading || adminLoading ||signOutLoading ) {
    return <Loading />;
  }
  if (!user || !admin) {
    signOut();
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
 
  return children;
};

export default RequireAdmin;
