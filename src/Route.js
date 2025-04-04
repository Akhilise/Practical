import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './Screens/Auth/Main/LoginScreen';
import SelectRoleScreen from './Screens/Auth/Main/SelectRoleScreen';
import Home from './Screens/Main/DashBoard/Main/HomeScreen';
import Appoint from './Screens/Main/Appoinment/Main/AppointScreen';
import NotiScreen from './Screens/Main/Notification/NotiScreen';
import ProfileScreen from './Screens/Main/Profile/Main/ProfileScreen';
import Verification from './Screens/Auth/Main/Verification';
import ForgotScreen from './Screens/Auth/Main/ForgotScreen';
import RegisterScreen from './Screens/Auth/Main/RegisterScreen';
import PractitionerDetail from './Screens/Main/DashBoard/Main/PractitionerDetail';
import DetailScreen from './Screens/Main/DashBoard/Main/DetailScreen';


const Stake = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabHandler = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Appoint"
        component={Appoint}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Noti"
        component={NotiScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <NavigationContainer>
      <Stake.Navigator
        //initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#59a359',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}>
        <Stake.Screen name="Login" component={LoginScreen} />
        <Stake.Screen name="Verification" component={Verification} />
        <Stake.Screen name="Forgot Password" component={ForgotScreen} />
        <Stake.Screen name="Select Role" component={SelectRoleScreen} />
        <Stake.Screen name="Register" component={RegisterScreen} />

        <Stake.Screen
          name="Home"
          component={TabHandler}
          options={{headerShown: false}}
          // initialParams={{
          //   screen: 'Appoint',
          //   params: {
          //     screen: 'Request',
          //   },
          // }}
        />
        <Stake.Screen
          name="Practitioner Details"
          component={PractitionerDetail}
        />
        <Stake.Screen name="Details" component={DetailScreen} />
      </Stake.Navigator>
    </NavigationContainer>
  );
};

export default Route;
