import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { Icon } from '../../../../Assets/Icon/Icon';

const PatientDetail = ({data,onPress}) => {
  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={item => item.id}
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.Container}
          onPress={() => onPress({patient: item})}>
          <View style={styles.innerContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
          </View>
          <View style={styles.TextContainer}>
            <Text>{item.name}</Text>
            <View style={styles.InnerTextContainer}>
              <Text style={styles.text}>{item.date}</Text>
              <Text style={styles.text}> . </Text>
              <Text style={styles.text}>{item.time}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon
                type={'Entypo'}
                name={'location-pin'}
                size={18}
                color={'grey'}
              />
              <Text style={styles.locationText}>{item.Location}</Text>
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default PatientDetail;

const styles = StyleSheet.create({
  Container: {
    height: 135,
    width: '100%',
    padding: 15,
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
  innerContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 38,
  },
  TextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  InnerTextContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  text: {
    color: 'green',
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  locationText: {
    color: 'grey',
  },
});