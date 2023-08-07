import React from "react";
import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    StatusBar,
    ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 298,
            temp_min: 296,
        },
        weather: [
            {
                main: "Clear",
            },
        ],
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 169,
            temp_min: 429,
        },
        weather: [
            {
                main: "Cloudy",
            },
        ],
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 69,
            temp_min: 420,
        },
        weather: [
            {
                main: "Rainy",
            },
        ],
    },
];

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );

    const { container, image } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                src={
                    "https://steamuserimages-a.akamaihd.net/ugc/776237589406780963/310943ED418F9A55F783CAE02AC8C09FFF1EA33B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                }
                style={image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "navy",
    },
    image: {
        flex: 1,
    },
});

export default UpcomingWeather;
