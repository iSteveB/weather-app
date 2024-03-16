import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';

const ListItem = ({ dt_txt, min, max, condition }) => {
	const { item, date, temp,dateTextWrapper } = styles;
  
	return (
		<View style={item}>
			<Feather
				name={weatherType[condition]?.icon}
				size={50}
				color='black'
			/>
			<View style={dateTextWrapper}>
				<Text style={date}>{moment(dt_txt).format('dddd')}</Text>
				<Text style={date}>{moment(dt_txt).format('H:MM:SS')}</Text>
			</View>
			<Text
				style={
					temp
				}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		marginVertical: 8,
		marginHorizontal: 16,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderWidth: 5,
		padding: 20,
		backgroundColor: 'peachpuff',
	},
	date: {
		color: 'black',
		fontSize: 15,
	},
	temp: {
		color: 'black',
		fontSize: 20,
	},
  dateTextWrapper: {
    flexDirection: 'column',
  },
});

export default ListItem;
