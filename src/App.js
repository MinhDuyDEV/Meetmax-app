import SignUpPage from "./pages/SignUpPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import LayoutAuthentication from "./layouts/LayoutAuthentication";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route element={<LayoutAuthentication></LayoutAuthentication>}>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
