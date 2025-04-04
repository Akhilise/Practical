/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAuth} from '../../../../AuthProvider';
import Screens2 from './Screens2';
import Screens1 from './Screens1';
import TopTabScreens from '../../DashBoard/Main/TopTabScreens';
import Screens3 from './Screens3';

const Home = () => {
  const {role} = useAuth();

  return (
    <View style={[styles.container]}>
      {role === 'doctor' ? (
        <>
          <TopTabScreens
            tabBarStyle={{
              backgroundColor: '#00C853',
            }}
            tabBarLabelStyle={{
              fontWeight: '500',
              fontSize: 18,
              marginTop: 55,
              color: 'white',
            }}
            tabs={[
              {name: 'Location', component: Screens1},
              {name: 'Service', component: Screens2},
              {name: 'Specialities', component: Screens3},
            ]}
          />
        </>
      ) : (
        <TopTabScreens
          tabBarStyle={{
            backgroundColor: '#00C853',
          }}
          tabBarLabelStyle={{
            fontWeight: '500',
            fontSize: 18,
            marginTop: 55,
            color: 'white',
          }}
          tabs={[
            {name: 'Request', component: Screens1},
            {name: 'Ongoing', component: Screens2},
            {name: 'Completed', component: Screens3},
          ]}
        />
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
