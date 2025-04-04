import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {doctors} from '../../../../Data';
import {Icon} from '../../../../Assets/Icon/Icon';
import RatingStar from './RatingStar';
import {useNavigation} from '@react-navigation/native';

import Model from './Model';

const List = () => {
  const navigation = useNavigation();


  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={doctors}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('Practitioner Details', {doctor: item})
              }>
              <View style={styles.ImageContainer}>
                <Image source={{uri: item.imageUrl}} style={styles.image} />
              </View>
              <View style={styles.TextContainer}>
                <View style={styles.InnerTextContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                <View style={styles.LocationContainer}>
                  <Icon
                    type={'Entypo'}
                    name={'location-pin'}
                    size={18}
                    color={'grey'}
                  />
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
                <RatingStar rating={item.rating} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.sortContainer}>
      <Model/>
      </View>
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    height: 115,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
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
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 55,
    marginRight: 10,
  },
  TextContainer: {
    flex: 1,
  },
  InnerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  LocationContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  locationText: {
    color: 'grey',
    fontSize: 14,
  },
  sortContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',

    borderWidth: 1,
    flex: 2.5,
  },
});
