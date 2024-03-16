import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';

import RowText from '../components/RowText';

const CurrentWeather = ({ weatherData }) => {
	const {
		wrapper,
		container,
		tempStyles,
		feelsStyles,
		highLowWrapper,
		highLow,
		bodyWrapper,
		descritpion,
		message,
	} = styles;

	const {
		main: { temp, feels_like, temp_max, temp_min },
		weather,
	} = weatherData;
	const weatherCondition = weather[0].main;
	return (
		<SafeAreaView
			style={[
				wrapper,
				{
					backgroundColor:
						weatherType[weatherCondition]?.backgroundColor,
				},
			]}>
			<View style={container}>
				<Feather
					name={weatherType[weatherCondition]?.icon}
					size={100}
					color='#f9bc60'
				/>
				<Text style={tempStyles}>{Math.round(temp)}°C</Text>
				<Text style={feelsStyles}>Feels like it is {feels_like}</Text>
				<RowText
					firstMessage={`High: ${Math.round(temp_max)}`}
					secondMessage={` Low: ${Math.round(temp_min)}`}
					containerStyles={highLowWrapper}
					firstMessageStyles={highLow}
					secondMessageStyles={highLow}
				/>
			</View>
			<RowText
				firstMessage={weather[0].description}
				secondMessage={weatherType[weatherCondition].message}
				containerStyles={bodyWrapper}
				firstMessageStyles={descritpion}
				secondMessageStyles={message}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#abd1c6',
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: StatusBar.currentHeight,
	},
	tempStyles: {
		color: '#001e1d',
		fontSize: 50,
	},
	feels: {
		color: '#001e1d',
		fontSize: 30,
	},
	highLow: {
		color: '#001e1d',
		fontSize: 20,
	},
	highLowWrapper: {
		flexDirection: 'row',
	},
	bodyWrapper: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 40,
	},
	descritpion: {
		color: '#001e1d',
		fontSize: 48,
	},
	message: {
		color: '#001e1d',
		fontSize: 30,
	},
});

export default CurrentWeather;
