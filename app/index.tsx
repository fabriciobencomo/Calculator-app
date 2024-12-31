import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant='h1'>
        5 x 5
      </ThemeText>
      <ThemeText variant='h2'>
        25
      </ThemeText>
    </View>
  )
}

export default CalculatorApp