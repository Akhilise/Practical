import React from 'react';
import {View, StyleSheet} from 'react-native';
import {patients} from '../../../../Data';
import {useAuth} from '../../../../AuthProvider';
import PatientRating from '../Components/PatientRating';
import PatientDetail from '../Components/PatientDetail';
import {useNavigation} from '@react-navigation/native';
import Service from '../Components/Service';

const Screen1 = () => {
  const {role} = useAuth() || {};
  const patientSlice = patients.slice(2, 4);
  const navigation = useNavigation();

  const handleRole = () => {
    if (role === 'doctor') {
      return (
        <PatientDetail
          data={patientSlice}
          onPress={patient => {
            navigation.navigate('Details', {
              patient,
              buttonCount: 2,
            });
          }}
        />
      );
    } else {
      return <Service/>;
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
