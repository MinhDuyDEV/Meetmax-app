import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import LayoutAuthentication from "./layouts/LayoutAuthentication";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Followers from "./modules/community/Followers";
import Following from "./modules/community/Following";
import Suggest from "./modules/community/Suggest";
import ExploreAddNew from "./modules/explore/ExploreAddNew";
import ExploreView from "./modules/explore/ExploreView";
import CheckEmailPage from "./pages/authPages/CheckEmailPage";
import ForgotPasswordPage from "./pages/authPages/ForgotPasswordPage";
import SignInPage from "./pages/authPages/SignInPage";
import SignUpPage from "./pages/authPages/SignUpPage";
import CommunityPage from "./pages/dashboard_page/CommunityPage";
import ExplorePage from "./pages/dashboard_page/ExplorePage";
import FeedPage from "./pages/dashboard_page/FeedPage";
import MassagePage from "./pages/dashboard_page/MassagePage";
import NotificationPage from "./pages/dashboard_page/NotificationPage";
import ProfilePage from "./pages/dashboard_page/ProfilePage";
import SettingPage from "./pages/dashboard_page/SettingPage";
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
          <Route element={<LayoutDashboard></LayoutDashboard>}>
            <Route element={<ExplorePage></ExplorePage>}>
              <Route
                path="/explore/add-new"
                element={<ExploreAddNew></ExploreAddNew>}
              ></Route>
            </Route>
            <Route path="/" element={<FeedPage></FeedPage>}></Route>
            <Route path="/community" element={<CommunityPage></CommunityPage>}>
              <Route
                path="/community/followers"
                element={<Followers></Followers>}
              ></Route>
              <Route
                path="/community/following"
                element={<Following></Following>}
              ></Route>
              <Route
                path="/community/suggest"
                element={<Suggest></Suggest>}
              ></Route>
            </Route>
            <Route
              path="/message"
              element={<MassagePage></MassagePage>}
            ></Route>
            <Route
              path="/notification"
              element={<NotificationPage></NotificationPage>}
            ></Route>
            <Route path="/explore" element={<ExplorePage></ExplorePage>}>
              <Route
                path="/explore"
                element={<ExploreView></ExploreView>}
              ></Route>
              <Route
                path="./add-new"
                element={<ExploreAddNew></ExploreAddNew>}
              ></Route>
            </Route>
            <Route
              path="/profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
            <Route
              path="/setting"
              element={<SettingPage></SettingPage>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
      {/* </Suspense> */}
    </div>
  );
};

export default App;
