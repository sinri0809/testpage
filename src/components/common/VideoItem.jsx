import { useState } from "react";

const VideoItem = ({ isView = false }) => {
  const [isFloating, setIsFloating] = useState(false);
  const [isViewVideo, setIsViewVideo] = useState(false);

  const makeClassName = () => {
    const isFloatingState = isFloating ? "float" : "";
    return `view-video ${isFloatingState}`
  };

  return <> <div className={"btn-video-item"}
    onClick={() => {
      setIsViewVideo(true)
    }}
  >
    <div className="view-video-wrap">
      <div className="video-wrap">
        <video className="video-content" src=""></video>
        <span className="video-total-time">{"10:11"}</span>
      </div>
      <h4 className="video-title">video title</h4>
      <span className="video-date">2022.00.00</span>
    </div>
  </div>
    {isViewVideo && <>
      <div className={makeClassName()}>
        <div className="view-video-wrap">
          <VideoViewDragTool
            isFloating={isFloating}
            setIsFloating={setIsFloating}
            setIsViewVideo={setIsViewVideo}
          />
          <div className="video-wrap">
            <video className="video-content" src=""></video>
            <span className="video-total-time">{"10:11"}</span>
          </div>
          <h4 className="video-title">video title</h4>
          <span className="video-date">2022.00.00</span>
          <VideoItemInformation />
        </div>
      </div>
    </>}
  </>
}

export default VideoItem;

const VideoViewDragTool = ({ isFloating, setIsFloating, setIsViewVideo }) => {
  const [touchstart, setTouchStart] = useState(0);

  const onTouchStart = () => (e: Event) => {
    if (isFloating) {
      // console.log(e.touches[0].pageY)
      setTouchStart(e.touches[0].pageY)
    }
  }

  const onTouchMove = () => (e) => {
    if (isFloating) {
      // console.log(e.touches[0].pageY)
      const movingY = e.touches[0].pageY;
      if (movingY - touchstart > 50) {
        setIsViewVideo(false)
        setIsFloating(false)
      }
    }
  };

  const onTouchEnd = () => (e) => {
  };

  return <button
    className="drag-tool-touch"
    onClick={(e) => {
      e.stopPropagation();
      setIsFloating(!isFloating);
    }}
    onTouchStart={onTouchStart()}
    onTouchMove={onTouchMove()}
    onTouchEnd={onTouchEnd()}
  >
    <span className="tool-bar"></span>
  </button>
}

const VideoItemInformation = () => {
  return <div className="video-main">
    <div className="video-main-wrap">
      <div className="video-information">
        <strong className="information-comment">
          <span>{"댓글"}</span>
          <span className="comment-number">{"24"}</span>
        </strong>

        <div className="user-tool">
          <button className="mark-like">like</button>
          <button className="sns-share">share</button>
        </div>
      </div>

      <div className="video-comment-form">
        <form action="" className="form-comment">
          <input className="input" type="text" placeholder="comment" />
          <input className="btn" type="submit" value="등록" />
        </form>
      </div>
    </div>
    <VideoCommentList />
  </div>
}

const VideoCommentList = () => {
  return <div className="video-comment-list">
    <ul className="comment-list">
      <li className="comment-item"></li>
    </ul>
  </div>
}