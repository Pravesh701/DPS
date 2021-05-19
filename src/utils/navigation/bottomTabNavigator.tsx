import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Custom Imports
import colors from '../color';
import images from '../images';
import screens from '../screens';
import HomeStack from '../../screens/home';
import WinsStack from '../../screens/wins';
import MembersStack from '../../screens/members';
import ScheduleStack from '../../screens/schedule';

interface Props {
    route: any;
    navigation: any;
}

const Tab = createBottomTabNavigator();

const MainBottomTabStack = (props: Props) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconNameSource;
                if (route.name === screens.HOME_STACK) {
                    iconNameSource = focused ? images.inactiveHomeTab : images.inactiveHomeTab;
                } else if (route.name === screens.WINS_STACK) {
                    iconNameSource = focused ? images.inactiveProfile : images.inactiveProfile;
                } else if (route.name === screens.MEMBERS_STACK) {
                    iconNameSource = focused ? images.inactiveLibrary : images.inactiveLibrary;
                } else if (route.name === screens.SCHEDULE_STACK) {
                    iconNameSource = focused ? images.inactivePremium : images.inactivePremium;
                }
                return <Image style={{ tintColor: focused ? colors.startGradientBtn : colors.cloudBlue }} source={iconNameSource} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: colors.startGradientBtn,
                inactiveTintColor: colors.black,
            }}
        >
            <Tab.Screen options={{ title: 'Home' }} name={screens.HOME_STACK} component={HomeStack} />
            <Tab.Screen options={{ title: 'Members' }} name={screens.MEMBERS_STACK} component={MembersStack} />
            <Tab.Screen options={{ title: 'Wins' }} name={screens.WINS_STACK} component={WinsStack} />
            <Tab.Screen options={{ title: 'Schedule' }} name={screens.SCHEDULE_STACK} component={ScheduleStack} />
        </Tab.Navigator>
    );
}

export default MainBottomTabStack;
