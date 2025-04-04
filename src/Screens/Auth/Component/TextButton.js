import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from '../../../Assets/Icon/Icon';

const TextButton = ({
  style,
  text,
  onPress,
  buttonstyle,
  type,
  name,
  size,
  color,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonstyle}>
      {text ? <Text style={style}>{text}</Text> : null}
      {type && name && (
        <Icon type={type} name={name} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
