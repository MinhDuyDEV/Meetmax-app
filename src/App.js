import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import LayoutAuthentication from "./layouts/LayoutAuthentication";
import CheckEmailPage from "./pages/authPages/CheckEmailPage";
import ForgotPasswordPage from "./pages/authPages/ForgotPasswordPage";
import SignInPage from "./pages/authPages/SignInPage";
import SignUpPage from "./pages/authPages/SignUpPage";
// import { lazy, Suspense } from "react";

// const SignUpPage = lazy(() => import("./pages/authPages/SignUpPage"));

const App = () => {
  return (
    <div>
      {/* <Suspense> */}
      <AuthProvider>
        <Routes>
          <Route element={<LayoutAuthentication></LayoutAuthentication>}>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route
              path="/forgot-password"
              element={<ForgotPasswordPage></ForgotPasswordPage>}
            ></Route>
            <Route
              path="/check-email"
              element={<CheckEmailPage></CheckEmailPage>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
      {/* </Suspense> */}
    </div>
  );
};

export default App;
