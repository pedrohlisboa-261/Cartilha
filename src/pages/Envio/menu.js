import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button,
    TextInput
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Preencha o e-mail abaixo:</Text>

            <View style={styles.content}>
                <View style={styles.inputView}>
                    <TextInput style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.TextInput}
                        secureTextEntry={true}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                    />
                </View>

               
            </View>

            <View style={styles.contentBnt}>
                <Button style={styles.btn}
                    onPress={() => {
                        console.log("teste")
                    }}

                    title="Enviar"
                    color="#64bd53"
                    accessibilityLabel="Enviar"
                />
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(74,126,231,0.9)',
        paddingTop: statusBarHeight,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        height: "60%",
        marginTop: 0,
        borderTopStartRadius: 44,
        borderTopEndRadius: 44,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',


    },
    content: {
        flex: 1,
        top: 90,
        paddingStart: 25,
        paddingEnd: 25,
        alignItems: 'center',
    },
    inputView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
    },
    btn: {
        width: "100%",
        height: "100%",
    },
    contentBnt: {
        width: 100,
        height: 100,
    }
})