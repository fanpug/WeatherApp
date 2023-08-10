import React, { useState, useEffect } from 'react';
import Tabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  
  return (
    <View style={styles.container}>
      {/* <Text>{`${weather} ${error} ${loading}`}</Text> */}
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})

export default App