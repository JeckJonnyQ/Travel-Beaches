import "./VideoBack.scss";
import VideoBackground from "../../assets/VideoBackground.mp4";

export default function VideoBack() {
  return (
    <div className="video-container">
      <video className="video-background" autoPlay muted loop playsInline>
        <source type="video/mp4" src={VideoBackground} />
      </video>
    </div>
  );
}
