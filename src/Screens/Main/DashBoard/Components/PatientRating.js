import { StyleSheet, Text, View ,FlatList,Image} from 'react-native';
import React from 'react';
import { patients } from '../../../../Data';
import RatingStar from './RatingStar';

const PatientRating = () => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={patients}
      renderItem={({item}) => (
        <View style={styles.Container}>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textInnerContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.ratingTimeText}>{item.ratingTime}</Text>
            </View>

            <View style={styles.ratingContainer}>
              <RatingStar rating={item.rating} />
            </View>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
};



const styles = StyleSheet.create({
  Container: {
    height: 135,
    width: '100%',
    padding: 25,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 38,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  textInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  nameText: {fontSize: 16, fontWeight: '600'},
  ratingTimeText: {textAlign: 'center', color: 'grey'},
  ratingContainer: {marginTop: 10},
  descriptionText: {color:'grey'},

});
export default PatientRating;