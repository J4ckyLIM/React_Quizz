import React, {Component} from 'react';
import { StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  state = {
    name: ""
  }
  handleSubmit = (e) => {
    this.setState({
        name: e
    })
  }
  goToGame = () => {

  }

  render(){
    return (
      <SafeAreaView style={style.container}>
        <ImageBackground source={{uri : './assets/quizzB.jpg'}}>
          <TextInput onChangeText={this.handleSubmit} placeholder="Entrez votre pseudo"></TextInput>
          <Button title="Commencer" onPress={this.goToGame}/>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    About: About,
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
);
​
const AppContainer = createAppContainer(AppNavigator);
​
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
