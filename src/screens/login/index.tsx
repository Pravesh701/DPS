import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Text, ScrollView, BackHandler, Alert } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import constant from '../../utils/constants';
import Loader from '../../components/loader';
import { ReducersModal } from '../../utils/modals';
import { vw, vh, normalize } from '../../utils/dimensions';
import { updateUserDataFields, signInWithEmailAndPassword } from './action';
import { handleValidationEmail, handleValidationPassword } from '../../utils/commonMethods';

interface Props {
    route: any;
    navigation: any;
}

const Login = (props: Props) => {

    const dispatch = useDispatch();
    const [showPassword, toggleShowPassword] = useState(true);
    const { email, password } = useSelector((state: ReducersModal) => state.userDataReducer);
    const { commonLoading } = useSelector((state: ReducersModal) => state.globalLoaderReducer);

    //refs
    const emailRef: any = React.createRef();
    const passwordRef: any = React.createRef();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backButtonClick);
        }
    }, [])

    const backButtonClick = () => {
        console.log('backButtonClick login')
        if (props.navigation && props.navigation.goBack) {
            Alert.alert("Exit", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Exit", onPress: () => BackHandler.exitApp() }
            ], { cancelable: true });
            return true;
        }
        return false;
    }

    const onChangeText = (key: string, value: any) => {
        switch (key) {
            case 'email':
                dispatch(updateUserDataFields('email', value))
                break;
            case 'password':
                dispatch(updateUserDataFields('password', value))
                break;
            default:
                break;
        }
    }

    const handleForgetPassword = () => {
        props.navigation.navigate(screens.ONBOARDING_SCREENS, { screen: screens.FORGET_PASSWORD });
    }

    const handleLogin = async () => {
        let emailError = handleValidationEmail("email", email),
            passwordError = handleValidationPassword('password', password)
        if (emailError) {
            constant.showSnackBar(emailError)
            return
        } else if (passwordError) {
            constant.showSnackBar(passwordError)
            return
        } else {
            dispatch(signInWithEmailAndPassword(props.navigation));
        }
    };

    const handleSignup = () => {
        props.navigation.navigate(screens.ONBOARDING_SCREENS, { screen: screens.SIGN_UP });
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
                commonLoading && <Loader isVisible={commonLoading} />
            }
            <ScrollView>
                <Image resizeMode={'contain'} style={styles.logoImage} source={images.logoImage} />
                <TextInput
                    value={email}
                    onChangeText={(val: any) => onChangeText('email', val)}
                    style={styles.emailFieldStyle}
                    placeholder={'Email ID'}
                    ref={emailRef}
                    returnKeyType={'next'}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <TextInput
                    value={password}
                    ref={passwordRef}
                    onChangeText={(val: any) => onChangeText('password', val)}
                    style={styles.passwordFieldStyle}
                    placeholder={'Password'}
                    returnKeyType={'done'}
                    secureTextEntry={showPassword}
                    onSubmitEditing={handleLogin}
                />
                <Text onPress={handleForgetPassword} style={styles.forgetPass}>Forgot Password?</Text>
                <TouchableOpacity
                    onPress={handleLogin}
                    activeOpacity={0.8}
                    // disabled = { emailVal === '' && passwordVal === '' }
                    style={styles.gradientButton}>
                    {renderLinearGradient('Login')}
                </TouchableOpacity>
                <Text onPress={handleSignup} style={styles.newUser}>
                    I’m a new user, <Text style={styles.signUPText}>SIGN UP</Text>
                </Text>
            </ScrollView>
        </View>
    )
}

export default Login;

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
    forgetPass: {
        fontFamily: fontFamily.muliRegular,
        fontSize: normalize(12),
        color: color.black,
        marginTop: vh(12),
        alignSelf: 'flex-end'
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
