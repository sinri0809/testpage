const VideoItem = ({ isView = false }) => {
  const className = isView ? "view-video" : "btn-video-item";

  return <button
    className={className}
    onTouchStart={() => console.log("on touch start")}
  >
    {isView && <VideoViewDragTool />}
    <div className="video-wrap">
      <video className="video-content" src=""></video>
      <span className="video-total-time">{"10:11"}</span>
    </div>
    <h4 className="video-title">video title</h4>
    <span className="video-date">2022.00.00</span>
    {isView && <VideoItemInformation />}
  </button>
}

export default VideoItem;

const VideoViewDragTool = () => {
  return <button className="drag-tool-touch"></button>
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