const Sidebar = ({ user = null, open, setOpen }) => {
  // const isLogin = user !== null;
  const isLogin = true;

  const onClickClose = () => {
    setOpen(false)
  }
  return <nav className={open ? "sidebar-container open" : "sidebar-container close"}>
    <SidebarShadow onClickClose={onClickClose} />

    <div className="sidebar">
      <SidebarTop onClickClose={onClickClose} />
      <SdiebarBottom>
        <div className="sidebar-user">
          <ul className="user-btn-list">
            <li className="user-item auth">
              {isLogin ?
                <button className="btn">반갑습니다!</button>
                :
                <button className="btn">더 정교한 덕질을 위해...</button>
              }
            </li>
            <li className="user-item language"><button className="btn">{"한국어"}</button></li>
            {isLogin &&
              <li className="user-item"><button className="btn">구매내역</button></li>
            }
          </ul>
        </div>

        <div className="sidebar-pages">
          <ul className="pages-btn-list">
            <li className="page-item"><button className="btn">오리지널</button></li>
            <li className="page-item"><button className="btn">콘서트</button></li>
            <li className="page-item"><button className="btn">투표</button></li>
            <li className="page-item"><button className="btn">예능</button></li>
            <li className="page-item"><button className="btn">추천영상</button></li>
          </ul>
        </div>

        <div className="sidebar-notice">
          <ul className="notice-btn-list">
            <li className="notice-item"><button className="btn">공지사항</button></li>
            <li className="notice-item"><button className="btn">이벤트</button></li>
          </ul>
        </div>

        <div className="sidebar-customer">
          <ul className="customer-btn-list">
            <li className="customer-item"><button className="btn">고객센터</button></li>
            <li className="customer-item"><button className="btn">1:1문의</button></li>
            <li className="customer-item"><button className="btn">FAQ</button></li>
          </ul>

          {isLogin &&
            <ul className="customer-btn-list login">
              <li className="customer-item"><button className="btn">마케팅 활용 동의</button></li>
              <li className="customer-item"><button className="btn">서비스 탈퇴</button></li>
            </ul>
          }
        </div>
      </SdiebarBottom>
    </div>
  </nav>
}

export default Sidebar;

const SidebarShadow = ({ onClickClose }) => {
  return <span
    className="sidebar-shadow"
    onClick={onClickClose}
  />
}

const SidebarTop = ({ onClickClose }) => {
  return <div className="sidebar-top">
    <button
      className="btn btn-close"
      onClick={onClickClose}
    >close</button>
  </div>
}

const SdiebarBottom = ({ children }) => {
  return <div className="sidebar-bottom">
    {children}
  </div>
}