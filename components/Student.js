import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Student extends React.Component {

    render() {
        return(
            <View style={styles.box}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.subTitle}>{this.props.subTitle}</Text>
            </View>
        );
    }

     
}

const styles = StyleSheet.create ({
    box: {
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: 'center',
        padding: 20,
        margin: 20,
      },
    title: {
        fontWeight: "bold",
        fontSize: 20,
      },
      subTitle: {
        fontSize: 10,
      },
});