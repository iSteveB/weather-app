import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const City = () => {
    const { container } = styles;
    return (
       <SafeAreaView style={container}>
        <Text>City</Text>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default City;