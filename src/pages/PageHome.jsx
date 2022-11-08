import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/layout/Header";
import Loading from "components/layout/Loading";
import Popup from "components/Popup";

const PageHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopup, setIsPopup] = useState(false);
  const [popupShutDown, setPopupshutDown] = useState(false);
  const navigate = useNavigate();
  const loadingTime = 2000;

  setTimeout(() => {
    setIsLoading(false);
    // setIsPopup(true);
  }, loadingTime);

  const navigateToPage = (link) => {
    navigate(link);
  };

  const onClickCloseBtn = () => {
    setPopupshutDown(!popupShutDown)
  }
  const onClickIcon = () => {
    if (popupShutDown) {
      setPopupshutDown(!popupShutDown)
    }
  }

  return <div className="view home">
    <Header />
    {/* {isLoading && <Loading loadingTime={loadingTime} />} */}
    <div className="page-content">
      home
    </div>

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
          onClick={() => navigateToPage("guide")}
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