import { useSearchParams } from "react-router-dom";

import FormInput from "components/common/FormInput";

import Header from "components/layout/Header";

const PageSearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const inputVal = searchParams.get("input");

  return <>
    <Header />
    <section className="view search-result">
      <div className="search-result-top">
        <FormInput result={inputVal} setSearchParams={setSearchParams} />
      </div>
      <div className="search-result-bottom">
        {!inputVal && <div>oops !! </div>}
        {inputVal && <ResultLayout input={inputVal} />}
      </div>
    </section>
  </>
}

export default PageSearchResult;

const ResultLayout = ({ input }) => {
  const resultVideo = true;
  const resultBanner = false;

  return <div className="result-container">
    <div className="result-title">
      <strong className="user-input">&#34;{input}&#34;</strong>
      <span>의 검색 결과</span>
      <div className="result-count">
        <span>{"1"}</span>
      </div>
      <div className="result-sort">
        <select name="" id="">
          <option value="">최신순</option>
          <option value="">정확순</option>
        </select>
      </div>
    </div>
    <div className="result-content">
      {resultVideo && <ResultVideo />}
      {resultBanner && <ResultBanner />}
    </div>
  </div>
}

const ResultVideo = () => {
  return <div className="result-video">
    <div className="btn-video-item">
      <div className="video-wrap">
        <video className="video-content" src=""></video>
        {/* <span className="video-total-time">{"10:11"}</span> */}
      </div>
      <h4 className="video-title">video title</h4>
      {/* <span className="video-date">2022.00.00</span> */}
    </div>
  </div>
}

const ResultBanner = () => {
  <div className="result-banner">

  </div>
}