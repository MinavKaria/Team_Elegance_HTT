import React from 'react'
import { Image, View } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1}}></View>
        <View>
            <Image source={require('../assets/images/Rectangle 1wave.png')}/>
        </View>
    </View>
  )
}
