import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/layout/Header"

const PageSetLanguage = () => {
  return <div className="view page-set-language">
    <Header />
    <div className="page-content">
      <Popup />
    </div>
  </div>
}

export default PageSetLanguage;

const Popup = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("KO");
  const LanguageSampleMap = {
    "KO": "안녕하세요",
    "EN": "Hello",
    "DE": "Halo"
  };

  const naviagteToPage = () => {
    console.log("go home")
    navigate("/home", { replace: false })
  }

  // todo: check cookie
  // todo: set cookie

  return <div className="popup-container set-language">
    <div className="popup-wrap">
      <div className="popup-content">
        <div className="selected-language">
          <p>{LanguageSampleMap[language]}</p>
        </div>
        <div className="list-languages-wrap">
          <ul className="list-languages">
            <li>
              <button
                className={`btn btn-lang ${language === "KO" && "--focused"}`}
                data-language={"KO"}
                onClick={() => setLanguage("KO")}
              >
                한국어
              </button>
            </li>
            <li>
              <button
                className={`btn btn-lang ${language === "EN" && "--focused"}`}
                data-language={"EN"}
                onClick={() => setLanguage("EN")}
              >
                english
              </button>
            </li>
            <li>
              <button
                className={`btn btn-lang ${language === "DE" && "--focused"}`}
                data-language={"DE"}
                onClick={() => setLanguage("DE")}
              >
                deutch
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-wrap">
        <button
          className="btn btn-close"
          onClick={() => naviagteToPage()}
        >닫기</button>
        <button
          className="btn btn-check"
          onClick={() => naviagteToPage()}
        >확인</button>
      </div>
    </div>
  </div>
}