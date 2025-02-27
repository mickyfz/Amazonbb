import React from 'react';
import {Image, View, Text,Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './stylesy';
import {useNavigation} from '@react-navigation/native';


/* import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListbb } from '../../typesbb'; // adjust the path as necessary
type ProductDetailsScreenNavigationPropbb = StackNavigationProp<
  RootStackParamListbb,
  'ProductDetailsNm'
>;
 */

interface ProductItemPropsbb {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;      // this is optionalbb
  };
}

const ProductItembb = ({ item }: ProductItemPropsbb) => {
  const calculateStarNamebb = (rating:number, index:number) => {
    const floorRating = Math.floor(rating);
    console.log(index,' ---- ',floorRating);
    if (floorRating === rating) {
      // Exact integer rating, show 'star'
      console.log('xx ',index < floorRating ? 'star' : 'star-o');
      return index < floorRating ? 'star' : 'star-o';
    } else {
      // Decimal rating, show 'star' for whole part and 'star-half' for decimal
      console.log('xy ',index < floorRating ? 'star' : (index === floorRating ? 'star-half' : 'star-o'));
      return index < floorRating ? 'star' : (index === floorRating ? 'star-half' : 'star-o');
    }
  };
  console.log('-----------------',item.avgRating);





  const navigation = useNavigation();
  // const navigation = useNavigation<ProductDetailsScreenNavigationPropbb>();

  const onPressbb = () => {
    // navigation.navigate('ProductDetailsNm', {id: item.id});
            // it works just typescript is giving warning... just to solve this shit errorx i did all of this things             GO TO😝-->:codeStepReact QA-->24 
    navigation.navigate('ProductDetailsNm' as never, { id: item.id } as never);
  };
  return (
    <Pressable onPress={onPressbb} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>

        {/* Ratings */}
        
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => {
            const starName = calculateStarNamebb(item.avgRating, i);
            return (
              <FontAwesome
                key={`${item.id}-${i}`}      // if you don't give then `Warning: Each child in a list should have a unique "key" prop.`
                style={styles.star}
                // name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}      // his code but it don't work properly 
                name={starName}     // my code using chatgpt 💪🤣

                size={18}
                color={'#e47911'}
              />
            );
          })}
          <Text>{item.ratings}</Text>
        </View>




        <Text style={styles.price}>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItembb;
