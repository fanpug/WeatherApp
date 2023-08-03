import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const DATA = [
    {},
    {},
    {},
]

const UpcomingWeather = () => {
  return (
    <SafeAreaView>
        <Text>Upcoming Weather</Text>
        <FlatList 
            data={DATA}
            // renderItem={}
        ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default UpcomingWeather