// import "./VideoBack.scss";
// import VideoBackground from "../../assets/VideoBackground.mp4";

// export default function VideoBack() {
//   return (
//     <div className="video-container">
//       <video
//         className="video-background"
//         autoPlay
//         muted
//         loop
//         preload="auto"
//         playsInline
//       >
//         <source type="video/mp4" src={VideoBackground} />
//       </video>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import "./VideoBack.scss";
import VideoBackground from "../../assets/VideoBackground.mp4";

export default function VideoBack() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);
    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  return (
    <div className="video-container">
      {!isLoaded && <div className="loading-indicator">Загрузка...</div>}

      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
      >
        <source type="video/mp4" src={VideoBackground} />
      </video>
    </div>
  );
}
