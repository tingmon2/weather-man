import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default Loading = () => {
    return (<View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image
            style={styles.logo}
            source={{
            uri: 'https://lh3.googleusercontent.com/proxy/NO0uUi8tVjARdXyNvp2Q1_WJjsXmuw3OANc-TVSWTXdDtXY7_pLu8O6NqLi35KDiO_i7p0jHZaxG7szcDEy7Jp6noUkZtCaUMLmA_KT6Ck1Gwkd06YOTH95p',
            }}
        />
        <Text style={styles.text}>Weatherman will report weather...</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: "flex-end",
         paddingHorizontal: 30,
         paddingVertical: 100,
         backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    },
    logo: {
        width: 250,
        height: 650,
    }
});