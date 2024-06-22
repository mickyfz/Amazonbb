import React, {useState} from 'react';
import {View, Text,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './stylesy';
import product from '../../../assetsy/data/product';

import Buttonbb from '../../componentsy/Buttony';
import ImageCarouselbb from '../../componentsy/ImageCarousely';
import QuantitySelectorbb from '../../componentsy/QuantitySelectory';

const ProductScreenbb = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);
  
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
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Qunatiti selector */}
      <QuantitySelectorbb quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Buttonbb
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
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
