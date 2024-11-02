import "./App.scss";
import Navbar from "./components/Header/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import VideoBack from "./components/VideoBack/VideoBack";

function App() {
  return (
    <div className="travel-beaches">
      <Navbar />
      <HomeSection />
      <AboutSection />

      <VideoBack />
    </div>
  );
}

export default App;
