import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import LogoHeader from './LogoHeader';

const BlockHeader = styled.View`
  align-items: center;   /* Исправлено написание */
  justify-content: center;
  background-color: #FFD000;
  width: 100%;
  height: 60px;
`;

const LogoBlockImg = styled.View`
  background: #ffffff;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

const LogoBlock = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;   
  align-items: center;      
  margin-top: 10px;
  width: 179px;
  height: 40px;
`;

const LogoTextBlock = styled.Text`
  color: #ffffff;
  font-weight: 800;
  font-size: 35px;
  line-height: 35px;
  letter-spacing: 0px;
  margin-left: 10px;
`;

export const Header = () => {
  return (
    <BlockHeader>
      <LogoBlock>
        <LogoBlockImg>
          <LogoHeader />
        </LogoBlockImg>
        <LogoTextBlock>Рядом!</LogoTextBlock>
      </LogoBlock>
    </BlockHeader>
  );
};
