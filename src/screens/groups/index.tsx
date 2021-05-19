import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    route: any;
    navigation: any;
}

const Groups = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Groups</Text>
        </View>
    )
}

export default Groups;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
