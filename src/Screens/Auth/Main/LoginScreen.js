import { Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../Component/Input';
import TextButton from '../Component/TextButton';

import Account from '../Component/Account';
import ArrowButton from '../Component/ArrowButton';

const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Verification');
  };

  const handleForgot = () => {
    navigation.navigate('Forgot Password');
  };

  const handleRegistration = () => {
    navigation.navigate('Select Role');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.InnerContainer}>
        <Image
          source={{
            uri: 'https://www.teouty.com/wp-content/uploads/2020/05/cropped-logoTeoutym-2.png',
          }}
          style={styles.Image}
        />
        <Text style={styles.Title}>Teouty</Text>
      </View>

      <View style={styles.InnerContainer2}>
        <Input text={'Phone Number'} keyboardType={'number-pad'} />
        <View style={styles.passwordContainer}>
          <Input text={'Password'} secureTextEntry autoCapitalize="none" />
        </View>

        <View style={styles.forgotContainer}>
          <TextButton
            text={'Forgot Password?'}
            style={styles.Text}
            onPress={handleForgot}
          />
        </View>
        <ArrowButton onPress={handleLogin} />
      </View>
      <View style={styles.InnerContainer3}>
        <Account
          onPress={handleRegistration}
          text={'Register'}
          children={"Don't have an account? "}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {flex: 1},

  Image: {width: 125, height: 125, borderRadius: 28, marginTop: 35},

  Title: {textAlign: 'center', fontSize: 34, marginTop: 20, fontWeight: 'bold'},

  InnerContainer: {flex: 2, alignItems: 'center'},

  InnerContainer2: {
    flex: 3,
    margin: 35,
    padding: 25,
    borderRadius: 28,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  passwordContainer: {marginTop: 30},

  forgotContainer: {alignItems: 'flex-end', marginTop: 15},

  Text: {color: 'gray', fontWeight: 'heavy', fontSize: 16},

  InnerContainer3: {
    flex: 1.3,
    alignItems: 'center',
  },
});

export default LoginScreen;
