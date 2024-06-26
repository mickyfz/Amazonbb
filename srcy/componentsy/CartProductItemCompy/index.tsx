import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelectorbb from '../QuantitySelectory';
import styles from './stylesy';
import {CartProduct} from '../../../src/models/index';

// his code which works perfectly and easy
/* 
interface CartProductItemPropsbb {
  cartItem: CartProduct;
} 
*/

// MY CODE i did it only for you just to boost your confidence
import {Product} from '../../../src/models/index';
interface CartProductItemPropsbb {
  cartItem:{
    id: string;
    quantity: number;
    option: string;
    productybb:Product;
  }
} 

// this component is copied from `D:\Coding Playground\not.just.dev code bb\Amazon\Amazonbb\srcy\componentsy\ProductItemy\index.tsx` and then modified 
const CartProductItembb = ({cartItem}: CartProductItemPropsbb) => {
  // const {quantity: quantityProp, item} = cartItem;      // Alias: You're assigning the value of the `quantity` property to a new variable named `quantityProp`. This alias (`quantityProp`) serves as a temporary name within the component's scope, potentially making the code more descriptive in your specific context.
  // const {product, ...cartProduct} = cartItem;
  const {productybb, ...cartProduct} = cartItem;

  console.log('--xx> ',productybb);
  const [quantity, setQuantity] = useState(cartItem.quantity);     

  const calculateStarNamebb = (rating:number, index:number) => {
    const floorRating = Math.floor(rating);
    console.log(index,' ---- ',floorRating);
    if (floorRating === rating) {
      console.log('xx ',index < floorRating ? 'star' : 'star-o');
      return index < floorRating ? 'star' : 'star-o';
    } else {
      console.log('xy ',index < floorRating ? 'star' : (index === floorRating ? 'star-half' : 'star-o'));
      return index < floorRating ? 'star' : (index === floorRating ? 'star-half' : 'star-o');
    }
  };
  
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: productybb.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {productybb.title}
          </Text>
          {/* Ratings */}
         
          <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => {
            const starName = calculateStarNamebb(productybb.avgRating, i);
            return (
              <FontAwesome
                key={`${productybb.id}-${i}`}      // if you don't give then `Warning: Each child in a list should have a unique "key" prop.`
                style={styles.star}
                name={starName}     // my code using chatgpt 💪🤣

                size={18}
                color={'#e47911'}
              />
            );
          })}
          <Text>{productybb.ratings}</Text>
        </View>


          <Text style={styles.price}>
            from ${productybb.price.toFixed(2)}
            {productybb.oldPrice && (
              <Text style={styles.oldPrice}> ${productybb.oldPrice.toFixed(2)}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelectorbb quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItembb;
