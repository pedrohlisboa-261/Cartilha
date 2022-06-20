import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import ProgressSte from '../../components/ProgressSte'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;



export default function Header(props) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Image style={styles.logo}
                    source={require('../../../assets/logo.png')} />

                <Text style={styles.title}>Cartilha do Cliente</Text>
            </View>

            <View style={styles.progress}>
                <ProgressSte position={props.positionProgress} />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingTop: statusBarHeight,

        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        height: 300,
        marginTop: 0


    },
    content: {
        flex: 1,
        alignItems: 'center'

    },
    logo: {
        width: 200,
        height: 50,
    },
    title: {
        padding: 25,
        fontSize: 22,
        color: '#bbbaba',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    progress: {
        flex: 1,
        top: 90
    }
})