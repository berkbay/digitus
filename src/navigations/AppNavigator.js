import { useState } from 'react';
import AppIntro from '../components/AppIntroComp';
import TabContainer from './BottomNavigation';

const AppNavigator = () => {
  const [showApp, setShowApp] = useState(false)
  return (
    showApp ? <TabContainer/> : <AppIntro params={setShowApp}/>
  );
}

export default AppNavigator;
