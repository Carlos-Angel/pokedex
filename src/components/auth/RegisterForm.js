import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';

export default function RegisterForm({ setViewForm }) {
  const { register } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Registra un usuario</Text>
      <Text style={styles.textSecondary}>*tus datos se guardan de forma local</Text>
      <TextInput
        style={styles.input}
        placeholder='usuario'
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder='nombre'
        autoCapitalize='none'
        value={formik.values.name}
        onChangeText={(text) => formik.setFieldValue('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder='correo electrónico'
        autoCapitalize='none'
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue('email', text)}
      />
      <View style={styles.button}>
        <Button title='Registrar' onPress={formik.handleSubmit} />
      </View>
      <Text style={styles.textInfo}>
        {`¿Ya tienes una cuenta? `}
        <Text style={styles.link} onPress={() => setViewForm('login')}>
          Inicia sesión
        </Text>
      </Text>

      {formik.errors && (
        <>
          <Text style={styles.error}>{formik.errors.username}</Text>
          <Text style={styles.error}>{formik.errors.name}</Text>
          <Text style={styles.error}>{formik.errors.email}</Text>
        </>
      )}
    </View>
  );
}

function initialValues() {
  return { username: '', name: '', email: '' };
}

function validationSchema() {
  return {
    username: Yup.string().required('ingrese un nombre de usuario'),
    name: Yup.string().required('ingrese un nombre'),
    email: Yup.string().email().required('ingrese un correo electrónico'),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  textSecondary: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'gray',
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
  link: {
    color: '#7038F8',
  },
  textInfo: {
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    margin: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
