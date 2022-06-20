import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Buton from '../../components/Buton'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header(){
    return(
        <View style={styles.container}>
        
        <Text style={styles.titulo}>Selecione a cartilha que deseja:</Text>

            <View style={styles.content}>
            <Buton title="Ligação Nova"/>
            <Buton title="teste2"/>
            </View>
            
            <View style={styles.content}>
            <Buton title="Cartilha do Cliente"/>
            <Buton title="Reclamação"/>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(74,126,231,0.9)',
        paddingTop: statusBarHeight,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom:44,
        height: 500,
        marginTop:0,
        borderTopStartRadius: 44,
        borderTopEndRadius: 44,

        
    },
    titulo: {
        textAlign: 'center',
        fontSize:17,
        color:'#fff',
        fontWeight: 'bold',
        
        
    },
    content: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingStart: 25,
        paddingEnd: 25
    },

})