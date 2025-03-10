import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Header } from './components/Header';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  flex:1;
  padding:16px;
`

const StyledMap = styled(MapView)`
  width: 100%;
  height: 500px;
  background-color: #ccc;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  background-color: #eee;
  border-radius: 8px;
  align-items: center;
  margin-horizontal: 4px;
`;

const LargeButton = styled(Button)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
`;

const ButtonText = styled.Text``;

export const Home = ({navigation}) => {


  const handlerRequest = () => {
    navigation.replace('RequestPage');
  }

  const handlerProfile = () => {
    navigation.replace('Profile');
  }
  const handlerAllReq = () => {
    navigation.replace('RequestPage');
  }

  return (
    <Container>
      <Header title="Рядом!" />
      <StyledMap />
      <Content>
        <ButtonRow>
          <Button onPress={handlerRequest}>
            <ButtonText>Оставить заявку</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={handlerProfile}>Ваш профиль</ButtonText>
          </Button>
        </ButtonRow>
        <LargeButton>
          <ButtonText onPress={handlerAllReq}>Ваши заявки</ButtonText>
        </LargeButton>
      </Content>
    </Container>
  );
};

