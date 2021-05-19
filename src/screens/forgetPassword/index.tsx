import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Text, ScrollView } from 'react-native';

import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import constant from '../../utils/constants';
import { vw, vh, normalize } from '../../utils/dimensions';

interface Props {
    route: any;
    navigation: any;
}

const ForgetPassword = (props: Props) => {

    const [emailVal, setemailVal] = useState('');

    //refs
    const emailRef: any = React.createRef();

    const onChangeText = (key: string, value: any) => {
        setemailVal(value)
    }

    const handleResendLink = () => {
        constant.showSnackBar('Under Development.')
    }

    const handleSubmit = () => {
        constant.showSnackBar('Under Development.')
    };


    function renderLinearGradient(title: string) {
        return (
            <LinearGradient
                colors={[
                    color.startGradientBtn,
                    color.endGradientBtn
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
                locations={[0.0, 1]}>
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image resizeMode={'contain'} style={styles.logoImage} source={images.forgetPassword} />
                <Text style = {styles.instructionText}>Please enter your email address used to register with Simple Online Pharmacy.</Text>
                <TextInput
                    value={emailVal}
                    onChangeText={(val: any) => onChangeText('email', val)}
                    style={styles.emailFieldStyle}
                    placeholder={'Email ID'}
                    ref={emailRef}
                    returnKeyType={'done'}
                    onSubmitEditing={() => handleSubmit}
                />
                <Text onPress={handleResendLink} style={styles.resendLinkText}>Resend Link?</Text>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.gradientButton}>
                    {renderLinearGradient('Submit')}
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: vh(16)
    },
    logoImage: {
        alignSelf: 'center',
        marginTop: vh(24),
    },
    emailFieldStyle: {
        marginTop: vh(52),
        height: vh(50),
        borderRadius: vw(5),
        borderWidth: vw(1),
        borderColor: color.cloudBlue,
        paddingHorizontal: vw(10),
        fontFamily: fontFamily.muliRegular,
        fontSize: normalize(16),
        color: color.black
    },
    resendLinkText: {
        fontFamily: fontFamily.
        muliBold,
        fontSize: normalize(13),
        color: color.startGradientBtn,
        marginTop: vh(20),
        alignSelf: 'center'
    },
    gradientButton: {
        marginTop: vh(56),
        width: '100%',
        height: vh(48),
        alignSelf: 'center',
        borderColor: color.endGradientBtn,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(8),
        borderWidth: vw(2),
    },
    buttonText: {
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        textAlign: 'center',
        color: color.white,
        backgroundColor: 'transparent',
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructionText:{
        marginTop: vh(20),
        fontSize: normalize(12),
        fontFamily: fontFamily.muliRegular,
        color: color.black,
        alignSelf: 'center',
        lineHeight: vh(19)
    }
})
