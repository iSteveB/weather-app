import React from 'react';
import { StyleSheet, FlatList, View, ImageBackground } from 'react-native';

import ListItem from '../components/ListItem';

const UpComingWeather = ({ weatherData }) => {
	const renderItem = ({ item }) => (
		<ListItem
			dt_txt={item.dt_txt}
			min={item.main.temp_min}
			max={item.main.temp_max}
			condition={item.weather[0].main}
		/>
	);

	const { container, image } = styles;

	return (
		<View style={container}>
			<ImageBackground
				source={require('../../assets/upcoming-weather.jpg')}
				style={image}>
				<FlatList
					data={weatherData}
					renderItem={renderItem}
					keyExtractor={(item) => item.dt_txt}
				/>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
});
export default UpComingWeather;
