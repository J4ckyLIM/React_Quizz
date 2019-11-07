import React, { Component } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import About from './components/About';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  handleSubmit = (e) => {
    this.setState({
      name: e
    })
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <TextInput onChangeText={this.handleSubmit} placeholder="Entrez votre pseudo"></TextInput>
        <Button title="Commencer" onPress={this.goToGame} />
        <Button title="About" onPress={() => this.props.navigation.navigate('About', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}></Button>
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    About: About
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});