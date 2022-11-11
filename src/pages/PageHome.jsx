import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/layout/Header";
import BannerSlider from "components/BannerSlider";
// import Loading from "components/layout/Loading";
import Popup from "components/Popup";

const PageHome = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isPopup, setIsPopup] = useState(false);
  const [popupShutDown, setPopupshutDown] = useState(false);
  const navigate = useNavigate();
  // const loadingTime = 2000;

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, loadingTime);

  const navigateToPage = (link) => {
    navigate(link);
  };

  const onClickCloseBtn = () => {
    setPopupshutDown(!popupShutDown)
  };

  const onClickIcon = () => {
    if (popupShutDown) {
      setPopupshutDown(!popupShutDown)
    }
  };

  const arrContentsCategories = [
    "latest", "#1", '#2'
  ];

  const onClickMoreBtn = () => (e) => {
    e.stopPropagation();
    const domCategory = document.querySelector('.recommend-category-wrap');
    const isOpen = domCategory.classList.contains("open");

    if (isOpen) {
      domCategory.classList.remove("open")
    } else {
      domCategory.classList.add("open")
    }
  };

  return <div className="view home">
    <Header />
    {/* {isLoading && <Loading loadingTime={loadingTime} />} */}
    <main className="page-content">
      <div className="recommend-category">
        <div className="recommend-category-wrap">
          <ul className="recommend-category-list">
            {
              arrContentsCategories.map((item, index) => {
                return <li key={index}
                  className={"item-category"}
                >
                  <button className="btn">{item}</button>
                </li>
              })
            }
          </ul>
          <div className="btn-wrap">
            <button className="btn btn-more"
              onClick={onClickMoreBtn()}
            >more</button>
          </div>
        </div>
      </div>
      <BannerSlider />
      <section className="contents-container">
        <div className="contents-wrap">
          <div
            className="category focus" // based on scroll  
          >
            <h3>latest</h3>
            <button>more</button>
          </div>
          <div className="contents-list-wrap">
            <ul className="contents-list">
              <li>
                <button>
                  <div className="video-banner"></div>
                  <h4>video title</h4>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contents-container">
        <div className="contents-wrap">
          <div
            className="category focus" // based on scroll  
          >
            <h3>latest</h3>
            <button>more</button>
          </div>
          <div className="contents-list-wrap">
            <ul className="contents-list">
              <li>
                <button>
                  <div className="video-banner"></div>
                  <h4>video title</h4>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <Popup className={popupShutDown ? "set-guide shut-down" : "set-guide"}>
      <Popup.Content>
        <i
          className={`image-icon-guide ${popupShutDown && "btn"}`}
          onClick={() => onClickIcon()}
        ></i>
        <p className="guide-text">
          <strong>💜아이돌플러스 바로가기💜</strong> <br />
          홈화면에 추가하고 편리하게 접속하세요.
        </p>
      </Popup.Content>
      <Popup.Tool>
        <button
          className="btn btn-look-guide"
          onClick={() => navigateToPage("/guide")}
        >
          가이드 보기
        </button>
        <button
          className="btn btn-close"
          onClick={() => onClickCloseBtn()}
        >
          닫기
        </button>
      </Popup.Tool>
    </Popup>
  </div>
}

export default PageHome;