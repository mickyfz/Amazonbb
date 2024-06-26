import React, {useEffect, useState} from 'react';
import {View, Text,ScrollView,ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './stylesy';
// import product from '../../../assetsy/data/product';

import {CartProduct} from '../../../src/models';
import Buttonbb from '../../componentsy/Buttony';
import ImageCarouselbb from '../../componentsy/ImageCarousely';
import QuantitySelectorbb from '../../componentsy/QuantitySelectory';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Product} from '../../../src/models/index.js';


// import {DataStore} from 'aws-amplify';    // his code errorx:
import {DataStore} from 'aws-amplify/datastore';

// import { Auth } from 'aws-amplify';    // his code
import { getCurrentUser } from 'aws-amplify/auth';
const ProductScreenbb = () => {
  // const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);

  const [product, setProduct] = useState<Product | undefined>(undefined);
        /* 
        `<Product | undefined>` is a TypeScript type annotation. It specifies that the state can either be of type Product or undefined. This means the state can either hold a Product object or be undefined, providing flexibility and type safety.

        Initial State: `useState<Product | undefined>(undefined)` initializes the state to undefined. This is useful when the state might be initially empty or unknown, such as when you're waiting to fetch data.
        */
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

const route = useRoute();
const navigation = useNavigation();

console.log('--------xxx----',route.params);


useEffect(() => {
  if (!route.params?.id) {
    return;
  }
  DataStore.query(Product, route.params?.id).then(setProduct);
  console.log('product -->', product);
}, [route.params?.id]);

useEffect(() => {
  if (product?.options) {
    setSelectedOption(product.options[0]);
  }
}, [product]);

const onAddToCart = async () => {
  // const userData = await Auth.currentAuthenticatedUser();    // his code..it's being depreciated baby

  // learned from here baby `https://docs.amplify.aws/gen1/react-native/build-a-backend/auth/manage-user-session/#retrieve-your-current-authenticated-user` userid and 'sub' is same . i think
  const {  userId,signInDetails } = await getCurrentUser();
  console.log('userId---> ',userId);
  // if (!product || !userData) {
  if (!product || !userId) {
    return;
  }

  const newCartProductbb = new CartProduct({
    // userSub: userData.attributes.sub,
    userSub: userId,
    quantity,
    option: selectedOption,
    productID: product.id,
  });

  await DataStore.save(newCartProductbb);
  navigation.navigate('shopCartBotTabNm');
};

// this is an GENIUS: solution 💪
if (!product) {
  // return <Text>Loading...</Text>; // Or any loading indicator you prefer

  // instead of text using loading screen
  return (
    // <View style={styles.loadingContainer}>
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ); // Or any loading indicator you prefer
}


  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}
      <ImageCarouselbb images={product.images}  />

      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}>
        {/* {product.options.map(option => ( */}
        {product.options.map((option, index) => (
          // <Picker.Item label={option} value={option} />
          <Picker.Item key={index} label={option} value={option} />     // key is own explore: baby..otherwise gives warning which i don't like 
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Qunatiti selector */}
      <QuantitySelectorbb quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Buttonbb
        text={'Add To Cart'}
        onPress={onAddToCart}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Buttonbb
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreenbb;
