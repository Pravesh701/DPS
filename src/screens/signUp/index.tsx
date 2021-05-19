import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Text, ScrollView } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import constant from '../../utils/constants';
import Loader from '../../components/loader';
import { ReducersModal } from '../../utils/modals';
import { createUserWithEmailAndPassword } from './action';
import { vw, vh, normalize } from '../../utils/dimensions';
import { handleValidationEmail, handleValidationPassword } from '../../utils/commonMethods';

interface Props {
    route: any;
    navigation: any;
}

const SignUp = (props: Props) => {

    const dispatch = useDispatch();
    const [emailVal, setemailVal] = useState('');
    const [passwordVal, setpasswordVal] = useState('');
    const [showPassword, toggleShowPassword] = useState(true);
    const { commonLoading } = useSelector((state: ReducersModal) => state.globalLoaderReducer);

    //refs
    const emailRef: any = React.createRef();
    const passwordRef: any = React.createRef();

    const onChangeText = (key: string, value: any) => {
        switch (key) {
            case 'email':
                setemailVal(value)
                break;
            case 'password':
                setpasswordVal(value)
                break;
            default:
                break;
        }
    }

    const handleSignup = () => {
        let emailError = handleValidationEmail("email", emailVal),
            passwordError = handleValidationPassword('password', passwordVal)
        if (emailError) {
            constant.showSnackBar(emailError)
            return
        } else if (passwordError) {
            constant.showSnackBar(passwordError)
            return
        } else {
           dispatch(createUserWithEmailAndPassword(props.navigation, emailVal, passwordVal));
        }
    };

    const handleLogin = () => {
        props.navigation.pop();
    }


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
            {
                commonLoading && <Loader isVisible = {commonLoading} />
            }
            <ScrollView>
                <Image resizeMode={'contain'} style={styles.logoImage} source={images.logoImage} />
                <TextInput
                    value={emailVal}
                    onChangeText={(val: any) => onChangeText('email', val)}
                    style={styles.emailFieldStyle}
                    placeholder={'Email ID'}
                    ref={emailRef}
                    returnKeyType={'next'}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <TextInput
                    value={passwordVal}
                    ref={passwordRef}
                    onChangeText={(val: any) => onChangeText('password', val)}
                    style={styles.passwordFieldStyle}
                    placeholder={'Password'}
                    returnKeyType={'done'}
                    secureTextEntry={showPassword}
                    onSubmitEditing={handleSignup}
                />
                <TouchableOpacity
                    onPress={handleSignup}
                    style={styles.gradientButton}>
                    {renderLinearGradient('Sign Up')}
                </TouchableOpacity>
                <Text onPress={handleLogin} style={styles.newUser}>
                    I’m already a member, <Text style={styles.signUPText}>LOGIN</Text>
                </Text>
            </ScrollView>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: vh(16)
    },
    logoImage: {
        width: vw(150),
        height: vh(150),
        alignSelf: 'center',
        marginTop: vh(58),
    },
    emailFieldStyle: {
        marginTop: vh(62),
        height: vh(50),
        borderRadius: vw(5),
        borderWidth: vw(1),
        borderColor: color.cloudBlue,
        paddingHorizontal: vw(10),
        fontFamily: fontFamily.muliRegular,
        fontSize: normalize(16),
        color: color.black
    },
    passwordFieldStyle: {
        marginTop: vh(20.5),
        height: vh(50),
        borderRadius: vw(5),
        borderWidth: vw(1),
        borderColor: color.cloudBlue,
        paddingHorizontal: vw(10),
        fontFamily: fontFamily.muliRegular,
        fontSize: normalize(16),
        color: color.black
    },
    gradientButton: {
        marginTop: vh(40),
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
    newUser: {
        fontFamily: fontFamily.muliRegular,
        fontSize: normalize(14),
        color: color.black,
        marginTop: vh(128),
        alignSelf: 'center'
    },
    signUPText: {
        fontFamily: fontFamily.muliBold,
        fontSize: normalize(16),
        color: color.black,
    }
})
