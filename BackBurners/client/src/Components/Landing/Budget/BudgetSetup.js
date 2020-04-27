import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import { updateBudget } from '../../../store/budget'
import { bindActionCreators } from 'redux';

class BudgetSetup extends Component {
    constructor(props) {
        super(props )
        this.state = {
            currQuestion: 1,
            income: 0,
            staticCosts: 0,
            savings: 0,
            spendingBudget: 0
        }
    }
    render() {
        const question1 = (
            <View >
              <Text >What is your monthly income?</Text>
              <View >
                <TextInput
                 underlineColorAndroid="transparent"
                  //style={styles.budgetInput}
                  //placeholderTextColor={colorTheme.white.snow}
                  onChangeText={income => this.setState({ income: +income })}
                  placeholder="Income"
                />
      
                <Button
                  raised
                  //buttonStyle={styles.bugetSetupButton}
                  textStyle={{ textAlign: 'center' }}
                  title={`→`}
                  onPress={() => {
                    this.setState({ question: 2 });
                  }}
                />
              </View>
            </View>
          );
      
          const question2 = (
            <View >
              <Text >
                What are your monthly static costs?
              </Text>
              <Text style={{ fontSize: 15, textAlign: 'center' }}>
                (i.e. rent, utilities, insurance, etc.)
              </Text>
              <View >
                <TextInput
                 underlineColorAndroid="transparent"
                  //style={styles.budgetInput}
                  //placeholderTextColor={colorTheme.white.snow}
                  onChangeText={staticCosts =>
                    this.setState({ staticCosts: +staticCosts })
                  }
                  placeholder="Static Costs"
                />
      
                <Button
                  raised
                  //buttonStyle={styles.bugetSetupButton}
                  textStyle={{ textAlign: 'center' }}
                  title={`→`}
                  onPress={() => {
                    this.setState({ question: 3 });
                  }}
                />
              </View>
            </View>
          );
      
          const question3 = (
            <View >
              <Text >
                How much would you like to save each month?
              </Text>
              <View >
                <TextInput
                 underlineColorAndroid="transparent"
                  //style={styles.budgetInput}
                  //placeholderTextColor={colorTheme.white.snow}
                  onChangeText={savings => this.setState({ savings: +savings })}
                  placeholder="Savings"
                />
      
                <Button
                  raised
                  //buttonStyle={styles.bugetSetupButton}
                  textStyle={{ textAlign: 'center' }}
                  title={`→`}
                  onPress={() => {
                    /*const spendingBudget =
                      this.state.income - this.state.staticCosts - this.state.savings;
                    this.props.setBudget({ ...this.state, spendingBudget });
                    this.props.navigation.navigate('EditCategories', {
                      title: 'EditCategories'
                    });*/
                  }}
                />
              </View>
            </View>
          );
        let question;

        if (this.state.question === 1) {
            question = question1;
        } else if (this.state.question === 2) {
            question = question2;
        } else {
            question = question3;
        }
        return(
           <KeyboardAvoidingView>
               {question}
           </KeyboardAvoidingView>
        )
    }
}

const mapStateTooProps = state => {
    return {
      budget: state.budget
    };
  };
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateBudget
    }, dispatch)
};
  
export default connect(mapStateTooProps, mapDispatchToProps)(BudgetSetup);