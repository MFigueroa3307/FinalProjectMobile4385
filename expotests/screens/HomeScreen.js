import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      

      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/Capture.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
          

            <Text style={styles.getStartedText}>EDSIGCON | CONISAR 2019</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Wednesday, Nov.6 — Saturday, Nov.9</MonoText>
            </View>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.getStartedText}>Peer-reviewed conferences focusing on Information Systems & Computing Education and Information Systems Applied Research inviting scholarly work including research papers, case studies, abstracts and workshop/panel proposals.
          </MonoText>
            </View>
            
            {/* <Text style={styles.getStartedText}>
            Peer-reviewed conferences focusing on Information Systems & Computing Education and Information Systems Applied Research inviting scholarly work including research papers, case studies, abstracts and workshop/panel proposals.

            
            </Text> */}
            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.getStartedText}>EDSIG Conference on Information Systems & Computing Education - 
            Serving Academic Professionals and Institutions of Higher Learning
            Scholarly work focusing on (but not limited to) pedagogy, model curriculum, and education innovation in data analytics, cybersecurity, app development, software engineering, etc.
            </MonoText>
            </View>
            {/* <Text style={styles.getStartedText}>
            EDSIG Conference on Information Systems & Computing Education
            Serving Academic Professionals and Institutions of Higher Learning
            Scholarly work focusing on (but not limited to) pedagogy, model curriculum, and education innovation in data analytics, cybersecurity, app development, software engineering, etc.
            </Text> */}
            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.getStartedText}>Conference on Information Systems Applied Research - 
            Serving Academic Professionals, Practitioners and the IT Industry
            Research focusing on (but not limited to) data analytics, IS Management, cybersecurity, data privacy, big data management, cloud and virtualization, IS strategy, ethical issues, etc.
            </MonoText>
            </View>
            {/* <Text style={styles.getStartedText}>
            Conference on Information Systems Applied Research - 
            Serving Academic Professionals, Practitioners and the IT Industry
            Research focusing on (but not limited to) data analytics, IS Management, cybersecurity, data privacy, big data management, cloud and virtualization, IS strategy, ethical issues, etc.
            </Text> */}
          </View>

        </ScrollView>

        
      </View>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: '#ffff00',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  getStartedText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
}
});
