import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    route: any;
    navigation: any;
}

const Followed = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default Followed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
