import React from 'react';
import { Text } from 'react-native';
import Cartilha from './src/pages/Cartilha'
import Canal from './src/pages/Canal'
import Envio from './src/pages/Envio'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Routes = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Cartilha'>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Cartilha"
                    component={Cartilha} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Canal"
                    component={Canal} />


                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Envio"
                    component={Envio} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;