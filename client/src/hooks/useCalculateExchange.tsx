import React, { useState, useEffect } from 'react'

export const useCalculateExchange = (amount: string, country: string, processedData: string[]) => {
    const [ value, setValue ] = useState<number>()

   
    useEffect(() => {
        if(amount && country) {
            processedData.map((data) => {
                if(data[3] === country) {
                    const calculateResult = Number(amount) * Number(data[4])
                    setValue(calculateResult)
                }
            })
        }
    }, [amount, country, processedData])
   
 
    return  value
}

 
