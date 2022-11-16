import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const loadingTime = 2000;

  const randomIndex = Math.floor(Math.random() * 2); // 0~1 
  const loadingUXWriting = [
    {
      icon: "🔮",
      writing: "오늘은 최애가 내 꿈에 나올 것만 같아"
    },
    {
      icon: "🎧",
      writing: "최애 콘서트까지 D-5, 라이브 방송은 아이돌플러스에서"
    },
  ];

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
      <i className="progressing-icon">{loadingUXWriting[randomIndex].icon}</i>
      <p className="progressing-text">{loadingUXWriting[randomIndex].writing}</p>
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