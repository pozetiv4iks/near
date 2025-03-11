import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Header } from './components/Header';
import { createUser, findUserEmail } from './service/UserService';
import { UserContext } from './userContext';

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
  margin-top:20px;
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

const GenderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;
`;

const GenderButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({ selected }) => (selected ? "#FFD000" : "#EDEDED")};
`;

const GenderText = styled.Text`
  color: ${({ selected }) => (selected ? "#fff" : "#8F8D8D")};
  font-size: 18px;
  font-weight: bold;
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

const LoginText = styled.Text`
  margin-top: 40px;
  margin-bottom: 20px;
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

export const Registr = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState(null);
  const [errors, setErrors] = useState({});

  const context = useContext(UserContext);

  const validate = async () => {
    const newErrors = {};
  
    if (!firstName) newErrors.firstName = 'Имя обязательно';
    if (!lastName) newErrors.lastName = 'Фамилия обязательна';
    if (!email || !email.includes('@')) newErrors.email = 'Некорректный email';
    if (!phone || phone.length < 10) newErrors.phone = 'Некорректный номер телефона';
    if (!age || isNaN(age)) newErrors.age = 'Некорректный возраст';
    if (!gender) newErrors.gender = 'Выберите пол';
    if (!password || password.length < 6) newErrors.password = 'Пароль должен содержать минимум 6 символов';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Пароли не совпадают';
  
    try {
      const emailExists = await findUserEmail(email); // Дожидаемся ответа
      if (emailExists) {
        newErrors.email = 'Почта уже используется';
      }
    } catch (error) {
      console.error('Ошибка при проверке email:', error);
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async () => {
    isValid = await validate();
    if (isValid) {
      const user = await createUser(firstName, lastName, email, password, phone, gender, age); 
      context.setUser(user);
      navigation.replace("Home");
    }
  };

  const handleLogin = async () => {
    navigation.replace("Authorization");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Header />
          <Content>
            <Title>Регистрация</Title>
            <InputField placeholder="Имя" value={firstName} onChangeText={setFirstName} />
            {errors.firstName ? <ErrorText>{errors.firstName}</ErrorText> : null}

            <InputField placeholder="Фамилия" value={lastName} onChangeText={setLastName} />
            {errors.lastName ? <ErrorText>{errors.lastName}</ErrorText> : null}

            <InputField placeholder="Почта" keyboardType="email-address" value={email} onChangeText={setEmail} />
            {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}

            <InputField placeholder="Номер телефона" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
            {errors.phone ? <ErrorText>{errors.phone}</ErrorText> : null}

            <InputField placeholder="Возраст" keyboardType="numeric" value={age} onChangeText={setAge} />
            {errors.age ? <ErrorText>{errors.age}</ErrorText> : null}

            <GenderContainer>
              <GenderButton selected={gender === 'Мужчина'} onPress={() => setGender('Мужчина')}>
                <GenderText selected={gender === 'Мужчина'}>Мужчина</GenderText>
              </GenderButton>
              <GenderButton selected={gender === 'Женщина'} onPress={() => setGender('Женщина')}>
                <GenderText selected={gender === 'Женщина'}>Женщина</GenderText>
              </GenderButton>
            </GenderContainer>
            {errors.gender ? <ErrorText>{errors.gender}</ErrorText> : null}

            <InputField placeholder="Пароль" secureTextEntry value={password} onChangeText={setPassword} />
            {errors.password ? <ErrorText>{errors.password}</ErrorText> : null}

            <InputField placeholder="Подтвердить пароль" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
            {errors.confirmPassword ? <ErrorText>{errors.confirmPassword}</ErrorText> : null}

            <SubmitButton onPress={handleSubmit}>
              <ButtonText>Создать аккаунт</ButtonText>
            </SubmitButton>
            <LoginText onPress={handleLogin}>Уже есть аккаунт? Войти</LoginText>
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
