import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuth} from '../../../../AuthProvider';
import DoctorList from '../Component/DoctorList';
import { doctors } from '../../../../Data';
import { useNavigation } from '@react-navigation/native';

const Screens1 = () => {
   const DoctorSlice = doctors.slice(0, 2);
   const navigation = useNavigation();
  const {role} = useAuth();
  const handleRole = () => {
    if (role === 'doctor') {
      return 
    } else {
      return (
        <DoctorList
          data={DoctorSlice}
          onPress={doctor => {
            navigation.navigate('Details', doctor);
          }}
        />
      );
    }
  };

  return <View style={styles.container}>{handleRole()}</View>;
};

export default Screens1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
