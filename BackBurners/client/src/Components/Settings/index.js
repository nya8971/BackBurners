
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Settings extends Component {
  render() {
    return(
<<<<<<< HEAD
      <View style={styles.settingsContainer}>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Me.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text> Me <Text style={{fontWeight:'normal'}}>{'\t\t\t\t\t\t' + user.name}</Text>
          </Text>
        </View>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Notifications.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text>Notifications
          </Text>
        </View>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Account.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text>Account <Text style={{fontWeight:'normal'}}>{'\t\t\t\t' + user.email}</Text>
          </Text>
        </View>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Help.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text>Help
          </Text>
        </View>
=======
      <View>
        <Text>Settings Screen</Text>
>>>>>>> parent of 891e22d... more
      </View>
    );
  }
}

const mapState = state => {
    return {
      
    };
  };
  
  const mapDispatch = dispatch => {
    return {
      
    };
  };
  
  const SettingsConnect = connect(
    mapState,
    mapDispatch
  )(Settings);
  
  export default SettingsConnect;

export const SettingsScreen = createStackNavigator({
    Settings: { screen: SettingsConnect },
});