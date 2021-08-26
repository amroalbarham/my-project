import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false);
  const [colorr, setColor] = useState('red');
  const change = () => {
    setShow(!show)
    setColor('orange')
  }

  return (
    <View style={styles.container}>
      {show && <Text style={styles.text}>Amro is here ....!</Text>}
      <Button 
        onPress={() =>  change() }
        title="Learn More"
        color={colorr}
        accessibilityLabel="Learn more about this purple button"
      />

    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'black',
    fontSize: 37,
    padding: 50,
    flex: 1
  },
  image: {
    flex: 3,
  },
  // button1: {
  //   position: 'absolute',
  //   top: 20,
  //   color: 'blue'
  // }
});

