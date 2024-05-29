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
import { VanDetail } from "./pages/vans/VanDetail";
import { Layout } from "./components/Layout";
import { Income } from "./pages/host/Income";
import { Reviews } from "./pages/host/Reviews";
import { Dashboard } from "./pages/host/Dashboard";
import { HostLayout } from "./pages/host/HostLayout";
import { HostVans, hostVansLoader } from "./pages/host/HostVans";
import { HostVanDetail } from "./pages/host/HostVanDetail";
import {
  HostVanDetailLayout,
  hostVanDetailLoader,
} from "./pages/host/HostVanDetailLayout";
import { HostVanDetailPricing } from "./pages/host/HostVanDetailPricing";
import { HostVanDetailPhotos } from "./pages/host/HostVanDetailPhotos";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/Register";
import { Profile, profileLoader } from "./pages/user/Profile";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="profile"
        element={<Profile />}
        loader={profileLoader}
      />
      <Route path="about" element={<About />}
      />
      <Route
        path="vans"
        element={<ExploreVans />}
        loader={vanLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="host/:hostId" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:vanId"
          element={<HostVanDetailLayout />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanDetail />} />
          <Route path="pricing" element={<HostVanDetailPricing />} />
          <Route path="photos" element={<HostVanDetailPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
