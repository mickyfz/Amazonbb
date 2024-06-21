import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import products from '../../../assetsy/data/products';
import ProductItembb from '../../componentsy/ProductItemy';

const HomeScreenbb = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItembb item={item} />}
        showsVerticalScrollIndicator={false}   // we don't want scrll bar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreenbb;
