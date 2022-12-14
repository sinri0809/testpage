const Loading = ({ loadingTime = 3000 }) => {
  const loadingUXWriting = {
    test: {
      icon: "đŽ",
      writing: "ě¤ëě ěľě ę° ë´ ężě ëěŹ ę˛ë§ ę°ě"
    }
  };

  return <div className="view loading">
    <div className="loading-content">
      <i className="progressing-icon">đŽ</i>
      <p className="progressing-text">ě¤ëě ěľě ę° ë´ ężě ëěŹ ę˛ë§ ę°ě</p>
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