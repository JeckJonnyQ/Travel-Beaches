import "./App.scss";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import MainBack from "./components/MainBack/MainBack";
import VideoBack from "./components/VideoBack/VideoBack";

function App() {
  return (
    <div className="travel-beaches">
      <MainBack />
      <VideoBack />
      <Navbar />
      {/* <Main /> */}
    </div>
  );
}

export default App;
