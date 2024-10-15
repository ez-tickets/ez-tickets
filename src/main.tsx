import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screen/Home.tsx";
import MenuDetail from "./screen/MenuDetail.tsx";
import Options from "./screen/Options.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/MenuDetail' element={<MenuDetail/>} />
              <Route path='/Options' element={<Options/>}></Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
