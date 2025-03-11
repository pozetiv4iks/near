import React, { useContext, useState } from 'react';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { Header } from './components/Header';
import { UserContext } from './userContext';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  flex:1;
  padding:16px;
  align-items:center;
`;

const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  width:100%;
  padding: 12px;
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 16px;
  ${({ disabled }) => disabled && 'background-color: #ddd;'}
`;

const Button = styled.TouchableOpacity`
  width:100%;
  padding: 16px;
  background-color: #FFD700;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const HomeButton = styled(Button)`
  background-color: #ddd;
`;

const LogoutButton = styled(Button)`
  background-color: #ff4444;
`;

const SaveButton = styled(Button)`
  background-color: #00C851;
`;

const Profile = ({navigation}) => {
  const context = useContext(UserContext);
  const user = context.user;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(`${user.number}`);
  const [age, setAge] = useState(`${user.age}`);
  const [password, setPassword] = useState(user.password);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Здесь можно добавить логику сохранения данных
  };

  const handleLogout = () => {
    Alert.alert(
      'Выход',
      'Точно ли вы хотите выйти с аккаунта?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        { text: 'Выйти', onPress: () => Exit() },
      ],
      { cancelable: false }
    );
  };

  const Exit = () => {
    context.setUser(null);
    navigation.replace('Authorization')
  }

  const handleHome = () => {
    navigation.replace("Home")
  }

  return (
    <Container>
        <Header/>
        <Content>
            <TitleText>Профиль</TitleText>
            <Input
                placeholder="Имя"
                value={name}
                onChangeText={setName}
                editable={isEditing}
            />
            <Input
                placeholder="Фамилия"
                value={surname}
                onChangeText={setSurname}
                editable={isEditing}
            />
            <Input
                placeholder="Почта"
                value={email}
                onChangeText={setEmail}
                editable={isEditing}
            />
            <Input
                placeholder="Номер телефона"
                value={phone}
                onChangeText={setPhone}
                editable={isEditing}
            />
            <Input
                placeholder="Возраст"
                value={age}
                onChangeText={setAge}
                editable={isEditing}
            />
            <Input
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                editable={isEditing}
                secureTextEntry
            />
            {isEditing ? (
                <SaveButton onPress={handleSave}>
                <ButtonText>Сохранить</ButtonText>
                </SaveButton>
            ) : (
                <Button onPress={handleEdit}>
                <ButtonText>Изменить</ButtonText>
                </Button>
            )}
            <LogoutButton onPress={handleLogout}>
                <ButtonText>Выйти</ButtonText>
            </LogoutButton>
            <HomeButton onPress={handleHome}>
                <ButtonText>Домой</ButtonText>
            </HomeButton>
        </Content>
    </Container>
  );
};

export default Profile;