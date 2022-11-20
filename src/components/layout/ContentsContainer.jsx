import { IconMore } from "components/icon/Icons";

import { contentsCategories as category } from "tools/constants";

const ContentsContainer = ({ children, index }) => {
  return <section
    id={`contentContainer${index}`}
    className="contents-container"
  >
    <div className="contents-wrap">
      <div
        className="category-item category-index focus"
        data-index={index}
      >
        <h3 className="category-text">{category[index]}</h3>
      </div>
      {children}
      <div className="btn-more-wrap">
        <button className="btn-more">
          <span className="more-text">{"전 세계를 열광시킬 모두의 시상식! 다시 음악을 만나는 날, 당신의 아티스트를 확인하세요."}</span>
          <strong className="more-title">
            {"더 둘러보기"}
            <IconMore />
          </strong>
        </button>
      </div>
    </div>
  </section>
}

export default ContentsContainer;