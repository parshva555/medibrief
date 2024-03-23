import Navbar from "./components/Navbar";
import NameSection from "./components/NameSection";
import IntroSection from "./components/IntroSection";
import JohnSnow from "./components/JohnSnow";
import Summarization from "./components/Summarization";

const App = () => {
  return(
    <>
      <Navbar />
      <div className="bg-gray-200 h-full flex items-center">
        <NameSection />
      </div>
      <div className="bg-white-200 h-full flex items-center">
        <IntroSection />
      </div>
      <div className="bg-gray-200 h-full flex items-center">
        <JohnSnow />
      </div>
      <div className="bg-white-200 flex items-center">
        <Summarization />
      </div>
    </>
  );
}

export default App;