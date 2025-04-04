import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '../../../../Assets/Icon/Icon';

const RatingStar = ({rating = 0}) => {
  // Ensure rating is a valid number between 0 and 5
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <View style={styles.starContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={i} type={'FontAwesome'} name="star" size={20} color="gold" />
      ))}
      {halfStar && (
        <Icon type={'FontAwesome'} name="star-half-o" size={20} color="gold" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          type={'FontAwesome'}
          name="star-o"
          size={20}
          color="grey"
        />
      ))}
    </View>
  );
};


export default RatingStar;

const styles = StyleSheet.create({
  starContainer: {flexDirection: 'row',marginBottom:5,},
});
