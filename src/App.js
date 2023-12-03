
import FeatureSec from './components/features/featureSec';
import Footer from './components/footer/footer';
import Footer2nd from './components/footer2nd.js/footer2nd';
import HeroSec from './components/hero/hero';
import './components/hero/hero.css'
import FlowCollection from './components/marquee/flowCollection';
import MoreFeatureSection from './components/more-features/moreFeatureSection';
import Navbar from './components/navbar/navbar';
import Plans from './components/plans/plans';
import MainContainer from './components/questions/mainContainer';
import Sticky from './components/sticky/sticky';



function App() {
  return (
    <>
      <div className='background' >
        <Navbar />
        <Sticky />
        <HeroSec />
        <FeatureSec />
        <MoreFeatureSection />
        <FlowCollection />
        <Plans />
        <MainContainer />
        <Footer2nd/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
