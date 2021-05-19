/**
 * OnBoarding Demo for React Native App
 */
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import NetInfo from '@react-native-community/netinfo'
import { View, StyleSheet, Image } from 'react-native'
import React, { ReactElement, useEffect, useState } from 'react'

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import screens from '../../utils/screens';
import ActionNames from '../../utils/actionNames';
import { updateInternetStatusFields } from '../../action/commonReduxAction';

interface Props {
    navigation: any
}

export default function SplashScreen({ navigation }: Props): ReactElement {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    function onAuthStateChanged(user: any) {
        setUser(user);
        user && dispatch({
            type: ActionNames.UPDATE_USER_DATA,
            payload: { ...{ email: user.email } }
        })
        console.log('firebase user ', user);
        if (initializing) setInitializing(false);
        setTimeout(() => {
            user ?
                navigation.navigate(screens.HOME_DRAWER)
                :
                navigation.navigate(screens.ONBOARDING_SCREENS, { screen: screens.LOGIN });
        }, 2000);
    }

    useEffect(() => {
        NetInfo.addEventListener(({ isConnected }) => handleConnectivityChange(isConnected));
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return () => {
            subscriber
        }
    }, [])

    /**
       * Handle internet connectivity change function.
       * @param isConnected 
       */
    function handleConnectivityChange(isConnected: boolean) {
        dispatch(updateInternetStatusFields('isConnected', isConnected))
    }

    return (
        <View style={styles.container}>
            <Image
                source={images.splashLogo}
                resizeMode={'contain'}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.startGradientBtn
    },
})