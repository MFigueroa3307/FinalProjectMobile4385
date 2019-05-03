import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props)
  {
    super(props);

    var config = {
      //expo allows for secrets and keys access: https://docs.expo.io/versions/latest/workflow/configuration/
      apiKey: Expo.Constants.manifest.extra.firebaseAPIKey,
      authDomain: "edsigconproject.firebaseapp.com",
      databaseURL: "https://edsigconproject.firebaseio.com",
      projectId: "edsigconproject",
      storageBucket: "edsigconproject.appspot.com",
      messagingSenderId: "103618757267",
      appId: "1:103618757267:web:f5e127a974b43a0a"
    };

    //ensure that no more than one firebase is instantiated
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    this.state = {
      speakers: [],
      db: firebase.firestore()
    }

    this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
    this.GetAllSpeakers = this.GetAllSpeakers.bind(this);

  }

  GetAllSpeakers(){

    let speakersRef = this.state.db.collection("speakers2");

    speakersRef.get()
             .then( (querySnapshot) => {
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead(data){

    //console.log("FIRESTORE_TEST", data);

    const ords = [];

    data.forEach( (doc) => {

      //destructure data
      const { item } = doc.data();

      let listItem = {
        key: doc.id,
        item: item,

      }

      ords.push(listItem);
    });

    console.log(ords);
    this.setState(
      {
        speakers: ords
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllSpeakers();
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Speakers</Text>
        <FlatList data={this.state.speakers}
                  renderItem={({item}) => <Text style={styles.item}>{item.item}</Text>} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10    
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
  },  
});