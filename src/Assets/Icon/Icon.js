import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const iconSets = {
  MaterialIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
};

const Icon = ({type, name, size, color}) => {
  const IconComponent = iconSets[type] || MaterialIcons;
  return <IconComponent name={name} size={size} color={color}  />;
};

export {Icon, iconSets};
