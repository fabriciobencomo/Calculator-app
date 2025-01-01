import { useEffect, useRef, useState } from "react";

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷'
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0')
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    //todo: calculate the subresult
    setFormula(number)
  }, [number])

  const clean = () => {
    setNumber('0')
    setPrevNumber('0')
    setFormula('0')
    lastOperation.current = undefined
  }

  const toggleSign = () => {

    if(number.includes('-')){
      return setNumber(number.replace('-', ''))
    }

    setNumber('-' + number)

  }

  const deleteLast = () => {
    if(number === '0') return;
    
    // evaluate if the last number to delete if a negative number
    if(number.length === 2 && number.includes('-')){
      return setNumber('0')
    }

    //reset 0 the last positive number
    if(number.length === 1){
      return setNumber('0')
    }

    setNumber(number.slice(0,-1))
  }

  const buildNumber = (numberString: string) => {
    console.log(numberString)
    // Verify if decimal dot already exist 
    if( number.includes('.') && numberString === '.') return

    // Verify that will be starting with 0
    if (number.startsWith('0') || number.startsWith('-0')){
      if(numberString === '.') {
        return setNumber(number + numberString)
      }

      //evaluate if there another zero(0) but not a decimal dot
      if(numberString === '0' && number.includes('.')){
        return setNumber(number + numberString)
      }

      // evaluate if the number is different from zero, and they dont have decimal dot and its the first number
      if(!number.includes('.') && numberString !== '0'){
        return setNumber(numberString)
      }

      //avoid 00000.000
      if(numberString === '0' &&  !number.includes('.')){
        return;
      }
    }

    setNumber(number + numberString)
    
  }

  return {

    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast
  }
}