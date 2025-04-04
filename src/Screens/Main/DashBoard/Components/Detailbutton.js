import {StyleSheet} from 'react-native';
import React from 'react';
import TextButton from '../../../Auth/Component/TextButton';

const Detailbutton = ({button}) => {
  return (
    <>
      {button === 1 && (
        <>
          <TextButton
            text={'REJECT'}
            buttonstyle={styles.buttonstyle}
            style={styles.text1}
          />
          <TextButton
            text={'ACCEPT'}
            buttonstyle={styles.buttonstyle2}
            style={styles.text1}
          />
        </>
      )}
      {button === 2 && (
        <>
          <TextButton
            text={'Mark As Complete'}
            buttonstyle={styles.buttonstyle2}
            style={styles.text1}
          />
        </>
      )}

      {button === 3 && (
        <>
          <TextButton
            text={'Rate Patient'}
            buttonstyle={styles.buttonstyle2}
            style={styles.text1}
          />
        </>
      )}
    </>
  );
};

export default Detailbutton;

const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: '#e93b19',
    height: 50,
    width: '40%',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle2: {
    backgroundColor: '#00C853',
    height: 50,
    width: '40%',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
