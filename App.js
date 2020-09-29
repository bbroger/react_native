import { StatusBar } from 'expo-status-bar';
import React, { useState, Fragment } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
};

const products = [
  {
    "id": 1,
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "filename": "0.jpg",
    "height": 600,
    "width": 400,
    "price": 28.1,
    "rating": 4
  }
];

const Home = () => (
  <Content>
    {products.map(product => (
      <Card key={product.id}>
        <CardItem>
          <Left>
            <Thumbnail />
            <Body>
              <Text>{product.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>{product.rating}</Text>
            </Button>
          </Left>
          <Right>
            <Text note>{product.price}</Text>
          </Right>
        </CardItem>
      </Card>))}
  </Content>
);
const Messages = () => null;
const Notification = () => null;

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
    <Container>
      <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
        <Body>
          <Title>Store</Title>
        </Body>
      </Header>
      <View style={styles.container}>
        <Tabs>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
            <Home />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
            <Notification />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
            <Messages />
          </Tab>
        </Tabs>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "blue",
  },
  header: {
    backgroundColor: "#00008B",
  },
  container: {
    flex: 1,
  }
});
