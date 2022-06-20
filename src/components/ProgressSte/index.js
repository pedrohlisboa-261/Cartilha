import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ViewStyle
} from 'react-native';
import StepIndicator from "react-native-step-indicator";


const labels = [
    "",
    "",
    ""
];
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#64bd53',
    stepStrokeWidth: 3,
    separatorStrokeFinishedWidth: 4,
    stepStrokeFinishedColor: '#64bd53',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#64bd53',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#64bd53',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 17,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#64bd53',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#64bd53',
};

export default function ProgressSte(props) {
    return (
        <View style={{ flex: 1 }}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={props.position}
                labels={labels}
                stepCount={3}
            />
        </View>
    )
}