import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Storybook from './storybook'
import MyContacts from './src/views/MyContacts'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Storybook /> */}
      <MyContacts />
    </SafeAreaView>
  </>
);

export default App;
