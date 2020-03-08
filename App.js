import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Storybook from './storybook'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1}}>
      <Storybook />
    </SafeAreaView>
  </>
);

export default App;
