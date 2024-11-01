import "./App.scss";
import Navbar from "./components/Header/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";

import MainBack from "./components/MainBack/MainBack";
import VideoBack from "./components/VideoBack/VideoBack";

function App() {
  return (
    <div className="travel-beaches">
      <MainBack />
      <VideoBack />
      <Navbar />
      <HomeSection />
    </div>
  );
}

export default App;
