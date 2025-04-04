/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import TextButton from '../Component/TextButton';
import Input from '../Component/Input';

const Verification = () => {
  const navigation = useNavigation();
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
  }, [navigation]);

  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>
          We have sent you access code via SMS for mobile number verification.
        </Text>
      </View>
      <View style={styles.InputContainer}>
        <Input placeholder={'Enter 6 digit code'} keyboardType={'number-pad'} maxLength={6}/>
      </View>
      <View style={styles.buttonContainer}>
        <TextButton text={'Resend Code'} style={styles.buttonText2} />

        <TextButton
          text={'Verify'}
          buttonstyle={styles.buttonstyle}
          style={styles.buttonText}
          onPress={()=>navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  Container: {flex: 1},

  TextContainer: {alignItems: 'center', marginTop: 35},

  Text: {
    fontSize: 18,
    marginHorizontal: 35,
    textAlign: 'center',
    color: 'gray',
  },
  InputContainer: {flex: 2, margin: 35, marginHorizontal:75, alignItems:'center'},

  buttonContainer: {
    flex: 3.5,
    alignItems: 'center',
  },

  buttonstyle: {
    backgroundColor: '#00C853',
    height: 40,
    width: '40%',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25,
  },
buttonText2:{
fontSize:16 ,
color:'grey',
},

  buttonText: {fontSize: 20, color: 'white', fontWeight: '700'},
});
