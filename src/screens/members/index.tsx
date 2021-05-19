import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Custom Imports
import Followed from '../followed';
import color from '../../utils/color';
import screens from '../../utils/screens';
import MembersList from './membersList';
import fontFamily from '../../utils/fonts';
import { NavigationDrawerStructure } from '../../utils/navigation/drawerNavigator';
import Strings from '../../utils/strings';


interface Props {
    route: any;
    navigation: any;
}

const Stack = createStackNavigator();

const MembersStack = (props: Props) => {
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
                name={screens.MEMBER_LIST_SCREEN}
                component={MembersList}
                options={{
                    title: Strings.members
                }}
            />
            <Stack.Screen
                name="Followed"
                component={Followed}
                options={{ title: Strings.groups }}
            />
        </Stack.Navigator>
    );
}

export default MembersStack;