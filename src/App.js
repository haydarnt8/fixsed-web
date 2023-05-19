import { Route, Routes} from 'react-router-dom';
import Footer from './HomePagecomonent/footer';
import Home from './pages/Home';
import AboutDrone from './pages/AboutDrone';
import AboutWebsite from './pages/AboutWebsite';
import DroneType from './pages/DroneType';
import Faq from './pages/Faq';
import Importance from './pages/Importance';
import Accidents from './pages/Accidents';
import GeneralLaws from './pages/GeneralLaws';
import MiddleEastLaw from './pages/MiddleEastLaw';
import Permittance from './pages/Permittance';



function App() {
  return (
    <>
     
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='about-website' element={<AboutWebsite />}></Route>
          <Route path='about-drone' element={<AboutDrone />}></Route>
          <Route path='drone-type' element={<DroneType />}></Route>
          <Route path='drone-importance' element={<Importance />}></Route>
          <Route path='drone-accidents' element={<Accidents />}></Route>
          <Route path='middle-east-law/:id' element={<MiddleEastLaw />}></Route>
          <Route path='general-laws' element={<GeneralLaws />}></Route>
          <Route path='permittance' element={<Permittance />}></Route>
          <Route path='faq' element={<Faq />}></Route>
        </Routes>
  
      <Footer />

    </>
  );
}

export default App;
