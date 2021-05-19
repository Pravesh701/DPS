import React from 'react';
var Spinner = require('react-native-spinkit');
import { View, StyleSheet } from 'react-native';

//custom imports
import Colors from '../utils/color'


interface LoaderProps {
    isVisible: boolean;
}

export default class Loader extends React.PureComponent<LoaderProps> {
    
    constructor(props: LoaderProps) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.container}>
                <Spinner isVisible={this.props.isVisible} size={80} type={"Circle"} color={Colors.startGradientBtn} />
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        top: 0,
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 11,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: "center",
        zIndex: 99,
    },
    spinner: {
        marginBottom: 50
    },
})
