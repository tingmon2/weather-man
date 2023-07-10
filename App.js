import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "e778f26b65d68aeea9fb817403126247";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { 
      data
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({
        isLoading: false, 
        temp: data.main.temp,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        city: data.name
      });
  }

  getLocation = async () => {
    try{
      //throw Error();
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }
    catch (error) {
      Alert.alert("Obituary notice", "Poor weatherman has frozen because of you! You must accept next time!")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition, description, city} = this.state;
    return isLoading ? <Loading/> : <Weather temp={temp.toFixed(1)} condition={condition} description={description} city={city}/>;
  }
}


//useEffect(async () => {
//  const location = await Location.getCurrentPositionAsync();
//  console.log(location);
//}, []);