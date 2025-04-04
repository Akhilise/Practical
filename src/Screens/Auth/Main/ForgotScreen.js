/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextButton from '../Component/TextButton';
import Input from '../Component/Input';
import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

const ForgotScreen = () => {
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
      headerRight: () => {
        return (
          <>
            <TextButton
              text={'Cancel'}
              style={styles.CancleButton}
              buttonstyle={styles.cancel}
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
      <View style={styles.ImageContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3D1YnBEsBVhR1YvuUU10JdKl37XUNsOlhUQ&s',
          }}
          style={styles.Image}
        />
        <Text style={styles.Title}>Forgot your Password ?</Text>
        <Text style={styles.Text}>
          We just need your registered phone number to send you number
        </Text>
      </View>
      <View style={styles.InputContainer}>
        <Input text={'Phone Number'} />
        <View style={styles.button}>
          <TextButton
            text={'Send'}
            onPress={() => {
              navigation.goBack('Login');
            }}
            buttonstyle={styles.buttonstyle}
            style={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {flex: 1},

  ImageContainer: {flex: 1, alignItems: 'center'},

  Image: {marginTop: 35, height: 150, width: 150, borderRadius: 85},

  Title: {fontSize: 24, fontWeight: '500', margin: 15},

  Text: {
    fontSize: 18,
    marginHorizontal: 35,
    textAlign: 'center',
    color: 'gray',
  },

  InputContainer: {flex: 0.8, margin: 35},

  button: {alignItems: 'center', marginTop: 35},

  buttonstyle: {
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
  buttonText: {fontSize: 22, color: 'white', fontWeight: '700'},

  CancleButton: {
    fontSize: 18,
    color: 'white',
  },
  cancel: {},
});
export default ForgotScreen;
