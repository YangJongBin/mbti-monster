import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { useSelector } from 'react-redux';

// action
import { getInit } from '../modules/init';

interface Props {}

function Home(props: Props) {
  const { width, height } = Dimensions.get('screen');
  const count = useSelector((state) => state.counter.count);

  return (
    <View style={[styles.container, { marginTop: 100 }]}>
      <Text>{count}</Text>
      <Button title={'COUNT'} onPress={() => getInit()}>
        {' '}
      </Button>
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
