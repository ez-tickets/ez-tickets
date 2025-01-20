import Home from "@/screen/home/Home.tsx";
import ProductDetail from "@/screen/productDetail/ProductDetail.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@/global.css.ts";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "@/screen/OrderConfirmation/OrderConfirmation.tsx";

// biome-ignore lint: @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MemoryRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>,
);
