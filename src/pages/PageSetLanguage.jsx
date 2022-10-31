import { useState } from "react";

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
  const [language, setLanguage] = useState("KO");
  const LanguageSampleMap = {
    "KO": "안녕하세요",
    "EN": "Hello",
    "DE": "Halo"
  };

  // todo: check cookie
  // todo: set cookie

  return <div className="popup__wrap set-language">
    <div className="popup__container">
      <div className="selected-language">
        <p>{LanguageSampleMap[language]}</p>
      </div>
      <div className="list-languages__wrap">
        <ul className="list-languages">
          <li>
            <button
              className="btn btn-lang --focused"
              data-language={"KO"}
              onClick={() => setLanguage("KO")}
            >
              한국어
            </button>
          </li>
          <li>
            <button
              className="btn btn-lang"
              data-language={"EN"}
              onClick={() => setLanguage("EN")}
            >
              영어
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
}