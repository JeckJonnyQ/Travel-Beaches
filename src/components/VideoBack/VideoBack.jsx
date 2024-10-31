import "./VideoBack.scss";
import VideoBackground from "../../assets/VideoBackground.mp4";

export default function VideoBack() {
  return (
    <div className="video-background">
      <video
        className="video-background__set"
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source type="video/mp4" src={VideoBackground} />
      </video>
    </div>
  );
}
