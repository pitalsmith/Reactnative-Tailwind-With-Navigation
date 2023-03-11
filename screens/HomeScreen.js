
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <TailwindProvider>
   <View className="flex-1 justify-center items-center bg-pink-500 font-bold">
    <View className='mt-10 mx-auto flex flex-col space-y-4'>
    <View>
      <Text className='font-bold'>HomePage -- Hurray</Text>
      </View>
<View>
      <Button title="Create an Account" onPress={() => navigation.push('CreateAccount')} />
      </View>
      <View>
      <Button title="Details" onPress={() => navigation.push('Details')} />
      </View>
      <View>
      <Button title="SigIn" onPress={() => navigation.push('SignIn')}  />
      </View>
      <StatusBar style="auto" />
      </View>
    </View>
    </TailwindProvider>
  )
}

export default HomeScreen