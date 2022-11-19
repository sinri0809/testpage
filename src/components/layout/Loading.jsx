import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loadingUXWriting as message, randomIndex as index } from "tools/constants";

const Loading = () => {
  const loadingTime = 2000;

  const navigate = useNavigate();

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      navigate("/home")
    }, loadingTime);
    return () => {
      clearTimeout(handleLoading);
    }
  }, [navigate])


  return <div className="view loading">
    <div className="loading-content">
      <i className="progressing-icon">{message[index].icon}</i>
      <p className="progressing-text">{message[index].writing}</p>
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