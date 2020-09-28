import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text, Grid, Col } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontFamily: 'roboto-bold' }}>
        Olá mundo react!!
      </Text>
      <Text style={{ fontFamily: 'roboto-italic' }}>
        Olá mundo react!!
      </Text>
      <Text style={{ fontFamily: 'roboto-regular' }}>
        Olá mundo react!!
      </Text>
      <Button>
        <Text>Login</Text>
      </Button>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
