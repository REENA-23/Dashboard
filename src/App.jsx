import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page-login/Login";
import DashboardLayout from "./DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import NavbarPage from "./pages/NavbarPage";
import SliderPage from "./pages/SliderPage";
import SectionPage from "./pages/SectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First page */}
        <Route path="/" element={<Login />} />

        {/* All pages with sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/customize/navbar" element={<NavbarPage />} />
          <Route path="/customize/sliders" element={<SliderPage/>}/>
          <Route path="/customize/sections" element={<SectionPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/customize/sliders" element={<SlidersPage />} /> */
}
