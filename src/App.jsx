import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page-login/Login";
import DashboardLayout from "./DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import NavbarPage from "./pages/NavbarPage";
import SliderPage from "./pages/SliderPage";
import SectionPage from "./pages/SectionPage";
import UserAndPermissionPage from "./pages/UserAndPermissionPage";
import NotificationsPage from "./pages/NotificationsPage";
import CategoriesPage from "./pages/CategoriesPage";
import NewProduct from "./page-product/NewProduct";
import View from "./page-product/View";
import Inventory from "./page-product/Inventory";
import Category from "./page-product/Category";

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
          <Route path="/customize/category" element={<CategoriesPage/>}/>

          <Route path="/products/add-product" element={<NewProduct/>}/>
          <Route path="/products/view-products" element={<View/>}/>
          <Route path="/products/inventory" element={<Inventory/>}/>
          <Route path="/products/categories" element={<Category/>}/>
          <Route path="/userandpermission" element={<UserAndPermissionPage/>}/>
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/customize/sliders" element={<SlidersPage />} /> */
}
