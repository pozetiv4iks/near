import { Text, View } from 'react-native';
import  styled from 'styled-components/native';
import LogoHeader from './LogoHeader';

const BlockHeader = styled.View`
background-color: #FFD000;
width:100%;
height:60px;
align-items:center;
justify-content: space-between;
`;

const LogoBlock = styled.View`
margin-left:90px;
margin-top:10px;
`;

const LogoTextBlock = styled.Text`

`;

export const Header = () => {
  
    return (
      <BlockHeader>
        <LogoBlock>
          <LogoHeader/>
          <LogoTextBlock>Рядом!</LogoTextBlock>
        </LogoBlock>
      </BlockHeader>
    )
}