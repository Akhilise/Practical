import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const TopTabScreens = ({
  tabs = [],
  tabBarLabelStyle = {},
  tabBarStyle = {},
  initialRouteName
}) => {
  return (
    <TopTab.Navigator
    initialRouteName={initialRouteName}
      screenOptions={{
        tabBarStyle: tabBarStyle,

        tabBarLabelStyle: tabBarLabelStyle,
        
      }}>
      {tabs.map((tab, index) => (
        <TopTab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.name,
          }}
        />
      ))}
    </TopTab.Navigator>
  );
};

export default TopTabScreens;
