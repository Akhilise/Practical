import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextButton from './TextButton';

const Account = ({text,onPress,children ,}) => {
  return (
    <View style ={styles.Container}>
      <Text style={styles.accountText}>{children}</Text>
      <TextButton text={text} style={styles.Register} onPress={onPress} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
    Container:{flexDirection:'row',flex:1, marginTop:15},
  accountText: {fontSize: 18, color: 'gray' },
  Register: {color: '#00C853', fontSize: 18, fontWeight: 'bold'},
});
