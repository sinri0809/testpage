import { Routes, Route } from "react-router-dom"

import PageIndex from "pages/PageIndex";
import PageHome from "pages/PageHome";
import PageSetLanguage from "pages/PageSetLanguage";
import TempPage from "pages/TempPage";

export const Router = () => {
  return <Routes>
    <Route path="/" element={<PageIndex />} />
    <Route path={"/home"} element={<PageHome />} />
    <Route path="/set_language" element={<PageSetLanguage />} />
    <Route path="/guide" element={<TempPage label="guide" />} />
  </Routes>
}