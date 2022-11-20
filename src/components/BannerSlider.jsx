import { useState, useEffect } from "react";

import banner1 from 'assets/temp/image_banner_temp_01.png';
import banner2 from 'assets/temp/image_banner_temp_02.png';
import banner3 from 'assets/temp/image_banner_temp_03.png';

const BannerSlider = () => {
  const [index, setIndex] = useState(0);
  const arrLength = 3;

  const toolWidth = 100 / arrLength;

  useEffect(() => {
    const infiniteAddIndex = () => {
      if (index === arrLength - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }

    let handleAutoBannerSlide = setInterval(infiniteAddIndex, 2000);

    return () => {
      clearInterval(handleAutoBannerSlide)
    }
  }, [index])

  return <section className="banner-slider">
    <BannerWrap index={index}>
      <li className="banner-item">
        <button className="btn-link-banner">
          <img className="image-banner" src={banner1} alt="banner-01" />
        </button>
      </li>
      <li className="banner-item">
        <button className="btn-link-banner">
          <img className="image-banner" src={banner2} alt="banner-02" />
        </button>
      </li>
      <li className="banner-item">
        <button className="btn-link-banner">
          <img className="image-banner" src={banner3} alt="banner-03" />
        </button>
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