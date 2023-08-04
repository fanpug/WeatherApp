import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons'

const DATA = [
    {
        "dt_txt": "2023-02-18 12:00:00",
        "main": {
            "temp_max": 298,
            "temp_min": 296,
        },
        "weather":[
            {
                "main": "Clear"
            }
        ]
    },
    {
        "dt_txt": "2023-02-18 15:00:00",
        "main": {
            "temp_max": 169,
            "temp_min": 429,
        },
        "weather":[
            {
                "main": "Cloudy"
            }
        ]
    },
    {
        "dt_txt": "2023-02-18 18:00:00",
        "main": {
            "temp_max": 69,
            "temp_min": 420,
        },
        "weather":[
            {
                "main": "Rainy"
            }
        ]
    },
]

const Item = (props) => {
    const { dt_txt, min, max, condition} = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
}

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground 
            src={'https://steamuserimages-a.akamaihd.net/ugc/776237589406780963/310943ED418F9A55F783CAE02AC8C09FFF1EA33B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'}
            style={styles.image}
        >
            <Text>Upcoming Weather</Text>    
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                />
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'navy',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image: {
        flex: 1,
    }
})

export default UpcomingWeather