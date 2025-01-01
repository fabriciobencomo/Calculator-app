import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {

  const {
    formula,
    number,
    prevNumber,
    buildNumber
  } =useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom:20}}>
        {/* Resultados */}
        <ThemeText variant='h1'>
          {formula}
        </ThemeText>
        <ThemeText variant='h2'>
          {}
        </ThemeText>

        {/* Fila de botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label='C' blackText color={Colors.lightGray} onPress={() => console.log('C')} />
          <CalculatorButton label='+/-' blackText color={Colors.lightGray} onPress={() => console.log('+/-')} />
          <CalculatorButton label='del' blackText color={Colors.lightGray} onPress={() => console.log('del')} />
          <CalculatorButton label='÷'  onPress={() => console.log('÷')} color={Colors.orange} />
        </View>

        {/* Fila de botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label='7'  onPress={() => buildNumber('7')} />
          <CalculatorButton label='8'  onPress={() => buildNumber('8')} />
          <CalculatorButton label='9'  onPress={() => buildNumber('9')} />
          <CalculatorButton label='X'  onPress={() => buildNumber('X')} color={Colors.orange} />
        </View>

        {/* Fila de botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label='4' onPress={() => buildNumber('4')} />
          <CalculatorButton label='5' onPress={() => buildNumber('5')} />
          <CalculatorButton label='6' onPress={() => buildNumber('6')} />
          <CalculatorButton label='-'  onPress={() => buildNumber('-')} color={Colors.orange} />
        </View>

        {/* Fila de botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label='1' onPress={() => buildNumber('1')} />
          <CalculatorButton label='2' onPress={() => buildNumber('2')} />
          <CalculatorButton label='3' onPress={() => buildNumber('3')} />
          <CalculatorButton label='+' onPress={() => buildNumber('+')} color={Colors.orange} />
        </View>

        {/* Fila de botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label='0' onPress={() => buildNumber('0')} doubleSize={true} />
          <CalculatorButton label='.' onPress={() => buildNumber('.')} />
          <CalculatorButton label='='  onPress={() => console.log('=')} color={Colors.orange} />
        </View>

      </View>
    </View>
  )
}

export default CalculatorApp