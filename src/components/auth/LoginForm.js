import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='username'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button title='Login' onPress={() => console.log('login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
