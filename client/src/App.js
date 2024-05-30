import "./App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ExploreVans, vanLoader } from "./pages/vans/ExploreVans";
import { VanDetail, vanDetailLoader } from "./pages/vans/VanDetail";
import { Layout } from "./components/Layout";
import { hostIncomeLoader, Income } from "./pages/host/Income";
import { hostReviewsLoader, Reviews } from "./pages/host/Reviews";
import { Dashboard, dashboardLoader } from "./pages/host/Dashboard";
import { HostLayout, hostLayoutLoader, hostLoader } from "./pages/host/HostLayout";
import { HostVans, hostVansLoader } from "./pages/host/HostVans";
import { HostVanDetail } from "./pages/host/HostVanDetail";
import {
  HostVanDetailLayout,
  hostVanDetailLoader,
} from "./pages/host/HostVanDetailLayout";
import { HostVanDetailPricing } from "./pages/host/HostVanDetailPricing";
import { HostVanDetailPhotos } from "./pages/host/HostVanDetailPhotos";
import { PageNotFound } from "./pages/PageNotFound";
import { Login, loginLoader, loginAction } from "./pages/auth/Login";
import { Register } from "./pages/Register";
import { Profile, profileLoader } from "./pages/user/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { requireAuth } from "./utils/auth";
import {useContext} from 'react';
import { UserContext } from "./context/UserContext";

function App() {
  const userContext = useContext(UserContext);
  const routes = createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction(userContext)}
      />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} loader={profileLoader} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<ExploreVans />}
        loader={vanLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />} 
        loader={vanDetailLoader}
        />
      <Route
        path="host/:hostId"
        element={<HostLayout />}
        loader={hostLayoutLoader}
      >
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={hostIncomeLoader}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={hostReviewsLoader}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<ErrorPage/>}
          />
        <Route
          path="vans/:vanId"
          element={<HostVanDetailLayout />}
          loader={hostVanDetailLoader}
          errorElement={<ErrorPage/>}
        >
          <Route
            index
            element={<HostVanDetail />}
            loader={async () => requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanDetailPricing />}
            loader={async () => requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanDetailPhotos />}
            loader={async () => requireAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  );

  const router = createBrowserRouter(routes);
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
