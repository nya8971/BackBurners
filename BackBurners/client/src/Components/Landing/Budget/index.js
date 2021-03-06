import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import BudgetSetup from './BudgetSetup';
import EditCategories from './EditCategories';
import Home from '../Home';

class Budget extends React.Component {
  constructor(props) {
    super(props);
  }

  getData() {
   
  }

  render() {
    return (
      <View >
        <View>

        </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    budget: state.acctTrans.budget
  };
};

const BudgetConnect = connect(mapState)(Budget);

export default BudgetConnect;

export const BudgetStack = createStackNavigator({
  Budget: { screen: BudgetConnect },
  BudgetSetup: { screen: BudgetSetup },
  //EditCategories: { screen: EditCategories },
  Home: { screen: Home }
});