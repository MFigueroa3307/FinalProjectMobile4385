import getDirections from 'react-native-google-maps-directions';
import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
 
export default class SettingsScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 41.4986,
        longitude: -81.6945
      },
      destination: {
        latitude: 41.4986,
        longitude: -81.6945
      },
      
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Directions to hotel" />
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});