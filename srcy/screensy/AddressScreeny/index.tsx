import React, {useState} from 'react';
import {  View,Text,TextInput,Alert,ScrollView,KeyboardAvoidingView,Platform,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';     // https://www.npmjs.com/package/country-list ... working perfect  ... But I don't know why giving errorx...if giving errorx then `npm i --save-dev @types/country-list` or Do whatever vscode suggest 😁
import Button from '../../componentsy/Buttony';
import styles from './styles';

// const countryList = require('country-list');
const countries = countryList.getData();

const AddressScreenbb = () => {
  const [country, setCountry] = useState(countries[18].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');

  console.log(fullname);

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
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }
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
