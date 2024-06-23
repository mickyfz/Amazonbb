import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenbb from '../../screensy/HomeScreeny';
import ProductScreenbb from '../../screensy/ProductScreeny';
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import { RootStackParamListbb } from '../../typesbb';

const Stackbb = createStackNavigator();
// const Stackbb = createStackNavigator<RootStackParamListbb>();

interface HeaderComponentProps {
  searchValue: string;
  // setSearchValue: () => void;     // This is hot, he was even but WRONG bb
  setSearchValue: (baby:string) => void;
    // own explore:
}

const HeaderComponentbb = ({searchValue,setSearchValue,}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10,
            width:'100%'      // own explore:otherwise it takes only `Search...` and we need to click there to type GENIUS:
          }}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStackbb = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stackbb.Navigator
      screenOptions={{
        header: () => (<HeaderComponentbb searchValue={searchValue} setSearchValue={setSearchValue} />),
    }}>
      
      <Stackbb.Screen name="HomeScreenNm" options={{title: 'Home'}}>
        {() => <HomeScreenbb searchValueStcky={searchValue} />}
      </Stackbb.Screen>
      <Stackbb.Screen component={ProductScreenbb} name="ProductDetailsNm" />
    </Stackbb.Navigator>
  );
};

export default HomeStackbb;
