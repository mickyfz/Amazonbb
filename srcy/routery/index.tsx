import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavbb from './bottomTabNavy';
import HomeScreenbb from '../screensy/HomeScreeny';

const Stackbb = createStackNavigator();

const Routerbb = () => {
  return (
    <NavigationContainer>
      <Stackbb.Navigator screenOptions={{headerShown: false}}>
        <Stackbb.Screen component={BottomTabNavbb} name="HomeTabsNm" />
        {/* <Stackbb.Screen component={HomeScreenbb} name="HomeTabs" /> */}
      </Stackbb.Navigator>
    </NavigationContainer>
  );
};

export default Routerbb;
