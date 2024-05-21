import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ExploreVans } from "./pages/vans/ExploreVans";
import { VanDetail } from "./pages/vans/VanDetail";
import { Layout } from "./components/Layout";
import { Income } from "./pages/host/Income";
import { Reviews } from "./pages/host/Reviews";
import { Dashboard } from "./pages/host/Dashboard";
import { HostLayout } from "./pages/host/HostLayout";
import { HostVans } from "./pages/host/HostVans";
import { HostVanDetail } from "./pages/host/HostVanDetail";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<ExploreVans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans/>}/>
              <Route path="vans/:id" element={<HostVanDetail/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
