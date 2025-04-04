import {StyleSheet} from 'react-native';
import React from 'react';
import {useLayoutEffect} from 'react';
import TextButton from './TextButton';

const HeaderButtons = ({navigation}) => {
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
};

export default HeaderButtons;

const styles = StyleSheet.create({
  CancleButton: {
    fontSize: 18,
    color: 'white',
  },
});
