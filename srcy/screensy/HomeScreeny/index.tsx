import React,{useState,useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

// import products from '../../../assetsy/data/products';
import ProductItembb from '../../componentsy/ProductItemy';

// import {DataStore} from 'aws-amplify';    // his code errorx:
import {DataStore} from 'aws-amplify/datastore';

// import {Product} from '../../../src/models/index.js';
import {Product} from '../../../src/models/index.js';
import { post } from 'aws-amplify/api';


// const HomeScreenbb = ({searchValueStcky}: {searchValueStcky: string}) => {     // his code 
const HomeScreenbb = ({searchValueStcky}: {searchValueStcky?: string}) => {
        // own explore: I put them on optional Because vs code giving tapes keep error in `srcy\routery\bottomTabNavy\index.tsx`
  console.log(searchValueStcky);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // i setup it using     https://docs.amplify.aws/gen1/react-native/build-a-backend/more-features/datastore/set-up-datastore/
    // GO TO😝-->:codeStepReact QA-->26 for what is `Datastore`
    DataStore.query(Product).then(setProducts);     // this is his code and it is the simpilest one 
    
    
    // learned from here https://docs.amplify.aws/gen1/react-native/build-a-backend/more-features/datastore/manipulate-data/#querying-for-all-items
    // DataStore.query(Product, (c) => c.avgRating.gt(4)).then(setProducts);     // you also can do like this ..own explore

    // you can also use it like function...it's good for understanding.... own explore:
   /*  const myfunc=async()=>{

      try {
        console.log('mytype is --xx--',typeof productsbb);
        const posts = await DataStore.query(Product);
        console.log('mytype2 is --xx--',typeof posts);
        console.log('Posts retrieved successfully!', post);

        // const datay= JSON.stringify(posts, null, 2);
        // console.log('mytype3 is --xx--',typeof datay);
        // console.log('Posts retrieved successfully!', datay);
        setProducts(posts)
      } catch (error) {
        console.log('Error retrieving posts', error);
      }
    } 
      
    myfunc()
    */


  }, []);

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      {/* <FlatListMemobb/>      */}
          {/* i put flatlist in new component sothat i can memoize it ...when you type something on the inputbox and it chane the state and all the thing again run... i didn't knew it happen like this.. but when i saw the terminal it is  own explore: GENIUS:
    */}
  <FlatListMemobb products={products} />
              {/* now we need to pass as props because previously it was a file which can be accessible from anywhere.. now it's an state which won't be accessible on anyother  */}
    </View>
  );
};


// const FlatListMemobb =  React.memo(()=> {  
const FlatListMemobb = React.memo(({ products }: { products: Product[] }) => {      
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
