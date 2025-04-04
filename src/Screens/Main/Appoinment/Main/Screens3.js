import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuth} from '../../../../AuthProvider';

const Screens3 = () => {
  const {role} = useAuth();
  const handleRole = () => {
    if (role === 'doctor') {
      return;
    } else {
      return;
    }
  };

  return <View style={styles.container}>{handleRole()}</View>;
};

export default Screens3;

const styles = StyleSheet.create({});
