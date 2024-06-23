import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoopingCartScreenbb from '../../screensy/ShoopingCartScreeny';
import AddressScreenbb from '../../screensy/AddressScreeny';

const Stackbb = createStackNavigator();

const HomeStackbb = () => {
  return (
    <Stackbb.Navigator>
      <Stackbb.Screen
        component={ShoopingCartScreenbb}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stackbb.Screen
        component={AddressScreenbb}
        name="AddressNm"
        options={{title: 'Address'}}
      />
    </Stackbb.Navigator>
  );
};

export default HomeStackbb;
