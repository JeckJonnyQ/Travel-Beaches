import "./VideoBack.scss";
import VideoBackground from "../../assets/VideoBackground.mp4";

export default function VideoBack() {
  return (
    <video
      className="video-background"
      autoPlay
      muted
      loop
      preload="auto"
      playsInline
    >
      <source type="video/mp4" src={VideoBackground} />
    </video>
  );
}
