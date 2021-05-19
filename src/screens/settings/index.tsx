import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import color from '../../utils/color';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import SettingScreen from './settingScreen';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';

interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

function SettingScreenStack({ navigation, route }: Props) {
    return (
        <Stack.Navigator
            initialRouteName= {screens.SETTINGS_SCREEN}
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerStyle: {
                    backgroundColor: color.startGradientBtn
                },
                headerTintColor:color.white,
                headerTitleStyle: {
                    fontFamily: fontFamily.muliBold
                }
            }}>
            <Stack.Screen
                name={screens.SETTINGS_SCREEN}
                component={SettingScreen}
                options={{
                    title: 'Setting',
                }} />
        </Stack.Navigator>
    );
}

export default SettingScreenStack;