import React, {useState} from 'react'
import {Result_Container, Result_Text, Back_To_Inpunt_Button} from './styles/DisplayResult.styled'

interface Props {
    value: number | undefined;
    currencyName: string;
    handleNewInput: (e: React.FormEvent) => void
}

const DisplayResult: React.FC<Props> = ({value, currencyName, handleNewInput}) => {

  const numberTwoDecimal = value?.toFixed(2)

  return (
    <React.Fragment>
       <Result_Container>
        <Result_Text>{ numberTwoDecimal } ({currencyName})</Result_Text>   
        <Back_To_Inpunt_Button
            onClick={handleNewInput}
        >Enter a new value</Back_To_Inpunt_Button>
      </Result_Container>
    </React.Fragment>
  )
}


export default DisplayResult 