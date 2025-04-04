import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Service = ({source}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <View style={styles.innerContainer}>
          <Image
            source={source}
            style={styles.image}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    height: 370,
    borderRadius: 25,

    overflow: 'hidden',
  },
  innerContainer: {
    // borderWidth: 3,
  },
  image: {
    width: '100%',
    height: 280,
  },
  TextContainer: {
    padding: 15,
    marginTop: 5,
  },
});
