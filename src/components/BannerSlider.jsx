const BannerSlider = () => {
  const onClickToolBtn = () => {
    console.log("clicked")
  }

  return <section className="banner-slider">
    <div className="banner-slider-wrap">
      <ul className="banner-slider-list">
        <li className="banner-item">
          <button>test image area</button>
        </li>
        <li className="banner-item">
          <button>test image area2</button>
        </li>
        <li className="banner-item">
          <button>test image area3</button>
        </li>
      </ul>
    </div>

    <div className="slider-pagination">
      <div className="slider-pagination-wrap">

        <ul className="pagination-list">
          <li className="tool-now"
            style={{
              left: "0",
              width: "33.33%"
            }}
          >
            <span />
          </li>
          <li className="pagination-item">
            <button className="tool"
              onClick={onClickToolBtn()}
            ></button>
          </li>
          <li className="pagination-item">
            <button className="tool"
              onClick={onClickToolBtn()}
            ></button>
          </li>
          <li className="pagination-item">
            <button className="tool"
              onClick={onClickToolBtn()}
            ></button>
          </li>
        </ul>
      </div>
    </div>
  </section>
}

export default BannerSlider;