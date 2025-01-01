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

  const buildNumber = (numberString: string) => {
    console.log(numberString)
  }

  return {

    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber
  }
}