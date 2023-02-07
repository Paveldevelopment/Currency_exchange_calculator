import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { ParentContainer, Form, Input, Dropdown_menu, Label, Button, Option } from './styles/InputForm.styled'


interface Props {
    priceNumber: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    processedData: string[];
    setPriceNumber: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void // this function is not goint to return anything = void
}

interface Options {
    value: string,
    label: string
}

const InputForm: React.FC<Props> = ({setCountry, priceNumber, setPriceNumber, handleAdd, processedData}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [options, setOptions] = useState<Options[]>([])
    

    // Create an array for the select dropdown
    useEffect(() => {
        const select: any = []
        processedData.map((data) => {
            select.push({value: data[0], label: data[3] })
            setOptions(select)
        })
    }, [processedData]) 

    
    return (
    <ParentContainer>
        <Form 
            onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
          }}
        >   
            <div>
            <Label>
                <Input 
                    required
                    className='input_box'
                    type='number'
                    value={priceNumber}
                    onChange={(e) => setPriceNumber(e.target.value)}
                    placeholder="Enter an amount in CZK"
                />
            </Label>
            </div>
            <div>
            <Dropdown_menu onChange={(e) => setCountry(e.target.value)} required>
            <Option value="" selected disabled hidden>Select currency</Option> 
                {options.map((option: any, index) => {
                    return (
                    <Option key={index} value={option.label} > {option.value} ({option.label})</Option>
                    )
                })}
            </Dropdown_menu>
            </div>
            <div>
            <Button>Convert</Button>
            </div>
        </Form>
    </ParentContainer>
  )
}



export default InputForm