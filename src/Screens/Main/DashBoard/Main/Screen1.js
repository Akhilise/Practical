import React from 'react';
import {View, StyleSheet} from 'react-native';
import {patients} from '../../../../Data';
import {useAuth} from '../../../../AuthProvider';
import PatientRating from '../Components/PatientRating';
import PatientDetail from '../Components/PatientDetail';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const {role} = useAuth() || {};
  const patientSlice = patients.slice(0, 2);
  const navigation = useNavigation();

  const handleRole = () => {
    if (role === 'doctor') {
      return (
        <PatientDetail
          data={patientSlice}
          onPress={patient => {
            navigation.navigate('Details', patient);
          }}
        />
      );
    } else {
      return <PatientRating />;
    }
  };

  return <View style={styles.container}>{handleRole()}</View>;
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
