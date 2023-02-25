import SignUpPage from "./pages/SignUpPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import LayoutAuthentication from "./layouts/LayoutAuthentication";
import SignInPage from "./pages/SignInPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route element={<LayoutAuthentication></LayoutAuthentication>}>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
