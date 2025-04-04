import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Input = ({
  validate,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  text,
  value,
  maxLength,
}) => {
  const [error, setError] = useState();
  const handleValidation = children => {
    if (validate) {
      const validationResult = validate(children);
      setError(validationResult.error || '');
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{text}</Text>

      <View>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          onChangeText={handleValidation}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          value={value}
          maxLength={maxLength}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 16,
    color:'gray',

  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#a7a3a3',
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
    borderBottomWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
export default Input;
