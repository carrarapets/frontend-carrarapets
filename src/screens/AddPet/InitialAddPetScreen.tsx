import React from 'react'
import styled from 'styled-components/native'
import { CustomHeader } from '../../components/CustomHeader/CustomHeader'

const StyledContainer = styled.View`
  flex: 1;
  background-color: white;
`

export const InitialAddPetScreen: React.FC<any> = ({}) => {
  return (
    <StyledContainer>
      <CustomHeader nameScreen="Cadastrar Pet" />
    </StyledContainer>
  )
}

const sendCreatePet = async () => {
  const response = await fetch(
    'https://mvpcarrarapets.herokuapp.com/createpet/${user.id}',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify({
        nome: pet.nome,
        peso: pet.peso,
        comportamento: pet.comportamento,
        foto: pet.foto,
        sexo: pet.sexo,
        raca: pet.raca,
        especia: pet.especia
      }),
    }
  )
}


const sendUpdatePet = async () => {
  const response = await fetch(
    'https://mvpcarrarapets.herokuapp.com/updatepet/${pet.id}',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify({
        nome: pet.nome,
        peso: pet.peso,
        comportamento: pet.comportamento,
        foto: pet.foto,
        sexo: pet.sexo,
        raca: pet.raca,
        especia: pet.especia
      }),
    }
  )
}
//adicioando