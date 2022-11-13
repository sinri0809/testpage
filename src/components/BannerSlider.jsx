import { useState } from "react";

const BannerSlider = () => {
  const [index, setIndex] = useState(0);
  const arrLength = 3;

  const toolWidth = 100 / arrLength;

  return <section className="banner-slider">
    <BannerWrap index={index}>
      <li className="banner-item">
        <button>test image area</button>
      </li>
      <li className="banner-item">
        <button>test image area2</button>
      </li>
      <li className="banner-item">
        <button>test image area3</button>
      </li>
    </BannerWrap>

    <Pagination>
      <ul className="pagination-list">
        <li className="tool-now"
          style={{
            left: `${toolWidth * index}%`,
            width: `${toolWidth}%`
          }}
        >
          <span />
        </li>
        <Pagination.Item setIndex={setIndex} item={0} />
        <Pagination.Item setIndex={setIndex} item={1} />
        <Pagination.Item setIndex={setIndex} item={2} />
      </ul>
    </Pagination>
  </section>
}

export default BannerSlider;

const BannerWrap = ({ children, index }) => {
  return <div className="banner-slider-wrap">
    <ul
      className="banner-slider-list"
      style={{
        transform: `translateX(-${index * 100}%)`
      }}
    >
      {children}
    </ul>
  </div>
}

const Pagination = ({ children }) => {
  return <div className="slider-pagination">
    <div className="slider-pagination-wrap">
      <ul className="pagination-list">
        {children}
      </ul>
    </div>
  </div>
}

Pagination.Item = ({ setIndex, item }) => {
  const onClickToolBtn = () => {
    // console.log("clicked" + item)
    setIndex(item)
  }
  return <li className="pagination-item">
    <button className="tool"
      onClick={onClickToolBtn}
    ></button>
  </li>
}