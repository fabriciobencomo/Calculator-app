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
    if(lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0)
      setFormula( `${ firstFormulaPart } ${lastOperation.current} ${number}`)
    } else{
      setFormula(number)
    }
  }, [number])

  useEffect(() => {
    const subResult = calculateResult()
    setPrevNumber(`${subResult}`)
    // setFormula(number)
  }, [formula])

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

  const setLastNumber = () => {
    calculateValue()

    if(number.endsWith('.')){
      setPrevNumber(number.slice(0, -1))
    }

    setPrevNumber(number)
    setNumber('0')
  }

  const divideOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.divide;
  }

  const sumOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.add;
  }

  const subtractOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.subtract;
  }

  const multiplyOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.multiply;
  }

  const calculateResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ')
    const num1 = Number(firstValue)
    const num2 = Number(secondValue)

    if(isNaN(num2)) return num1

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2
      
      default:
        throw new Error(`Operation ${operation} not Implmented`)
    }
  }

  const calculateValue = () => {
    const subResult = calculateResult()
    setFormula(`${subResult}`)
    lastOperation.current = undefined
    setPrevNumber('0')
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
    deleteLast,

    // Methods Operations
    divideOperation,
    sumOperation,
    subtractOperation,
    multiplyOperation,
    calculateResult,
    calculateValue
  }
}