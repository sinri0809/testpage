const VideoItem = () => {
  return <button className="btn-video-item">
    <div className="video-wrap">
      <video className="video-content" src=""></video>
    </div>
    <h4 className="video-title">video title</h4>
    <span className="video-date">2022.00.00</span>
  </button>
}

export default VideoItem;