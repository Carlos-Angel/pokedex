import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { getPokeUser } from '../../api/auth';

export default function LoginForm({ setViewForm }) {
  const { login } = useAuth();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (values) => {
      const user = await getPokeUser();
      setError('');
      if (typeof user === 'undefined') {
        return setError('No has registrado un usuario');
      }

      if (user.email.toLowerCase().trim() !== values.email.toLowerCase().trim()) {
        return setError('correo electrónico incorrecto');
      }

      await login();
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder='correo electrónico'
        autoCapitalize='none'
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue('email', text)}
      />
      <View style={styles.button}>
        <Button title='Login' onPress={formik.handleSubmit} />
      </View>
      <Text style={styles.textInfo}>
        {`¿No tienes una cuenta? `}
        <Text style={styles.link} onPress={() => setViewForm('register')}>
          Regístrate Aquí.
        </Text>
      </Text>

      {formik.errors && <Text style={styles.error}>{formik.errors.email}</Text>}

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

function initialValues() {
  return { username: '', name: '', email: '' };
}

function validationSchema() {
  return {
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
    marginTop: 20,
  },
  button: {
    margin: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
