import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import ExchangeRateList from './components/ExchangeRateList';
import DisplayResult from './components/DisplayResult ';
import { useProcessedData } from './hooks/useProcessedData'
import { useCalculateExchange } from './hooks/useCalculateExchange'
import { useFetch } from './hooks/useFetch';
import Header from './components/Header'
import GlobalStyle from './components/styles/globalStyles';


const App: React.FC =() => {
  const response = useFetch("/api")
  const [APIdata, setAPIData] = useState<string>('')
 // const [modifiedData, setModifiedData] = useState<string[]>([])
  const [priceNumber, setPriceNumber] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [currencyName, setCurrencyName] = useState<string>('')
  const [amount, setAmount] = useState<string>('');
  const [ displayResult, setDisplayResult] = useState<boolean>(false)
  const [ displayInput, setDisplayInput] = useState<boolean>(true)
  const processedData  = useProcessedData(APIdata)
  const value = useCalculateExchange(amount, country, processedData)


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setAmount(priceNumber)
    setCurrencyName(country)
    setPriceNumber('') // Clean input field 
    setCountry('')
    setDisplayResult(true)
    setDisplayInput(false)
  }

  const handleNewInput = (e: React.FormEvent) => {
 //   e.preventDefault() ;
    setDisplayResult(false)
    setDisplayInput(true)
  }

  // Get fetched data
    useEffect(() => {
      setAPIData(response)
    }, [response])
    


  return (
    <div className="App">
          <GlobalStyle />
          <Header/>
          {displayResult && 
            <DisplayResult value={value} currencyName={currencyName} handleNewInput={handleNewInput}/>
          }
          { displayInput && 
           <InputForm priceNumber={priceNumber} setPriceNumber={setPriceNumber} setCountry={setCountry} handleAdd={handleAdd} processedData={processedData}/>
          }
          <ExchangeRateList processedData={processedData}/>
    </div> 
  );
}



 
export default App;
