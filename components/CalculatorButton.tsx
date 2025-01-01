import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';


interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;

}

const CalculatorButton = ({label, color = Colors.darkGray, doubleSize = false, blackText = false, onPress}: Props) => {
  return (
    <Pressable style={({pressed}) => ({
      ...globalStyles.button,
      backgroundColor: color,
      opacity: pressed ? 0.8 : 1,
      width: doubleSize ? 180 : 80,
    })} onPress={() => {
      onPress()
      Haptics.selectionAsync()
    }}>
      <Text style={{
        ...globalStyles.buttonText,
        color: blackText ? 'black' : 'white'
      }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton