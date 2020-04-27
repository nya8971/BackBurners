
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Profile extends Component {
    render() {
        return(
            <View>
                <Text>Profile Screen</Text>
            </View>
        );
    }
<<<<<<< HEAD
  }

  /*handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }*/

  render() {
    const { user, accounts, transactions } = this.props
    const { photo} = this.state
    return(
      <ScrollView>
        <View>
          <Image style={styles.image} source={require('../../Images/Profile/Photo.png')}/>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.bottomView}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 18, color: '#248841', fontFamily: 'Arial', fontWeight: 'bold', paddingTop: 10}}>Bank Accounts</Text>
            <ScrollView style={styles.bankAccountSV} horizontal={true}>
              {accounts.length > 0 ? accounts.map((account, ind) => {
                return(
                  <View key={ind} style={styles.myButton}>
                    <Text onPress={() => alert(account.name)} key={ind} style={{textAlign: "center", color: 'white', fontWeight: 'bold'}}>{account.name}</Text>
                  </View>
                )
              }) : null}
            </ScrollView>
            <View>
              <Text>Upcoming Bills</Text>
              <ScrollView>
                {transactions.length > 0 ? transactions.map((transaction, ind) => {
                  if(transaction.type === 'standing order') {
                    return(
                      <View key={ind} style={styles.myButton}>
                        <Text onPress={() => alert(account.name)} key={ind} style={{textAlign: "center", color: 'white', fontWeight: 'bold'}}>{account.name}</Text>
                      </View>
                    )
                  }
                }) : null}
              </ScrollView>
            </View>
          </View>
          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%'
  },
  nameView: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#248841',
    fontSize: 26,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  bottomView: {
    backgroundColor: '#F1FFF1',
    flex: 1,
    paddingLeft: 30
    //height: height - 246
  },
  bankAccountSV: {
    paddingTop: 30,
    paddingBottom: 30
  },
  myButton:{
    marginRight: 40,
    height: 100,
    width: 100,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'#80E380',
    justifyContent: 'center',
    alignItems: 'center'

  }
})

const mapState = state => {
  alert(JSON.stringify(state.accTrans.trans))
  return {
    user: state.user,
    accounts: state.accTrans.accounts,
    transactions: state.accTrans.trans
=======
}

const mapState = state => {
    return {
      
    };
>>>>>>> parent of 891e22d... more
  };
  
  const mapDispatch = dispatch => {
    return {
      
    };
  };
  
  const ProfileConnect = connect(
    mapState,
    mapDispatch
  )(Profile);
  
  export default ProfileConnect;

export const ProfileScreen = createStackNavigator({
    Profile: { screen: ProfileConnect },
});