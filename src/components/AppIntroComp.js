import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const AppIntro = (props) => {
  const slides = [
    {
      key: 1,
      title:'Enim ad minim',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../../assets/J_0234-11.png'),
      backgroundColor: '#fff',
    },
    {
      key: 2,
      title:'Enim ad minim',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../../assets/intro2.png'),
      backgroundColor: '#fff',
    },
    {
      key: 3,
      title:'Enim ad minim',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: require('../../assets/Intro3.png'),
      backgroundColor: '#fff',
    }
  ];

  const _renderItem = ({ item }) => {
    return (
      <View>
        <Image source={require('../../assets/DigitusLogo.png')} style={styles.logo}/>
        <Image source={item.image} style={styles.image}/>
        <View style={styles.textBorder}>
          <Text style={styles.title}>{item.title}</Text>
          <ScrollView>
            <Text style={styles.text}>{item.text}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  const goToHomePage = () => {
    props.params(true)
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      onDone={goToHomePage}
      dotStyle={{width:9, backgroundColor: '#EAECF3'}}
      activeDotStyle={{width:9, backgroundColor: '#B5B0B5'}}
      bottomButton={true}
      buttonStyle={{borderRadius: 5}}
    />
  );
}

export default AppIntro;

const styles = StyleSheet.create({
  logo:{
    alignSelf: 'center',
    marginTop: 35,
  },
  image:{
    marginTop:35
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf:'center',
    color: '#0A8754',
    fontFamily:'Avenir Next',
  },
  textBorder:{
    marginHorizontal: 40,
    marginVertical: 100,
    height: 119,
    width: 265,
    alignSelf: 'center',
  },
  text:{
    fontSize: 14,
    fontFamily:'Avenir Next',
    lineHeight: 22,
  }
})
