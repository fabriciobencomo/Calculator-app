
import { useFonts } from 'expo-font'
import { View, Text, Platform } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android'

if(isAndroid){
  NavigationBar.setBackgroundColorAsync('black')
}

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!loaded){
    return null
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout