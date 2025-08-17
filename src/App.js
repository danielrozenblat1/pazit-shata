
import './App.css';
import FirstScreen from './screens/FirstScreen';
import { useEffect, useState } from 'react';
import NavBarNew from './components/NewNav/NavBarNew';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import WhoFits from './components/fit/WhoFits';
import Rectangle from './components/feel/Feel';

import ForthScreen from './screens/ForthScreen';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';
import PrivacyPolicy from './components/privacy/Privacy';
function App() {

    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
     
  
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
return <>
<NavBarNew/>
<FirstScreen scrolled={scrolled}/>
<SecondScreen/>
<ThirdScreen/>
<WhoFits/>

<ForthScreen/>
<PrivacyPolicy
  ownerName="פזית שטה"
  email=""
  phone="052-684-1001"
  domain="https://pazitshata.co.il"
/>
<ByMe/>
</>
}

export default App;
