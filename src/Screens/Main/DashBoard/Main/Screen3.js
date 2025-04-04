import { StyleSheet,  View } from 'react-native';
import React from 'react';
import { useAuth } from '../../../../AuthProvider';
import { patients } from '../../../../Data';
import { useNavigation } from '@react-navigation/native';
import PatientDetail from '../Components/PatientDetail';
import Specality from '../Components/Specality';

const Screen3 = () => {
  const {role} = useAuth() || {};
  const patientSlice = patients.slice(4, 6);
  const navigation = useNavigation();

  const handleRole = () => {
    if (role === 'doctor') {
      return (
        <PatientDetail
          data={patientSlice}
          onPress={patient => {
            navigation.navigate('Details', {patient, buttonCount: 3});
          }}
        />
      );
    } else {
      return <Specality/>;
    }
  };

  return <View style={styles.container}>{handleRole()}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
export default Screen3;

