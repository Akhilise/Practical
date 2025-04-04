/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import TextButton from '../../../Auth/Component/TextButton';
import {Icon} from '../../../../Assets/Icon/Icon';
import RatingStar from '../Components/RatingStar';
import TopTabScreens from './TopTabScreens';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import {Calendar} from 'react-native-calendars';
import {timeSlots} from '../../../../Data';
import Screens1 from '../../Appoinment/Main/Screens1';

const PractitionerDetail = ({navigation, route}) => {
  const {doctor} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimeList, setShowTimeList] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TextButton
          type={'MaterialIcons'}
          name={'west'}
          size={30}
          color={'white'}
          onPress={() => navigation.goBack('Login')}
        />
      ),
    });
  }, [navigation]);

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    setShowTimeList(true);
  };

  const handleBooking = () => {
    setModalVisible(true);
  };

  const handleTimeSelect = time => {
    setSelectedTime(time);
    
  };

  const renderTimeItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.timeItem,
        selectedTime === item && styles.selectedTimeItem,
      ]}
      onPress={() => handleTimeSelect(item)}>
      <Text
        style={[
          styles.timeText,
          selectedTime === item && styles.selectedTimeText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Incomplete Booking', 'Please select both date and time');
      return;
    }

    Alert.alert(
      'Booking Confirmed',
      `Your appointment is booked for ${selectedDate} at ${selectedTime}`,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setModalVisible(false);
            navigation.navigate('Home', {
              screen: 'Appoint',
              params: {
                screen: 'Request',
              },
            });
          },
        },
      ],
    );
  };


  return (
    <>
      <View style={styles.Container}>
        <View>
          <Image source={{uri: doctor.imageUrl}} style={styles.image} />
        </View>
        <View style={styles.TextContainer}>
          <View style={styles.InnerTextContainer}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.price}>{doctor.price}</Text>
          </View>
          <View>
            <Text style={styles.speciality}>{doctor.speciality}</Text>
            <Text style={styles.text}>{doctor.experience}</Text>
          </View>
        </View>
      </View>
      <View style={styles.InfoContainer}>
        <Text style={styles.Title}>Description</Text>
        <Text style={styles.text}>{doctor.description}</Text>
      </View>
      <View style={styles.LocationRating}>
        <Text style={styles.Title}>Location & Rating</Text>
        <View style={styles.location}>
          <Icon
            type={'Entypo'}
            name={'location-pin'}
            size={18}
            color={'grey'}
          />
          <Text style={styles.locationText}>{doctor.location}</Text>
        </View>
        <RatingStar rating={doctor.rating} />
        <View style={styles.Button}>
          <TextButton
            text={'BOOK APPOINTMENT'}
            buttonstyle={styles.BookButton}
            style={styles.ButtonText}
            onPress={handleBooking}
          />
        </View>
      </View>
      <View style={styles.ButtonScreenContainer}>
        <TopTabScreens
          tabBarStyle={{
            backgroundColor: 'white',
            marginTop: 15,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 3,
          }}
          tabBarLabelStyle={{fontSize: 18, fontWeight: '500', color: 'green'}}
          tabs={[
            {name: 'Rating', component: Screen1},
            {name: 'Services', component: Screen2},
            {name: 'Specialities', component: Screen3},
          ]}
        />
      </View>

      <Modal animationType="slide" transparent visible={modalVisible}>
        <Pressable
          style={styles.centeredView}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <Calendar
              style={styles.calendar}
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate]: {selected: true, selectedColor: '#00adf5'},
              }}
              monthFormat={'MMMM yyyy'}
              theme={{
                todayTextColor: '#00adf5',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
              }}
            />

            <ScrollView
              style={styles.TimeContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <Pressable
                style={styles.touchTime}
                onPress={() => setShowTimeList(!showTimeList)}>
                <Text style={styles.selectTimeText}>
                  {selectedTime || 'Select appointment time'}
                </Text>
                <Icon
                  type={'AntDesign'}
                  name={showTimeList ? 'up' : 'down'}
                  size={16}
                  color={'grey'}
                />
              </Pressable>

              {showTimeList && (
                <FlatList
                  data={timeSlots}
                  renderItem={renderTimeItem}
                  keyExtractor={item => item}
                  style={styles.timeList}
                  scrollEnabled={false}
                />
              )}

              <TextInput
                style={styles.noteInput}
                placeholder="Add a note for the appointment"
                multiline
                maxLength={200}
              />

              <View style={styles.ButtonContainer}>
                <TextButton
                  text={'Cancel'}
                  buttonstyle={styles.buttonstyle}
                  style={styles.text2}
                  onPress={() => setModalVisible(false)}
                />
                <TextButton
                  text={'Submit'}
                  buttonstyle={styles.buttonstyle2}
                  style={styles.text1}
                  onPress={handleSubmit}
                />
              </View>
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default PractitionerDetail;

const styles = StyleSheet.create({
  Container: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 58,
  },
  TextContainer: {
    flex: 1,
    padding: 10,
    marginLeft: 5,
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
  speciality: {
    fontSize: 16,
    marginTop: 5,
    color: 'orange',
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    color: 'grey',
  },
  InfoContainer: {
    padding: 15,
    backgroundColor: 'white',
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  LocationRating: {
    padding: 15,
    backgroundColor: 'white',
  },
  location: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  locationText: {
    color: 'grey',
    fontSize: 14,
  },
  ButtonScreenContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  Button: {
    alignItems: 'center',
  },
  BookButton: {
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
    marginTop: 15,
  },
  ButtonText: {
    color: 'white',
    fontSize: '16',
    fontWeight: '600',
  },
  selectedDateText: {
    color: '#00adf5',
    marginBottom: 5,
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    height: '79%',
    width: '90%',
  },
  calendar: {
    borderColor: '#ccc',
    width: '100%',
  },
  TimeContainer: {
    width: '100%',
    marginTop: 20,
  },
  touchTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  selectTimeText: {
    fontSize: 18,
    color: 'grey',
  },
  timeList: {
    width: '100%',
    maxHeight: 200,
  },
  timeItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  selectedTimeItem: {
    backgroundColor: '#00adf5',
  },
  timeText: {
    fontSize: 16,
    color: '#333',
  },
  selectedTimeText: {
    color: 'white',
  },
  noteInput: {
    height: 150,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: 16,
    backgroundColor: '#white',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 55,
  },
  buttonstyle: {
    backgroundColor: 'white',
    height: 50,
    width: '45%',
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
    width: '45%',
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
    fontSize: 20,
    fontWeight: '500',
  },
  text2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
  },
});
