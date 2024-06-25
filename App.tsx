import { View, Text } from 'react-native';
import React from 'react';

import HomeScreenbb from './srcy/screensy/HomeScreeny';
import ProductScreenbb from './srcy/screensy/ProductScreeny';
import ShopingCartScreenbb from './srcy/screensy/ShoopingCartScreeny';
import AddressScreenbb from './srcy/screensy/AddressScreeny';
import Routerbb from './srcy/routery';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import {  withAuthenticator,} from '@aws-amplify/ui-react-native';
const App = () => {
  return (
    // <View>
        //  You all see anything. baby. 
    // <View style={{flex:1}}>
          //  Now we are seeing everything. 
    <>
      {/* With view, we need to give flex:1. So that's why I am not using it after using React navigation.. own explore: */}
      {/* <HomeScreenbb/> */}
      {/* <ProductScreenbb/> */}
      {/* <ShopingCartScreenbb/> */}
      {/* <AddressScreenbb/> */}
      {/* <MyComponent/> */}
      <Routerbb/>

       {/* NOTE: to understand `amplify\backend\api\amazonbb\schema.graphql`  GO TO😝-->: `d:\Coding Playground\AI Chats\1.Amplify_API_Schema_Relations.md` */}
    </>
  )
}

export default withAuthenticator(App);