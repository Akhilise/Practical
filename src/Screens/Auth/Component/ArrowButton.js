import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextButton from './TextButton';

const ArrowButton = ({onPress}) => {
  return (
    <View style={styles.arrowButton}>
      <TextButton
        type="Feather"
        name="arrow-right"
        size={40}
        color="white"
        buttonstyle={styles.buttonstyle}
        onPress={onPress}
      />
    </View>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  arrowButton: {alignItems: 'center', marginTop: 40},

  buttonstyle: {
    backgroundColor: '#00C853',
    height: 50,
    width: 90,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
