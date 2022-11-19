import { useState } from "react";
import { Link } from "react-router-dom";

import { IconSearch } from "components/icon/Icons";

import Sidebar from "components/Sidebar";
import logo from 'assets/logo/logo_text.svg'

const Header = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onClickAppDrawer = () => (e) => {
    setIsSidebarOpen(true);
  };

  const onClickSearchDrawer = () => {
    const searchPage = document.querySelector(".search-form");
    searchPage.style.right = "0";
  }

  return <header className="header">
    <div className="header-wrap">
      <div className="btn-wrap">
        <Link to={'/home'} className="btn btn-go-home"><IconHome /></Link>
      </div>
      <div className="btn-tools-wrap">
        <div className="btn-wrap">
          <button className="btn"
            onClick={onClickSearchDrawer}
          >
            <IconSearch />
          </button>
        </div>
        <div className="btn-wrap">
          <button type="button" className="btn btn-app-drawer" onClick={onClickAppDrawer()}>
            <IconSideBar />
          </button>
        </div>
      </div>
    </div>
    <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
    {children}
  </header>
};

export default Header;

const IconHome = () => {
  return <img src={logo} alt="" />
};

const IconSideBar = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="3" fill="#555555" />
    <rect x="9" y="11" width="11" height="3" fill="#555555" />
    <rect x="4" y="18" width="16" height="3" fill="#555555" />
  </svg>
}