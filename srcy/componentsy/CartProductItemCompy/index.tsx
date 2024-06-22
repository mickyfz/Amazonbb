import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelectorbb from '../QuantitySelectory';
import styles from './stylesy';

interface CartProductItemPropsbb {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}
// this component is copied from `D:\Coding Playground\not.just.dev code bb\Amazon\Amazonbb\srcy\componentsy\ProductItemy\index.tsx` and then modified 
const CartProductItembb = ({cartItem}: CartProductItemPropsbb) => {
  const {quantity: quantityProp, item} = cartItem;      // Alias: You're assigning the value of the `quantity` property to a new variable named `quantityProp`. This alias (`quantityProp`) serves as a temporary name within the component's scope, potentially making the code more descriptive in your specific context.

  const [quantity, setQuantity] = useState(quantityProp);     

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
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
         
          <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => {
            const starName = calculateStarNamebb(item.avgRating, i);
            return (
              <FontAwesome
                key={`${item.id}-${i}`}      // if you don't give then `Warning: Each child in a list should have a unique "key" prop.`
                style={styles.star}
                name={starName}     // my code using chatgpt 💪🤣

                size={18}
                color={'#e47911'}
              />
            );
          })}
          <Text>{item.ratings}</Text>
        </View>


          <Text style={styles.price}>
            from ${item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
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
