import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './components/Logo';
import styled from 'styled-components/native';

const LogoBg = styled.View`
background-color:#ffffff;
width:70px;
heigth:70px;
border-radius: 100px;
justify-content:center;
align-items: center;
`;

export const Load = () => {
  return (
    <View style={styles.container}>
        <LogoBg>
            <Logo />
        </LogoBg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});