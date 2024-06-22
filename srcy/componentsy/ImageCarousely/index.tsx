import React, {useCallback, useState,useRef} from 'react';
import {View, Image, FlatList, StyleSheet,useWindowDimensions,ViewToken, Pressable } from 'react-native';

// const ImageCarouselbb = ({ images }: {images: [string]}) => {    // his code which is WRONG
const ImageCarouselbb = ({ images }: {images: string[]}) => {   //own explore:  It’s expecting a tuple with exactly one string ([string]), but you’re passing it an array of strings (string[]). To fix this, you need to change the type of the images prop in the ImageCarouselbb component to string[].
    // Now 'images' is expected to be an array of strings bb

  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  // const flatlistRefy = useRef();     // code works perfect but vscode  `No overload matches this call`
  const flatlistRefy = useRef<FlatList>(null);
      /* 
      
        The error "No overload matches this call" in VSCode with `ref={flatlistRefy}` likely indicates a type mismatch between the `flatlistRefy` variable and the expected type for the `ref` prop in your FlatList component.

        Here are the possible causes and solutions:

        **1. Missing Type Definition for `flatlistRefy`:**

        - If `flatlistRefy` is not defined with a type, TypeScript won't know what kind of value it holds.
        - **Solution:** Define the type of `flatlistRefy`. You can use either `React.RefObject<FlatList>` or a custom type based on the specific methods you access on the ref.

        **this is the solution with `React.RefObject<FlatList>`:**
      */


  // const onFlatlistUpdatebb = ({viewableItems}) => {     // he gives errorx:but id din't ...so yeah it's good to use usecallback baby    
  // const onFlatlistUpdatebb = useCallback(({viewableItems}) => {      
  const onFlatlistUpdatebb = useCallback(({viewableItems}:{viewableItems:Array<ViewToken>}    ) => {
            // `viewableItems` is an array which  consist of (ViewToken) objects.ViewToken is a type provided by React Native that describes the viewable items. own explore:
    if (viewableItems.length > 0) {
      // console.log('dd ',viewableItems);
      setActiveIndex(viewableItems[0].index || 0);
    }
    // console.log(viewableItems);
  },[]);

  return (
    <View style={styles.root}>
      <FlatList
        ref={flatlistRefy} 
        data={images}
        // keyExtractor={idcc}
      // keyExtractor={itz=>idcc} 
      // keyExtractor={itz=>console.log('xx ',itz)} 
      keyExtractor={itz=>itz} 
      // keyExtractor={(item, index) => index.toString()} // Use index as a key
      // keyExtractor={item => item.split('/').pop()}

      // keyExtractor={(item) => item} 
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}} 
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}


        viewabilityConfig={{
          // GO TO😝-->: https://reactnative.dev/docs/flatlist#viewabilityconfig for more info baby
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdatebb}



      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          // <Pressable onPress={()=>flatlistRefy.current.scrollToIndex({index})}      // code works fine but vscode `'flatlistRefy.current' is possibly 'null'.` which  indicates that TypeScript is warning you about potential null pointer exceptions. This happens because flatlistRefy.current could be null if the FlatList hasn't been rendered yet or if the ref hasn't been properly assigned.
          <Pressable onPress={()=>flatlistRefy.current?.scrollToIndex({index})}     
                /* 
                Optional Chaining (Nullish Coalescing Operator):
                  TypeScript supports optional chaining (?.) to access properties of potentially null or undefined values.
                  This allows you to gracefully handle cases where the ref might not be set yet.


                   NOTE:if you notice in `Airbnbxxbb\srcy\screensy\SearchResultsMapy\index.js` also also handle null or undefined value of flatlist ref is different way like `|| !flatlistRefy.current `
                */

          key={`dot-${image}`} // Ensure unique keys for each dot ...own explore: baby...very painful
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              }
            ]} />
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {

  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  }
})


export default ImageCarouselbb;
