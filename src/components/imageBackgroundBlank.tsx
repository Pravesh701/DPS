import React, { ReactElement } from 'react';
import { Image, View, StyleSheet } from 'react-native';

//custom imports
import images from '../utils/images';
import { screenWidth, screenHeight } from '../utils/dimensions';
import colors from '../utils/color';

export default function ImageBackgroundBlank(): ReactElement {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} resizeMode= 'cover' source={images.appBackgroundIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        ...StyleSheet.absoluteFillObject,
    },
    imageStyle: {
        width: screenWidth,
        height: screenHeight,
        tintColor: colors.cloudBlue
    }
})