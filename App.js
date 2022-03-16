
import { useState } from 'react';
import AppIntro from './src/components/AppIntroComp';
import TabContainer from './src/navigations/BottomNavigation';

const App = () => {
  const [showApp, setShowApp] = useState(false)
  return (
    showApp ?  <TabContainer/> : <AppIntro params={setShowApp}/>
  );
}

export default App;

