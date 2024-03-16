import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
	const [weather, isLoading, error] = useGetWeather();
	const { container } = styles;

	if (weather && weather.list) {
		return (
			<NavigationContainer>
				<Tabs weather={weather} />
			</NavigationContainer>
		);
	}

	return (
		<View style={container}>
			<ActivityIndicator size='large' color='#e16162' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
