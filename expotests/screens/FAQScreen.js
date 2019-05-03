import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import {FAQ,Question} from '../components/Question';

// define some bullets
const bullets = [
  'Whats the price of admission?',
  'Whats transportation like?',
  'Where can I eat?',
  'or give me more ideas!'
]
// define an action
const action_example = () => {
  WebBrowser.openBrowserAsync(
      'https://github.com/'
    );
}

const goTo = (link) => {
  WebBrowser.openBrowserAsync(
      link
    );
}

const questions = [
      {
        question:"How can I help you?",
        reply:"You have several options to choose:",
        bullets: bullets ,
        actionText:"I'm ready to help!",
        onClick: action_example
      },
      {
        question : "Don't you know how to start?",
        reply : "Open a slack account and chat whit me",
        actionText : "Sure! Take me there!",
        onClick : () => goTo('https://slack.com/'),
      }
    ]


export default class FAQScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           
        <View>
          <Text style={{textAlign: 'center'}}>You can load a complete F.A.Q.</Text>
          
          <FAQ 
            title='F.A.Q.'
            questions={questions}
          />

        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
