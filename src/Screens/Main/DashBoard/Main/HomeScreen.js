/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import TopTabScreens from './TopTabScreens';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import SearchBar from '../Components/SearchBar';

import {useAuth} from '../../../../AuthProvider';
import DoctorList from '../Components/DoctorList';

const Home = () => {
  const {role} = useAuth();

  return (
    <View style={[styles.container]}>
      {role === 'doctor' ? (
        <TopTabScreens
          tabBarStyle={{
            backgroundColor: 'green',
          }}
          tabBarLabelStyle={{
            fontWeight: '500',
            fontSize: 18,
            marginTop: 55,
            color: 'white',
          }}
          tabs={[
            {name: 'Request', component: Screen1},
            {name: 'Ongoing', component: Screen2},
            {name: 'Completed', component: Screen3},
          ]}
        />
      ) : (
        <>
          <View style={styles.SearchBarContainer}>
            <SearchBar />
          </View>
          <View style={styles.DoctorListContainer}>
            <DoctorList />
          </View>
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SearchBarContainer: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#00C853',
  },
  DoctorListContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
