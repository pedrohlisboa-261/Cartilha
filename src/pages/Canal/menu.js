import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Buton from '../../components/Buton'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header(props){
    
    return(
        <View style={styles.container}>
        
        <Text style={styles.titulo}>Selecione o canal que dejesa receber:</Text>
            
            <View style={styles.content}>
            <Buton title="E-mail" navigate={props.navigate} proximo="Envio"/>
            <Buton title="WhatsApp" navigate={props.navigate} proximo="Envio"/>
            </View>
            
            <View style={styles.content}>
            <Buton title="Sms" navigate={props.navigate} proximo="Envio"/>
            <Buton title="Reclamação" navigate={props.navigate} proximo="Envio"/>
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
        height: "60%",
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
        paddingStart: "10%",
        paddingEnd: "10%"
    },

})