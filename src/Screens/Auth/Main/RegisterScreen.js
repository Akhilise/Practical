import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderButtons from '../Component/HeaderButtons';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '../../../Assets/Icon/Icon';
import Input from '../Component/Input';
import ArrowButton from '../Component/ArrowButton';
import Account from '../Component/Account';
import {useAuth} from '../../../AuthProvider';

const RegisterScreen = () => {
  const {role} = useAuth();

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.Container}>
      <View>
        <HeaderButtons navigation={navigation} />
        <View style={styles.ImageContainer}>
          <View style={styles.IconBackground}>
            {role === 'doctor' ? (
              <Icon
                type={'Fontisto'}
                name={'doctor'}
                size={78}
                color={'grey'}
              />
            ) : (
              <Icon
                type={'Fontisto'}
                name={'person'}
                size={78}
                color={'#9d9d9d'}
              />
            )}
          </View>
        </View>
        <View style={styles.InputContainer}>
          <View>
            <Input text={'Name'} keyboardType={'default'} />
          </View>
          <View style={styles.space}>
            <Input text={'Country'} />
          </View>
          <View style={styles.space}>
            <Input text={'Phone Number'} keyboardType={'number-pad'} />
          </View>
          <View style={styles.space}>
            <Input text={'Password'} secureTextEntry autoCapitalize="none" />
          </View>
          <View style={styles.space}>
            <Input
              text={'Confirm Password'}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
          <ArrowButton
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Home', params: {role}}],
              });
            }}
          />
        </View>
        <View style={styles.InnerContainer3}>
          <Account
            children={'Already have account? '}
            text={'Login'}
            onPress={() => navigation.popTo('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    height: 140,
    width: 140,
    borderRadius: 100,
    backgroundColor: '#dbd7d7',
  },
  InputContainer: {
    flex: 4,
    margin: 25,
    padding: 15,
    borderRadius: 28,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  InnerContainer3: {
    flex: 0.5,
    alignItems: 'center',
  },
  space: {
    marginTop: 15,
  },
});
export default RegisterScreen;
