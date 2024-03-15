import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [location, setlocation] = useState(null);
	const [error, setError] = useState(null);
	const { container } = styles;

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			console.log(status);
			if (status !== 'granted') {
				console.log('Permission to access location was denied');
				setError('Permission to access location was denied');
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setlocation(location);
			setIsLoading(false);
		})() ;
	}, []);

	if (error) {
		console.log(error);
	}

	if (location) {
		console.log(location);
	}

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
