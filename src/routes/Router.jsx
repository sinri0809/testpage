import { Routes, Route, Navigate } from "react-router-dom"

// import PageIndex from "pages/PageIndex";
import PageSearch from "pages/PageSearch";
import PageHome from "pages/PageHome";
import PageSetLanguage from "pages/PageSetLanguage";
import TempPage from "pages/TempPage";
import Loading from "components/layout/Loading";

export const Router = () => {
  return <Routes>
    <Route path="*" element={<Navigate replace to="/set_language" />} />
    <Route path="/set_language" element={<PageSetLanguage />} />
    <Route path="/loading_to_home" element={<Loading loadingTime={2000} />} />
    <Route path="/home" element={<PageHome />} />
    <Route path="/search" element={<PageSearch />} />

    <Route path="/guide" element={<TempPage label="guide" />} />
  </Routes>
}