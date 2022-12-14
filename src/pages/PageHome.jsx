/**
 * todo list
 * 1. observer로 category fix 
 * 2. loading logic + routing order
 * 3. search page layout
 * 4. more button
 * 5. video component detail page
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
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
    "😻latest", "🍕hottest", '⏰someone special'
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
    <Header>
      <div className="recommend-category">
        <div className="recommend-category-wrap">
          <ul className="recommend-category-list">
            {
              arrContentsCategories.map((item, index) => {
                return <li key={index}
                  className={"category-item"}
                >
                  <button className="btn category-text">{item}</button>
                </li>
              })
            }
          </ul>
          <div className="btn-wrap">
            <button className="btn btn-dropdown"
              onClick={onClickMoreBtn()}
            ></button>
          </div>
        </div>
      </div>
    </Header>
    {/* {isLoading && <Loading loadingTime={loadingTime} />} */}
    <main className="page-content">
      <BannerSlider />

      <ContentsContainer>
        <div className="category-item focus">
          <h3 className="category-text">{arrContentsCategories[0]}</h3>
        </div>

        <div className="contents-list-wrap">
          <ul className="contents-list">

            <li className="content-item">
              <button className="btn btn-content">
                <div className="video-wrap">
                  <video className="video-content" src=""></video>
                </div>
                <h4 className="video-title">video title</h4>
              </button>
            </li>
            <li className="content-item">
              <button className="btn btn-content">
                <div className="video-wrap">
                  <video className="video-content" src=""></video>
                </div>
                <h4 className="video-title">video title</h4>
              </button>
            </li>
            <li className="content-item">
              <button className="btn btn-content">
                <div className="video-wrap">
                  <video className="video-content" src=""></video>
                </div>
                <h4 className="video-title">video title 2videovideo title 2videovideo title 2videovideo title 2video title 2video title 2video title 2video title 2video title 2video title 2video title 2</h4>
              </button>
            </li>

          </ul>
        </div>

        <div className="btn-wrap">
          <button className="btn"> more</button>
        </div>
      </ContentsContainer>
      <ContentsContainer>
        <div className="category-item focus">
          <h3 className="category-text">{arrContentsCategories[1]}</h3>
        </div>

        <div className="contents-list-wrap">
          <ul className="contents-list">
            <li className="content-item">
              <button className="btn btn-content">
                <div className="video-wrap">
                  <video className="video-content" src=""></video>
                </div>
                <h4 className="video-title">video title</h4>
              </button>
            </li>
            <li className="content-item">
              <button className="btn btn-content">
                <div className="video-wrap">
                  <video className="video-content" src=""></video>
                </div>
                <h4 className="video-title">video title 2videovideo title 2videovideo title 2videovideo title 2video title 2video title 2video title 2video title 2video title 2video title 2video title 2</h4>
              </button>
            </li>
          </ul>
        </div>
      </ContentsContainer>
    </main>

    <Footer />

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

const ContentsContainer = ({ children }) => {
  return <section className="contents-container">
    <div className="contents-wrap">
      {children}
    </div>
  </section>
}