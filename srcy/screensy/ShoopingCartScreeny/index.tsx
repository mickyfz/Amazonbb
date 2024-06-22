import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import CartProductItembb from '../../componentsy/CartProductItemCompy';
import Button from '../../componentsy/Buttony';
import products from '../../../assetsy/data/cart';

const ShopingCartScreenbb = () => {

  const totalPrice = products.reduce(     // to understand .reduce function GO TO😝-->:D:\Coding Playground\Extra code\Javascript Extra Code\3bb.reduce.md
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const onCheckout = () => {
    console.warn('checkout clicked');
  };

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItembb cartItem={item} />}
        showsVerticalScrollIndicator={false}

        // Instead of putting this view below our flat list, we are putting here So that. if we scroll, this view will also be scroll .. otherwise it will be stick at the top
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{' '}
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
