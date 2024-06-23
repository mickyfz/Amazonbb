import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import products from '../../../assetsy/data/products';
import ProductItembb from '../../componentsy/ProductItemy';

// const HomeScreenbb = ({searchValueStcky}: {searchValueStcky: string}) => {     // his code 
const HomeScreenbb = ({searchValueStcky}: {searchValueStcky?: string}) => {
        // own explore: I put them on optional Because vs code giving tapes keep error in `srcy\routery\bottomTabNavy\index.tsx`
  console.log(searchValueStcky);
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatListMemobb/>     
          {/* i put flatlist in new component sothat i can memoize it ...when you type something on the inputbox and it chane the state and all the thing again run... i didn't knew it happen like this.. but when i saw the terminal it is  own explore: GENIUS:
 */}
    </View>
  );
};


const FlatListMemobb =  React.memo(()=> {     
  return (
    <FlatList
        data={products}
        renderItem={({item}) => <ProductItembb item={item} />}
        showsVerticalScrollIndicator={false}   // we don't want scrll bar
      />
  )
})
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreenbb;
