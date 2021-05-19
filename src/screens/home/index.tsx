import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import Groups from '../groups';
import HomeScreen from './home';
import color from '../../utils/color';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';
import WritePost from '../writePost';

interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

const HomeStack = (props: Props) => {
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
                name={screens.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name= {screens.WRITE_POST}
                component={WritePost}
                options={{ title: 'Write Post' }}
            />
            <Stack.Screen
                name="Groups"
                component={Groups}
                options={{ title: 'Groups' }}
            />
        </Stack.Navigator>

    );
}

export default HomeStack;