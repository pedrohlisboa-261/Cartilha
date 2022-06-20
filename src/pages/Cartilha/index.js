import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View
 } from 'react-native';
import Header from '../../components/Header'
import Menu from './menu'



export default function Cartilha({ navigation }) {
  return (
      
<View style={styles.container}> 
    <Header positionProgress="0"/>   
    <Menu navigate={navigation.navigate}/>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
   

    }
 
})
  