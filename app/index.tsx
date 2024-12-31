import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom:20}}>
        {/* Resultados */}
        <ThemeText variant='h1'>
          5 x 5
        </ThemeText>
        <ThemeText variant='h2'>
          25
        </ThemeText>

        {/* Fila de botones */}
        <View style={globalStyles.row}>
          <CalculatorButton label='C' blackText color={Colors.lightGray} onPress={() => console.log('C')} />
          <CalculatorButton label='+/-' blackText color={Colors.lightGray} onPress={() => console.log('+/-')} />
          <CalculatorButton label='del' blackText color={Colors.lightGray} onPress={() => console.log('del')} />
          <CalculatorButton label='÷'  onPress={() => console.log('÷')} />
        </View>
      </View>
    </View>
  )
}

export default CalculatorApp