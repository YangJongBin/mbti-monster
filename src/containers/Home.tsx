import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { useSelector } from 'react-redux';

// action
import { getInit } from '../modules/init';

interface Props {}

function Home(props: Props) {
  const { width, height } = Dimensions.get('screen');
  const initValue = useSelector((state) => state.init.value);

  return (
    <View style={[styles.container, { marginTop: 100 }]}>
      <Text>{initValue}</Text>
      <Button title={'COUNT'} onPress={() => getInit()}></Button>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
