import * as React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Custom Imports
import { store } from './store';
import color from './utils/color';
import Login from './screens/login';
import SignUp from './screens/signUp';
import screens from './utils/screens';
import fontFamily from './utils/fonts';
import { normalize } from './utils/dimensions';
import SplashScreen from './screens/splash/splash';
import ForgetPassword from './screens/forgetPassword';
import HomeDrawerStack from './utils/navigation/drawerNavigator';

const Stack = createStackNavigator();

function OnboardingScreen() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: color.startGradientBtn,
            },
            headerTintColor: color.white,
            headerTitleStyle: {
                fontFamily: fontFamily.muliBold,
                fontSize: normalize(16)
            },
            headerBackTitleVisible: false
        }} initialRouteName={screens.LOGIN}>
            <Stack.Screen options={{
                headerLeft: () => null,
            }} name={screens.LOGIN} component={Login} />
            <Stack.Screen options={{
                headerTitle: 'Create Account',
            }} name={screens.SIGN_UP} component={SignUp} />
            <Stack.Screen options={{
                headerTitle: 'Forgot Password',
            }} name={screens.FORGET_PASSWORD} component={ForgetPassword} />
        </Stack.Navigator>
    );
}

function MainAppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screens.SPLASH_SCREEN}>
                <Stack.Screen name={screens.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={screens.ONBOARDING_SCREENS} component={OnboardingScreen} />
                <Stack.Screen name={screens.HOME_DRAWER} component={HomeDrawerStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function App() {
    return (
        <Provider store={store}>
            <MainAppContainer />
        </Provider>
    );
}

export default App;