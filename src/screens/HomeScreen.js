import React from 'react';
import { SafeAreaView} from 'react-native';
import News from '../components/News';
import BodyCard from '../components/BodyCard';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <News/>
      <BodyCard navigation={navigation}/>
    </SafeAreaView>
  );
}

export default HomeScreen;

