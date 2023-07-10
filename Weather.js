import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#5D4157", "#A8CABA"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#5f2c82", "#49a09d"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Thunderstorm:{
        iconName: "weather-lightning-rainy",
        gradient: ["#5f2c82", "#49a09d"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#5614B0", "#DBD65C"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#7474BF", "#348AC7"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Atmosphere: {
        iconName: "weather-sunny",
        gradient: ["#ED4264", "#FFEDBC"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ED4264", "#FFEDBC"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#403B4A", "#E7E9BB"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Mist: {
        iconName: "weather-rainy",
        gradient: ["#7474BF", "#348AC7"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Smoke: {
        iconName: "weather-cloudy-alert",
        gradient: ["#ED4264", "#FFEDBC"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#DC2424", "#4A569D"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#403B4A", "#E7E9BB"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Sand: {
        iconName: "weather-windy",
        gradient: ["#DC2424", "#4A569D"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Ash: {
        iconName: "weather-windy",
        gradient: ["#DC2424", "#4A569D"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#FF512F", "#DD2476"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#FF512F", "#DD2476"],
        title: "Weatherman",
        subtitle: "Your weather is on the screen"
    }
}

export default function Weather({temp, condition, description, city}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={150} color="white" style={styles.icon} />
                {console.log(description)}
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.temp}>{temp} ℃</Text>
                <Text style={styles.description}>{city}</Text>
            </View>

            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>

        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Smoke", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        paddingTop: 150
    },
    temp: {
        fontSize: 32,
        color: "white",
        marginTop: 30
    },
    description: {
        fontSize: 20,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontSize: 54,
        fontWeight: "400",
        marginBottom: 20
    },
    subtitle: {
        color: "white",
        fontWeight: "300",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})