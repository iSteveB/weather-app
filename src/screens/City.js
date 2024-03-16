import React from 'react';
import moment from 'moment'; 
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ImageBackground,
} from 'react-native';

import IconText from '../components/IconText';

const City = ({ weatherData }) => {
	const {
		container,
		image,
		cityName,
		countryStyles,
		textWrapper,
		populationWrapper,
		populationText,
		riseSetWrapper,
		riseSetText,
		rowLayout,
	} = styles;

	const { name, country, population, sunrise, sunset } = weatherData;
	return (
		<SafeAreaView style={container}>
			<ImageBackground
				source={require('../../assets/City.jpg')}
				style={image}>
				<Text style={[cityName, textWrapper]}>{name}</Text>
				<Text style={[countryStyles, textWrapper]}>{country}</Text>
				<View style={[populationWrapper, rowLayout]}>
					<IconText
						iconName='user'
						iconColor='white'
						bodyText={`Population: ${population}`}
						bodyTextStyles={populationText}
					/>
				</View>
				<View style={[riseSetWrapper, rowLayout]}>
					<IconText
						iconName='sunrise'
						iconColor='white'
						bodyText={moment(sunrise).format('HH:mm')}
						bodyTextStyles={riseSetText}
					/>
					<IconText
						iconName='sunset'
						iconColor='white'
						bodyText={moment(sunset).format('HH:mm')}
						bodyTextStyles={riseSetText}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
	},
	cityName: {
		fontSize: 50,
	},
	country: {
		fontSize: 30,
	},
	textWrapper: {
		color: 'white',
		fontWeight: 'bold',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	populationWrapper: {
		justifyContent: 'center',
		marginTop: 30,
	},
	populationText: {
		color: 'white',
		fontSize: 25,
		marginLeft: 7.5,
		flexDirection: 'row',
	},
	riseSetWrapper: {
		justifyContent: 'space-around',
		marginTop: 30,
	},
	riseSetText: {
		color: 'white',
		fontSize: 20,
		marginLeft: 7.5,
	},
	rowLayout: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
export default City;
