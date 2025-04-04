import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useAuth } from '../../../AuthProvider';
import TextButton from '../Component/TextButton';
import {Icon} from '../../../Assets/Icon/Icon';
import Account from '../Component/Account';
import HeaderButtons from '../Component/HeaderButtons';

const SelectRoleScreen = () => {
  const navigation = useNavigation();
  const [useRole, setUseRole] = useState(null);
  const {setRole} = useAuth();

  const handleRole = () => {
    if (useRole) {
      setRole(useRole);
      navigation.navigate('Register', {role: useRole});
    } else {
      Alert.alert('Please select one role');
    }
  };

  return (
    <View style={styles.Container}>
      <HeaderButtons navigation={navigation} />
      <View style={styles.TextConatainer}>
        <Text style={styles.Title}>Who am I?</Text>
        <Text style={styles.Text}>Select any one role to register</Text>
      </View>
      <View style={styles.RoleContainer}>
        <View>
          <TouchableOpacity
            style={[
              styles.RoleInnerContainer,
              useRole === 'doctor' && styles.button,
            ]}
            onPress={() => setUseRole('doctor')}>
            <Icon
              type={'Fontisto'}
              name={'doctor'}
              size={78}
              color={useRole === 'doctor' ? 'white' : 'gray'}
            />
          </TouchableOpacity>

          <Text
            style={[styles.RoleText, useRole === 'doctor' && styles.RoleText2]}>
            I'm Practitioner
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.RoleInnerContainer,
              useRole === 'patient' && styles.button,
            ]}
            onPress={() => setUseRole('patient')}>
            <Icon
              type={'Fontisto'}
              name={'person'}
              size={78}
              color={useRole === 'patient' ? 'white' : 'gray'}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.RoleText,
              useRole === 'patient' && styles.RoleText2,
            ]}>
            I'm Patient
          </Text>
        </View>
      </View>
      <View style={styles.TextButtonContainer}>
        <TextButton
          text={'Next'}
          buttonstyle={styles.NextButton}
          style={styles.NextText}
          onPress={handleRole}
        />
        <Account
          text={'Login'}
          children={'Already have an account?  '}
          onPress={() => navigation.goBack('Login')}
        />
      </View>
    </View>
  );
};

export default SelectRoleScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 25,
  },
  TextConatainer: {
    flex: 0.5,
  },
  Title: {
    fontSize: 24,
    fontWeight: '500',
    margin: 15,
    textAlign: 'center',
  },

  Text: {
    fontSize: 18,
    marginHorizontal: 35,
    textAlign: 'center',
    color: 'gray',
  },
  RoleContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  RoleInnerContainer: {
    backgroundColor: '#fdfdfd',
    height: 150,
    width: 150,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#00C853',
  },
  RoleText: {textAlign: 'center', marginTop: 30, fontSize: 20, color: 'gray'},

  RoleText2: {color: 'black'},
  TextButtonContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  NextButton: {
    backgroundColor: '#00C853',
    height: 50,
    width: '60%',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NextText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
