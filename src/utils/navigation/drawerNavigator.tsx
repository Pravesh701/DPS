import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';

//Custom Imports
import screens from '../screens';

import color from '../color';
import images from '../images';
import { vh } from '../dimensions';
import SettingScreenStack from '../../screens/settings';
import MainBottomTabStack from './bottomTabNavigator';

interface Props {
  route: any;
  navigation: any;
  navigationProps?: any;
}

interface PropsDrawer {
  navigationProps: any;
}

const Drawer = createDrawerNavigator();

function getHeaderTitle({ route }: Props) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ExploreScreen':
      return 'Explore';
    case 'BottomTabStack':
      return 'Home';
  }
}

export const NavigationDrawerStructure = (props: PropsDrawer) => {

  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={images.drawerWhiteIcon}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function HomeDrawerStack() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerType={'slide'}
        overlayColor="transparent"
        drawerContentOptions={{
          activeTintColor: color.startGradientBtn,
          itemStyle: { marginVertical: vh(5) },
        }}
      >
        <Drawer.Screen options={{ drawerLabel: 'Home' }} name={screens.MAIN_BOTTOM_TAB_STACK} component={MainBottomTabStack} />
        <Drawer.Screen options={{ drawerLabel: 'Setting' }} name={screens.SETTING_SCREENS_STACK} component={SettingScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}