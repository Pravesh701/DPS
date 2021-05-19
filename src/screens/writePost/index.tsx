import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import screens from '../../utils/screens';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';

interface Props {
    route: any;
    navigation: any;
}

const WritePost = (props: Props) => {

    const handleOnPress = () =>{
        props.navigation.navigate(screens.MAIN_BOTTOM_TAB_STACK);
    }

    return (
        <TouchableOpacity onPress = {handleOnPress} style={styles.container}>
            <ImageBackgroundBlank />
            <Text>WritePost</Text>
        </TouchableOpacity>
    )
}

export default WritePost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
