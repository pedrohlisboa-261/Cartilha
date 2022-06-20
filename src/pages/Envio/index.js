import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View
 } from 'react-native';
import Header from '../../components/Header'
import Menu from './menu'



export default function Envio() {
  return (
      
<View style={styles.container}> 
    <Header positionProgress="2"/>   
    <Menu/>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
   

    }
 
})
  