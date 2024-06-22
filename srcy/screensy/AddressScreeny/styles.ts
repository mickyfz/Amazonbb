import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    height: 40,
    // height: 250,     // Give it to understand 'KeyboardAvoidingView' in
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  errorLabel: {
    color: 'red',
  },
});

export default styles;
