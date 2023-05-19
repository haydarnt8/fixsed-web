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
          <Route exact path='fixsed-web' element={<Home />}></Route>
          <Route path='fixsed-web/about-website' element={<AboutWebsite />}></Route>
          <Route path='fixsed-web/about-drone' element={<AboutDrone />}></Route>
          <Route path='fixsed-web/drone-type' element={<DroneType />}></Route>
          <Route path='fixsed-web/drone-importance' element={<Importance />}></Route>
          <Route path='fixsed-web/drone-accidents' element={<Accidents />}></Route>
          <Route path='fixsed-web/middle-east-law/:id' element={<MiddleEastLaw />}></Route>
          <Route path='fixsed-web/general-laws' element={<GeneralLaws />}></Route>
          <Route path='fixsed-web/permittance' element={<Permittance />}></Route>
          <Route path='fixsed-web/faq' element={<Faq />}></Route>
        </Routes>
  
      <Footer />

    </>
  );
}

export default App;
