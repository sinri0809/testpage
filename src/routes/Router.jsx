import { Routes, Route } from "react-router-dom"

import PageIndex from "pages/PageIndex";
import PageHome from "pages/PageHome";
import PageSetLanguage from "pages/PageSetLanguage";

export const Router = () => {
  return <Routes>
    <Route path="/" element={<PageIndex />} />
    <Route path={"/home"} element={<PageHome />} />
    <Route path="/set_language" element={<PageSetLanguage />} />
  </Routes>
}