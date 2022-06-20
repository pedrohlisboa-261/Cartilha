import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View
 } from 'react-native';
import Header from '../../components/Header'
import Menu from './menu'



export default function Canal() {
  return (
      
<View style={styles.container}> 
    <Header positionProgress="1"/>   
    <Menu/>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
   

    }
 
})
  