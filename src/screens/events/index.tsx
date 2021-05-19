import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    route: any;
    navigation: any;
}

const Events = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Events</Text>
        </View>
    )
}

export default Events;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})
