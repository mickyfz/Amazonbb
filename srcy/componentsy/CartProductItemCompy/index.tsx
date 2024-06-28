import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelectorbb from '../QuantitySelectory';
import styles from './stylesy';
import {CartProduct} from '../../../src/models/index';

// import {DataStore} from 'aws-amplify';    // old
import {DataStore} from 'aws-amplify/datastore';
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
const CartProductItembb = React.memo(({cartItem}: CartProductItemPropsbb) => {   // Please don't use memo, otherwise quantity is not updating.
// const CartProductItembb = ({cartItem}: CartProductItemPropsbb) => {
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
  
  const updateQuantity = async (newQuantity: number) => {
    console.log('update quantity bb');
    const originalbb = await DataStore.query(CartProduct, cartProduct.id);

    await DataStore.save(
      CartProduct.copyOf(originalbb, updated => {
        updated.quantity = newQuantity;

        /* 
        - This line uses `DataStore.save` to save an updated version of the `CartProduct` object.
        - `CartProduct.copyOf` creates a copy of the `originalbb` object.

              {   - `updated` in the callback function `updated => { updated.quantity = newQuantity; }` is this draft object.
              - The draft object (`updated`) initially contains the same data as `originalbb`.
              - Within the callback function, you can modify properties of the draft object (`updated`).
              - In this case, `updated.quantity` is set to the new value provided by `newQuantity`.
              }
        - The function passed to `copyOf` receives a draft of the original object [`originalbb` as ] (`updated`), and updates its `quantity` property to the value of `newQuantity`.
        - `DataStore.save` then saves this updated object back to the data store.
        */
       
      }),
    );
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
        {/* <QuantitySelectorbb quantity={quantity} setQuantity={setQuantity} /> */}
        <QuantitySelectorbb quantity={cartItem.quantity } setQuantity={updateQuantity} />
      </View>
    </View>
  );
});

export default CartProductItembb;
