import { useState } from "react";

const VideoItem = ({ isView = false }) => {
  const [isFloating, setIsFloating] = useState(false);

  const makeClassName = () => {
    const isViewState = isView ? "view-video" : "btn-video-item";
    const isFloatingState = isFloating ? "float" : "";
    return `${isViewState} ${isFloatingState}`
  }

  return <button
    className={makeClassName()}
  // onTouchStart={() => console.log("on touch start")}
  >
    <div className="view-video-wrap">
      {isView && <VideoViewDragTool isFloating={isFloating} setIsFloating={setIsFloating} />}
      <div className="video-wrap">
        <video className="video-content" src=""></video>
        <span className="video-total-time">{"10:11"}</span>
      </div>
      <h4 className="video-title">video title</h4>
      <span className="video-date">2022.00.00</span>
      {isView && <VideoItemInformation />}
    </div>
  </button>
}

export default VideoItem;

const VideoViewDragTool = ({ isFloating, setIsFloating }) => {
  return <button
    className="drag-tool-touch"
    onClick={(e) => {
      e.stopPropagation();
      setIsFloating(!isFloating);
    }}
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