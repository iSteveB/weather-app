import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [weather, setWeather] = useState([]);
	const [latitude, setLatitude] = useState([]);
	const [longitude, setLongitude] = useState([]);
	const { container } = styles;

	const fetchWeatherData = async () => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
			);
			const data = await response.json();
			setWeather(data);
		} catch (error) {
			setError("Something went wrong. Couldn't fetch weather data");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setError('Permission to access location was denied');
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setLatitude(location.coords.latitude);
			setLongitude(location.coords.longitude);
			await fetchWeatherData();
		})();
	}, [latitude, longitude]);

	if(weather) console.log(weather);

	if (isLoading) {
		return (
			<View style={container}>
				<ActivityIndicator size='large' color='#e16162' />
			</View>
		);
	}
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
