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

  const tempVideo1 = {
    title: "abs video title video hihi"
  }

  const handleTitle = (title) => {
    if (title.match(input)) {
      return title.replace(input, `<b>${input}</b>`)
    }
  }


  return <div className="result-container">
    <div className="result-title">
      <strong className="user-input">&#34;{input}&#34;</strong>
      <span>의 검색 결과</span>
      <div className="result-count">
        <span>{"1"}</span>
      </div>
      <div className="result-sort">
        <select name="" id="" className="result-sort-select">
          <option value="">최신순</option>
          <option value="">정확순</option>
        </select>
      </div>
    </div>
    <div className="result-content">
      {resultVideo && <ResultVideo title={handleTitle(tempVideo1.title)} />}
      {resultBanner && <ResultBanner />}
    </div>
  </div>
}

const ResultVideo = ({ title }) => {
  return <div className="result-video">
    <div className="btn-video-item">
      <div className="video-wrap">
        <video className="video-content" src=""></video>
        {/* <span className="video-total-time">{"10:11"}</span> */}
      </div>
    </div>
    <h4 className="video-title" dangerouslySetInnerHTML={{ __html: title }}></h4>
    {/* <span className="video-date">2022.00.00</span> */}
  </div>
}

const ResultBanner = () => {
  <div className="result-banner">

  </div>
}