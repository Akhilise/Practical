import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import { Icon } from '../../../../Assets/Icon/Icon';
import RatingStar from '../../DashBoard/Components/RatingStar';
import Detailbutton from '../../DashBoard/Components/Detailbutton';


const DoctorDetails = ({route}) => {
  const doctor = route.params.doctor;
  return (
    <View style={styles.View}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{uri: doctor.imageUrl}} style={styles.image} />
        </View>
        <View style={styles.TextContainer}>
          <Text>{doctor.name}</Text>
          <View style={styles.locationContainer}>
            <Icon
              type={'Entypo'}
              name={'location-pin'}
              size={18}
              color={'grey'}
            />
            <Text style={styles.locationText}>{doctor.Location}</Text>
          </View>
          <RatingStar rating={doctor.rating} />
        </View>
      </View>
      <Text style={styles.Title}>Appointment Details</Text>
      <View style={styles.container2}>
        <View style={styles.detail}>
          <Icon type={'Feather'} name={'calendar'} size={25} color={'grey'} />
          <Text style={styles.text}>{doctor.date}</Text>
        </View>
        <View style={styles.detail}>
          <Icon
            type={'MaterialIcons'}
            name={'access-time'}
            size={25}
            color={'grey'}
          />
          <Text style={styles.text}>{doctor.time}</Text>
        </View>
        <View style={styles.detail}>
          <Icon type={'MaterialIcons'} name={'menu'} size={25} color={'grey'} />
          <Text style={styles.text}>{doctor.description}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Detailbutton />
      </View>
    </View>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  View: {
    padding: 15,
  },
  container: {
    height: 115,
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
  locationContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  locationText: {
    color: 'grey',
  },
  Title: {
    fontSize: 20,
    color: 'grey',
  },
  container2: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 35,
    borderRadius: 15,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 3, height: 2},
    padding: 15,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  text: {
    marginLeft: 10,
    marginHorizontal: 30,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '75%',
    alignItems: 'center',
  },
});
