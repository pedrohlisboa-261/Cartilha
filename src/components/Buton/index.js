import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


import { Feather } from '@expo/vector-icons'

export default function Buton(props){

    
    return (
        <View style={styles.container}>
         <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.buttonUser} 
            onPress= {() => { 
                // console.log(props)
                    props.navigate(props.proximo)
                    const s = (props) 
                    console.log(s)
                }}> 
         <Feather name='user' size={27} color="black"/>

         <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height: "50%",
        width: "40%",
    },
    buttonUser: {
        height: "100%",
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: 44/2,
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
    },
    title: {
        top:2,
        fontSize: 12,
    }

})