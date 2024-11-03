import "./App.scss";
import Navbar from "./components/Header/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import DiscoverSection from "./components/DiscoverSection/DiscoverSection";
import VideoBack from "./components/VideoBack/VideoBack";

import { aboutData } from "./helpers/staticAbout";

function App() {
  return (
    <div className="travel-beaches">
      <Navbar />
      <HomeSection />
      <AboutSection props={aboutData} />
      <DiscoverSection />

      <VideoBack />
    </div>
  );
}

export default App;
