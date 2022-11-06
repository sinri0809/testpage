import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/layout/Header";
import Loading from "components/layout/Loading";
import Popup from "components/Popup";

const PageHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();
  const loadingTime = 2000;

  setTimeout(() => {
    setIsLoading(false);
    setIsPopup(true);
  }, loadingTime);

  const navigateToPage = (link) => {
    navigate(link);
  }

  return <div className="view home">
    <Header />
    {isLoading && <Loading loadingTime={loadingTime} />}
    <div className="page-content">
      home
    </div>

    {
      isPopup &&
      <Popup className="set-guide">
        <Popup.Content>
          <i className="image-icon-guide"></i>
          <p className="guide-text">
            아이돌플러스 바로가기 <br />
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
            onClick={() => setIsPopup(false)}
          >
            닫기
          </button>
        </Popup.Tool>
      </Popup>
    }
  </div>
}

export default PageHome;