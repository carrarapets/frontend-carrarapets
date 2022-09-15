import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { Coordinator } from '../../navigation/coordinator/coordinator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const StyledContainer = styled.View<{ insets: number }>`
  flex: 1;
  padding-horizontal: 16px;
  background-color: white;
  padding-top: ${({ insets }) => insets};
`

const TitlePaymentDescriptionScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-left: 8px;
  margin-bottom: 8px;
`
const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
  margin-top: 8px;
`
const HeaderContainer = styled.View`
  margin-top: 40px;
`
const IconBack = styled<any>(Feather)`
  font-size: 30px;
  color: black;
  margin-bottom: 36px;
`
const ContainerItemsForHelp = styled.ScrollView`
  margin-top: 24px;
`

export const PaymentDescriptionScreen: React.FC<any> = ({}) => {
  const insets = useSafeAreaInsets()

  return (
    <StyledContainer insets={insets.top}>
      <StatusBar style="dark" />
      <HeaderContainer>
        <TouchableOpacity onPress={Coordinator.goBack}>
          <IconBack name={'arrow-left'} />
        </TouchableOpacity>
      </HeaderContainer>

      <TitlePaymentDescriptionScreen>
        Formas de pagamento
      </TitlePaymentDescriptionScreen>

      <DescriptionText>
        Aqui voce aprende como adicionar, editar e remover as formas de
        pagamento no aplicativo.
      </DescriptionText>

      <ContainerItemsForHelp></ContainerItemsForHelp>
    </StyledContainer>
  )
}
