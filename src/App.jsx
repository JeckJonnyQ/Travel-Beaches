import "./App.scss";
import Navbar from "./components/Header/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import DiscoverSection from "./components/DiscoverSection/DiscoverSection";
import ExploreSection from "./components/ExploreSection/ExploreSection";

import VideoBack from "./components/VideoBack/VideoBack";

import { aboutData } from "./helpers/staticAbout";
import { exploreData } from "./helpers/staticExplore";

function App() {
  return (
    <div className="travel-beaches">
      <Navbar />
      <HomeSection />
      <AboutSection props={aboutData} />
      <DiscoverSection />
      <ExploreSection props={exploreData} />

      <VideoBack />
    </div>
  );
}

export default App;
