import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonPropsbb {
  text: string;
  onPress: () => void;    // own explore:  GO TO😝-->:codeStepReact QA-->21
  containerStyles?: object;   // optional
}

const Buttonbb = ({ text, onPress, containerStyles }: ButtonPropsbb) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
  },
})

export default Buttonbb;
