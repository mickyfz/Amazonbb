import React, { useEffect, useState } from 'react';
import {View, StyleSheet, FlatList, Text, ActivityIndicator} from 'react-native';

import CartProductItembb from '../../componentsy/CartProductItemCompy';
import Button from '../../componentsy/Buttony';
// import products from '../../../assetsy/data/cart';

import {useNavigation} from '@react-navigation/native';

// import { Auth } from 'aws-amplify';    // old
import { getCurrentUser } from 'aws-amplify/auth';
// import {DataStore} from 'aws-amplify';    // old
import {DataStore} from 'aws-amplify/datastore';
// import {CartProduct} from '../../../src/models/index.js';
// both same baby..... 
import {CartProduct,Product} from '../../../src/models/';

const ShopingCartScreenbb = () => {
  const [myCartProductsy, setMyCartProductsy] = useState<CartProduct[]>([]);
  const navigation = useNavigation();
  const products=myCartProductsy;


  // fetching my products which i `add to cart`  from 'CartProducts' table 
  const fetchMyCartProductsbb = async () => {
    // const userData = await Auth.currentAuthenticatedUser();     // old
    const {  userId } = await getCurrentUser();
    console.log('idxx',userId);

    // TODO query only my cart items
    try{
      // const cartProducts = await DataStore.query(CartProduct, (cpy) =>cpy.quantity('eq', 5));
      // const cartProducts = await DataStore.query(CartProduct, cpy => cpy.userSub('eq', userId));
      // this is the new way...wasted so many times just to figure it out...i saw the documentation and thought they are same but when i copy and paste and start editing finally saw they are not  same ...fuck 💪
      // GO TO😝-->:https://docs.amplify.aws/gen1/react-native/build-a-backend/more-features/datastore/manipulate-data/#predicates
      const cartProducts = await DataStore.query(CartProduct, (c) => c.userSub.eq(userId));
      
      setMyCartProductsy(cartProducts);
      // console.log('22x ',cartProducts);
      console.log('xx ',myCartProductsy);
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }

  };
  useEffect(() => {
    fetchMyCartProductsbb();
  }, []);



  useEffect(() => {
    // if (myCartProductsy.filter(cp => !cp.product).length === 0) {    
      /*  his code..don't use 'product' which don't work because for weired reason. here is 'cp' and there no 'product' value exist but when 'cp.product' run it has `{"_h": 0, "_i": 0, "_j": null, "_k": null}`.... i don't know does this value given by allien or something else 
        {"_deleted": null, "_lastChangedAt": 1719402619101, "_version": 1, "createdAt": "2024-06-26T11:50:19.077Z", "id": "ba7b676e-99a4-448e-bc55-aab699863685", "option": "fugiatculpacupidata", "productID": "e652436c-171c-42ff-b139-1b83c8742db0", "quantity": 1, "updatedAt": "2024-06-26T11:50:19.077Z", "userSub": "e458b418-9061-7087-4856-9c95679f694e"}  */
    if (myCartProductsy.filter(cp => !cp.productybb).length === 0) {
      // NOTE:we just want to run this useEffect only `myCartProductsy` value fill with `cartProducts` data and in this useEffect we fetch theire product information from 'Product' table sothat we can display here.... 
      /* 
      i thope you understand this code. if not then first       GO TO😝-->:D:\Coding Playground\Extra code\Javascript Extra Code\4.filter.md

        This code checks if a shopping cart (`myCartProductsy`) has any empty items.

        Here's how it works:

        1. `filter(cp => !cp.productybb)`: This part filters the `myCartProductsy` list to only include items where the `productybb` property is missing (falsy value).
        2. `.length === 0`: This checks if the number of items left after filtering (`length`) is zero.
        3. Overall: If the condition is `true` (length is zero), it means there are no empty items in the cart.

        In simpler terms, it checks if there are any missing products in the cart.
        */

      // basically '!' false if you give any valid value
      /* console.log(! "fazle");     // false
      console.log(! undefined);     //true
      console.log(! null);        // true
      console.log(! [1,3]);        // false
       */

      myCartProductsy.filter(cp =>{
        console.log('xx -->',cp);
        console.log('xx1 -->',cp.productybb);
        console.log('xx2 -->',!cp.productybb);
       } 
      )
      console.log('blockedbb',myCartProductsy.filter(cp => !cp.product).length);
      console.log(myCartProductsy);
      return;
    }

    // GO TO😝-->:codeStepReact QA-->30
    const fetchProducts = async () => {
      console.log('fetchProducts called');
      // query all products that are used in cart
      const productsDtly = await Promise.all(
        myCartProductsy.map(cartProductzz =>   // GO TO😝-->:D:\Coding Playground\Extra code\Javascript Extra Code\6.map.md 
          DataStore.query(Product, cartProductzz.productID),
        ),
      );
      console.log('pp-- ',productsDtly);

      // to understand GO TO😝-->:D:\Coding Playground\AI Chats\2.amazonbb Statey.md
      // assign the products to the cart items
      setMyCartProductsy(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
          ...cartProduct,
          productybb: productsDtly.find(p => p.id === cartProduct.productID),  // GO TO😝-->:D:\Coding Playground\Extra code\Javascript Extra Code\5.find.md
        })),
      );
    };

    fetchProducts();
  }, [myCartProductsy]);

  const totalPrice = products.reduce(     // to understand .reduce function GO TO😝-->:D:\Coding Playground\Extra code\Javascript Extra Code\3bb.reduce.md
    (summedPrice, product) =>
      summedPrice + (product?.productybb?.price || 0)  * product.quantity,
    0,
  );

  const onCheckout = () => {
    // console.warn('checkout clicked');
    navigation.navigate('AddressNm');
          // NOTE: it's working just typescript giving errorx baby

  };

  // if (myCartProductsy.filter(cp => !cp.product).length !== 0) {
  if (myCartProductsy.filter(cp => !cp.productybb).length !== 0) {
    return <ActivityIndicator />;
  }

  return (
    // <Text>hello</Text>
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        // data={products}
        data={myCartProductsy}
        renderItem={({item}) => <CartProductItembb cartItem={item} />}
        showsVerticalScrollIndicator={false}

        // Instead of putting this view below our flat list, we are putting here So that. if we scroll, this view will also be scroll .. otherwise it will be stick at the top
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({myCartProductsy.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}      {/* Because of `.toFixed(2)` It will show only two number after the dot. like 12.55,2342.32  */}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShopingCartScreenbb;
