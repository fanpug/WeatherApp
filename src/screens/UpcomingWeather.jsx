import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    StatusBar,
    ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
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
                <FlatList
                    data={weatherData}
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
