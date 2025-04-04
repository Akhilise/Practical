/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet,View} from 'react-native';
import React from 'react';
import {useLayoutEffect} from 'react';
import TextButton from '../../../Auth/Component/TextButton';
import {useAuth} from '../../../../AuthProvider';
import DoctorDetails from '../../Appoinment/Component/DoctorDetails';
import Patient from '../Components/Patient';

const DetailScreen = ({route, navigation}) => {
  const {role} = useAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <>
            <TextButton
              type={'MaterialIcons'}
              name={'west'}
              size={30}
              color={'white'}
              onPress={() => {
                navigation.goBack('Login');
              }}
            />
          </>
        );
      },
    });
  });
  const handleRole = () => {
    if (role === 'doctor') {
      return<Patient route={route} navigation={navigation} />;

    } else {
      return  <DoctorDetails route={route} navigation={navigation} />;
    }
  };

  return <View style={styles.container}>{handleRole()}</View>;
};

export default DetailScreen;

const styles = StyleSheet.create({});
