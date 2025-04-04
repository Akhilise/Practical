import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {Icon} from '../../../../Assets/Icon/Icon';

const SearchBar = () => {
  return (
    <View style={styles.Container2}>
      <View style={styles.IconContainer}>
        <Icon type={'AntDesign'} name={'search1'} size={20} color={'gray'} />
      </View>
      <TextInput placeholder="Search Practitioner" style={styles.TextInput} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  Container2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '90%',
    height: 45,
    alignItems: 'center',
    borderRadius: 14,
    marginTop: 65,
    marginBottom: 15,
  },
  IconContainer: {
    marginLeft: 10,
  },

  TextInput: {
    backgroundColor: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
});
