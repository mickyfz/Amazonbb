import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenbb from '../../screensy/HomeScreeny';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStackbb from '../HomeStacky';
import ShoppingCartStackbb from '../ShoppingCartStacky';

const Taby = createBottomTabNavigator();

const BottomTabNavbb = () => {
  return (
    <Taby.Navigator
    
    // his code is being depreceated baby
      // tabBarOptions={{
      //   showLabel: false,
      //   inactiveTintColor: '#ffbd7d',
      //   activeTintColor: '#e47911',
      // }}

      screenOptions={{
        headerShown:false,  
        tabBarInactiveTintColor:'#ffbd7d',
        tabBarActiveTintColor:'e47911',
      }}
      >
      <Taby.Screen
        component={HomeStackbb}
        name="homeBotTabNm"
        options={{
          tabBarIcon: ({color}:{color:string}) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Taby.Screen
        component={HomeScreenbb}
        name="profileBotTabNm"
        options={{
          tabBarIcon: ({color}:{color:string}) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
      <Taby.Screen
        component={ShoppingCartStackbb}
        name="shopCartBotTabNm"
        options={{
          tabBarIcon: ({color}:{color:string}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Taby.Screen
        component={HomeScreenbb}
        name="moreBotTabNm"
        options={{
          tabBarIcon: ({color}:{color:string}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
    </Taby.Navigator>
  );
};

export default BottomTabNavbb;
