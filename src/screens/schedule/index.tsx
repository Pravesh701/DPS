import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import color from '../../utils/color';
import ScheduleScreen from './schedule';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';
import Strings from '../../utils/strings';

interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

const ScheduleStack = (props: Props) => {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => <NavigationDrawerStructure navigationProps={props.navigation} />,
            headerStyle: {
                backgroundColor: color.startGradientBtn
            },
            headerTintColor: color.white,
            headerTitleStyle: {
                fontFamily: fontFamily.muliBold
            }
        }}>
            <Stack.Screen
                name={screens.SCHEDULE_SCREEN}
                component={ScheduleScreen}
                options={{
                    title: Strings.schedule,
                }}
            />
        </Stack.Navigator>
    );
}

export default ScheduleStack;
