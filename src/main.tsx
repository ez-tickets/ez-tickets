import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screen/Home.tsx";
import MenuDetail from "./screen/MenuDetail.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/MenuDetail' element={<MenuDetail />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
