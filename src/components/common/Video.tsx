interface VideoProps {
  label: string;
}

const Video = ({ label }: VideoProps) => {
  return <div className="video-wrap" data-temp={label}>
    <video className='video' src="" />
  </div>
}

export default Video;