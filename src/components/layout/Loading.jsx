const Loading = ({ loadingTime = 3000 }) => {
  const loadingUXWriting = {
    test: {
      icon: "🔮",
      writing: "오늘은 최애가 내 꿈에 나올 것만 같아"
    }
  };

  return <div className="view loading">
    <div className="loading-content">
      <i className="progressing-icon">🔮</i>
      <p className="progressing-text">오늘은 최애가 내 꿈에 나올 것만 같아</p>
      <div className="progressing-bar-wrap">
        <span
          className="progressing-ing"
          style={{ animationDuration: `${loadingTime / 1000}s` }}
        ></span>
      </div>
    </div>
  </div>
}

export default Loading;