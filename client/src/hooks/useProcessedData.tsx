import React, { useState, useEffect} from 'react'




export const useProcessedData =  (APIdata: string) => {
    const [ processedData, setProcessedData] = useState<string[]>([])
   
    
      useEffect(() => {
         if(APIdata) {
                // Divide each string line by line
          const splitArray = APIdata.split(/\r?\n/);

          // Clean the data from the title and a date 
          const cleanData = splitArray.slice(2).map((data) => {
            return data
          })
          // Create arrays from each line and divide strings in each array by a character "|"
          const lineByLineArrays = cleanData.map((data) => {
            return data.split('|') 
          })         
         // Push data into the useState
          const storeObjectData: any = []
          const X = lineByLineArrays.map((data) => {
          storeObjectData.push(data)
          setProcessedData(storeObjectData)
        }) 

         }
      
        }, [APIdata])



    return  processedData 

}

