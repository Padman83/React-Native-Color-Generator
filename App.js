import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';


export default class App extends Component {

  constructor() {

    super();
    this.state = { ColorHolder: '#34637' }
  
  }

  
  ChangeColorFunction = () => {

    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    
    this.setState({
      ColorHolder: ColorCode
    })
  }

  render() {
    return (
      <View style={[ styles.container, { backgroundColor: this.state.ColorHolder }]} >
       
        <Button 
          onPress={this.ChangeColorFunction}
          title="React Native Color Generator" 
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
