import React from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './stylesy';

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
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>

        {/* Ratings */}
    
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => {
            const starName = calculateStarNamebb(item.avgRating, i);
            return (
              <FontAwesome
                key={`${item.id}-${i}`}
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
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItembb;
