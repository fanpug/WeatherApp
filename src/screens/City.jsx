import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'

const City = () => {
    const { container, imageLayout, cityName, countryName, cityText, populationText, populationWrapper, riseSetWrapper, riseSetText, rowLayout } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={imageLayout}
            >
                <Text style={[cityText, cityName]}>London</Text>
                <Text style={[cityText, countryName]}>UK</Text>

                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'red'} 
                        bodyText={'9000'} 
                        bodyTextStyles={populationText} /
                    >
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'} 
                        iconColor={'white'} 
                        bodyText={'10:46 am'} 
                        bodyTextStyles={riseSetText} /
                    >
                    <IconText 
                        iconName={'sunset'} 
                        iconColor={'white'} 
                        bodyText={'17:53 pm'} 
                        bodyTextStyles={riseSetText} /
                    >
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City