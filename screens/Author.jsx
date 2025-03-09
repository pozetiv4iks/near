import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { Header } from './components/Header';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputField = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: #EDEDED;
  color: #8F8D8D;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: #FFD000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const RegisterText = styled.Text`
  margin-top: 40px;
  color: #8F8D8D;
  font-size: 16px;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  align-self: flex-start;
  margin-left: 40px;
`;

export const Author = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    let isValid = true;

    if (!email || !email.includes('@')) {
      setEmailError('Некорректный email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password || password.length < 6) {
      setPasswordError('Пароль должен содержать минимум 6 символов');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Submit the form
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>Вход</Title>
        <InputField
          placeholder="Почта"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <ErrorText>{emailError}</ErrorText> : null}
        
        <InputField
          placeholder="Пароль"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? <ErrorText>{passwordError}</ErrorText> : null}

        <SubmitButton onPress={handleSubmit}>
          <ButtonText>Войти</ButtonText>
        </SubmitButton>
        <RegisterText>Зарегистрироваться</RegisterText>
      </Content>
    </Container>
  );
};
