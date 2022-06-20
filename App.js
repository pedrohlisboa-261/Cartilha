import Routes from './routes';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

export default function App() {
  return (

    <ImageBackground
      source={require('./assets/image.png')}
      style={styles.imageBackground}> 
      <Routes />
    </ImageBackground>
    

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"

  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",

  },

})
