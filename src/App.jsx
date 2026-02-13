import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

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
import Orders from "./page-order/Orders";
import AddOrder from "./page-order/AddOrder";
import Customers from "./page-customers/Customers";
import AddCustomer from "./page-customers/AddCustomer";
import DiscountPage from "./page-discount/DiscountPage";
import AmountProduct from "./page-discount/AmountProduct";
import AmountOrder from "./page-discount/AmountOrder";
import BuyXGetY from "./page-discount/BuyXGetY";
import FreeShip from "./page-discount/FreeShip";
import Review from "./page-coustomize/page-reviews/Review";
import AllReview from "./page-coustomize/page-reviews/AllReview";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* First page */}
        <Route path="/" element={<Login />} />

        {/* All pages with sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/customize/navbar" element={<NavbarPage />} />
          <Route path="/customize/sliders" element={<SliderPage />} />
          <Route path="/customize/sections" element={<SectionPage />} />
          <Route path="/customize/category" element={<CategoriesPage />} />
          <Route path="/customize/review" element={<Review />} />
          <Route path="/allreviewpage" element={<AllReview />} />

          <Route path="/products/add-product" element={<NewProduct />} />
          <Route path="/products/view-products" element={<View />} />
          <Route path="/products/inventory" element={<Inventory />} />
          <Route path="/products/categories" element={<Category />} />

          <Route path="/orders/all-orders" element={<Orders />} />
          <Route path="/add-order" element={<AddOrder />} />

          <Route path="/customers" element={<Customers />} />
          <Route path="/add-customer" element={<AddCustomer />} />

          <Route path="/discounts" element={<DiscountPage />} />
          <Route path="/amountproductpage" element={<AmountProduct />} />
          <Route path="/amountorderpage" element={<AmountOrder />} />
          <Route path="/buyxgetypage" element={<BuyXGetY />} />
          <Route path="/freeshippage" element={<FreeShip />} />

          <Route
            path="/userandpermission"
            element={<UserAndPermissionPage />}
          />
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
