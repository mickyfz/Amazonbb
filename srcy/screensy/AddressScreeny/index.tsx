import React, {useState} from 'react';
import {  View,Text,TextInput,Alert,ScrollView,KeyboardAvoidingView,Platform,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';     // https://www.npmjs.com/package/country-list ... working perfect  ... But I don't know why giving errorx...if giving errorx then `npm i --save-dev @types/country-list` or Do whatever vscode suggest 😁
import Button from '../../componentsy/Buttony';
import styles from './styles';
// import {DataStore} from 'aws-amplify';    // old
import {DataStore} from 'aws-amplify/datastore';
// import { Auth } from 'aws-amplify';    // his code
import { getCurrentUser } from 'aws-amplify/auth';
import {Order,CartProduct,OrderProduct} from '../../../src/models/index.js';
import {useNavigation} from '@react-navigation/native';


// const countryList = require('country-list');
const countries = countryList.getData();
// const navigation = useNavigation();    
/* 
you will see error like 
      ` ERROR  Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
    See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
    ERROR  TypeError: Cannot read property 'useContext' of null, js engine: hermes`
 */ 


const AddressScreenbb = () => {
  const [country, setCountry] = useState(countries[18].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');

  console.log(fullname);
const navigation = useNavigation();    

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fix Address field errors before submiting');
      return;
    }

    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }

    if (!phone) {
      Alert.alert('Please fill in the phone number field');
      return;
    }

    console.warn('Success. CHeckout');
    saveOrderbb()
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }
  };

  const saveOrderbb = async () => {
    console.log('save this order');
    // get user details
    // const userData = await Auth.currentAuthenticatedUser();    //old
    const {  userId } = await getCurrentUser();

    // console.log(userData.attributes.sub);
    console.log(userId);

    // create a new order in the 'order' table without the products details
    const newOrderbb = await DataStore.save(
      new Order({
        // userSub: userData.attributes.sub,
        userSub: userId,
        fullName: fullname,
        phoneNumber: phone,
        country,
        city,
        address,
      }),
    );
    console.log('newOrderbb--> ',newOrderbb);

    // fetch all OF MY cart items
            // old way
              // const cartItemsbb = await DataStore.query(CartProduct, cp =>
              //   cp.userSub('eq', userData.attributes.sub),
              // );
              // GO TO😝-->:https://docs.amplify.aws/gen1/react-native/build-a-backend/more-features/datastore/manipulate-data/#predicates
    const cartItemsbb = await DataStore.query(CartProduct, (c) => c.userSub.eq(userId));
      

    // attach all cart items to the order ... we are putting all of our `cartitem` product into the `OrderProduct` table with the previous order `newOrderbb` we did....  automatically all the products with upper 'neworderbb' id will also be update on the 'order' table bb
    // if you delete any order from `order` table than all the 'orderproduct' will automatically be delete everything own explore: baby
    await Promise.all(
      cartItemsbb.map(cartItem =>
        DataStore.save(
          new OrderProduct({
            quantity: cartItem.quantity,
            option: cartItem.option,
            productID: cartItem.productID,
            orderID: newOrderbb.id,
          }),
        ),
      ),
    );

    // delete all of MY cart items from `CartProduct`
    await Promise.all(cartItemsbb.map(cartItemy => DataStore.delete(cartItemy)));

    // redirect home
    navigation.navigate('homeBotTabNm');
  };
  return (
    <KeyboardAvoidingView     // when we open keyboard to type it should not be hide our box 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            {/* GO TO😝-->:codeStepReact QA-->22 ....Please change 'input' field height to see is they are working or not */}
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {/* {countries.map(country => ( */}
            {countries.map((country, index) => (    // We give keep a party otherwise it's giving warning.
              <Picker.Item  key={index} value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}      // because of it numper only showing 
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}      // after writing our text when on we click on something else this will trigger.... it's good because we don't want to validate after every keystroke bb
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreenbb;
