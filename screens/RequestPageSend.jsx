import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from './components/Header';
import styled from 'styled-components/native';
import { createPost } from './service/ReqService';
import { UserContext } from './userContext';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  padding: 16px;
`;

const Label = styled.Text`
  font-weight: bold;
  margin-top: 16px;
`;

const Input = styled.TextInput`
  padding: 12px;
  background-color: #eee;
  border-radius: 8px;
  margin-top: 8px;
`;

const TextArea = styled(Input)`
  height: 100px;
`;

const SubmitButton = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 16px;
  background-color: #FFD700;
  border-radius: 8px;
  align-items: center;
`;

const SubmitText = styled.Text`
  color: #ffff;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const RequestPageSend = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const context = useContext(UserContext);
  const user = context.user;

  const handleSubmit = async () => {
    let isValid = true;

    if (title.trim() === '') {
      setTitleError('Заголовок не может быть пустым');
      isValid = false;
    } else {
      setTitleError('');
    }

    if (description.trim() === '') {
      setDescriptionError('Описание не может быть пустым');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    if (isValid) {
      await createPost(title, description, user._id)
      navigation.navigate('Home');
    }
  };

  return (
    <Container>
      <Header title="Рядом!" />
      <Content>
        <Label>Заголовок</Label>
        <Input
          placeholder="Введите заголовок"
          value={title}
          onChangeText={(text) => {
            setTitle(text);
            setTitleError(''); 
          }}
        />
        {titleError ? <ErrorText>{titleError}</ErrorText> : null}

        <Label>Что надо сделать?</Label>
        <TextArea
          placeholder="Опишите задачу"
          multiline
          value={description}
          onChangeText={(text) => {
            setDescription(text);
            setDescriptionError(''); 
          }}
        />
        {descriptionError ? <ErrorText>{descriptionError}</ErrorText> : null}

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Отправить</SubmitText>
        </SubmitButton>
      </Content>
    </Container>
  );
};