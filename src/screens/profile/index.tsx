import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import screens from '../../utils/screens';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';

interface Props {
    route: any;
    navigation: any;
}

const UserProfile = (props: Props) => {

    const handleOnPress = () =>{
        props.navigation.navigate(screens.MAIN_BOTTOM_TAB_STACK);
    }

    return (
        <TouchableOpacity onPress = {handleOnPress} style={styles.container}>
            <ImageBackgroundBlank />
            <Text>UserProfile</Text>
        </TouchableOpacity>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
