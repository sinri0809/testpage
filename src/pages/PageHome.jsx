/**
 * 1. observer로 category fix -> interaction (change condition)
 * video logic 고도화 
 *  - skeleton
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BannerSlider from "components/BannerSlider";
import VideoItem from "components/common/VideoItem";
import Popup from "components/Popup";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ContentsContainer from "components/layout/ContentsContainer";
import SearchFrom from "components/layout/SearchForm";

import { contentsCategories as category } from "tools/constants";

const PageHome = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [popupShutDown, setPopupshutDown] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    const headerHeight = 90;

    const options = {
      root: null,
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
      threshold: [0.5, 0.6, 0.9]
    };

    const callback = (entries, observe) => {
      const [entry] = entries;
      const top = entry.intersectionRect.top;

      if (entry.isIntersecting && top >= 90 && top <= 150) {
        const focusedIndex = Number(entry.target.getAttribute("data-index"));
        setCategoryIndex(focusedIndex);
        // if(focusedIndex !== categoryIndex){
        // }
      }
    };

    const observer = new IntersectionObserver(callback, options);

    const categoryList = document.querySelectorAll(".category-index");
    categoryList.forEach((target) => {
      observer.observe(target)
    })

    return () => {
      categoryList.forEach((target) => {
        observer.unobserve(target)
      })
    }
  }, [])

  return <>
    <div className="view home">
      <Header>
        <div className="recommend-category">
          <div className="recommend-category-wrap">
            <ul className="recommend-category-list">
              <li className="category-item focus">
                <button className="btn category-text">
                  {category[categoryIndex]}
                </button>
              </li>
              {
                category.map((item, index) => {
                  return <li key={index} className={"category-item"}>
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

      <main id="scrollArea" className="page-content">
        <BannerSlider />
        <ContentsContainer index={0}>
          <div className="contents-list-wrap">
            <ul className="contents-list">
              <li className="content-item">
                <VideoItem />
              </li>
              <li className="content-item">
                <VideoItem />
              </li>
              <li className="content-item">
                <VideoItem />
              </li>
              <li className="content-item">
                <VideoItem />
              </li>
            </ul>
          </div>
        </ContentsContainer>
        <ContentsContainer index={1}>
          <div className="contents-list-wrap">
            <ul className="contents-list">
              <li className="content-item">
                <VideoItem />
              </li>
              <li className="content-item">
                <VideoItem />
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
    <SearchFrom />
  </>
}

export default PageHome;