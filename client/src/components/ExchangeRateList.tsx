import React from 'react'
import { Card, Container1, Container2, Text, FlexBox } from './styles/ExchangeRateList.styled'


interface Props {
  processedData: string[]
}


const ExchangeRateList: React.FC<Props> = ({processedData}) => {
  
  return (
    <>
    <FlexBox>
      <Container1>
        {processedData.map((data, index) => {
        return (
          <Card key={index}>
            <Text>{data[3]}</Text>
            <Text>{data[4]}</Text>
          </Card>
        )
        })}
      </Container1>
      <Container2>
        {processedData.map((data, index) => {
        return (
          <Card key={index}>
            <Text>{data[3]}</Text>
            <Text>{data[4]}</Text>
          </Card>
        )
        })}
      </Container2>
    </FlexBox>
  </>
  )

  
}

export default ExchangeRateList