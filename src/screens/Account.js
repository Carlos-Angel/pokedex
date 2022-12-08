import React, { useState } from 'react';
import { View } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import UserData from '../components/auth/UserData';
import { useAuth } from '../hooks/useAuth';

export default function Account() {
  const { auth } = useAuth();
  const [viewForm, setViewForm] = useState('login');
  if (auth) return <View>{<UserData />}</View>;

  return (
    <View>
      {viewForm === 'login' ? (
        <LoginForm setViewForm={setViewForm} />
      ) : (
        <RegisterForm setViewForm={setViewForm} />
      )}
    </View>
  );
}
