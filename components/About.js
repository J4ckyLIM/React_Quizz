import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://codingfactory.fr/wp-content/uploads/2014/10/logoMS-02.png' }}></Image>
                <Text>Petit jeu de Quizz réalisé pour le cours d'Application Mobile Hybride</Text>
                <Text>Codé en React Native avec Redux</Text>
                <Text>Projet réalisé par Riyad Achour, Jarno Remetter, Jacky Lim et Léo Faucher</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});